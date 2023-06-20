// Your code here
// Array.prototype.uniq
// uniq should return a new array containing each individual element of the original array only once (creating all unique elements).
// Keep elements in the order in which they first appear in the original array.
// Do not mutate the original array.
// [1,2,2,3,3,3].uniq() // => [1,2,3]

// function uniq(array) {
//     let uniqueArr = [];
  
//     for(let i = 0 ; i < array.length; i++){
//       if(uniqueArr.indexOf(array[i]) === -1 ){
//         uniqueArr.push(array[i]);
//       }
//     }
//   return uniqueArr;
  
//   }

//   console.log(uniq([1,2,2,3,3,3]));

Array.prototype.uniq = function() {
  const newArr = [];

  this.forEach( ele => {
    if(!newArr.includes(ele)){
      newArr.push(ele);
    }
  })
  return newArr;
};


Array.prototype.twoSum = function(){
  const newArr = [];
      for(let i = 0; i < this.length ; i++ ){
        for(let j = i + 1; j < this.length ; j++){
          if(this[i] + this[j] === 0){
            newArr.push([i,j]);
          }
        }
      }
  return newArr;
};



Array.prototype.transpose = function (){
  const newArr = []

  for(let i = 0 ; i < this.length ; i++){
    let level = []
    this.forEach (arr => {
      level.push(arr[i])
    })
    newArr.push(level)
  }
  return newArr
}







  