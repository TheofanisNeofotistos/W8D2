Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

Array.prototype.myMap = function (callback) {
    newArr = [];
    this.myEach(ele => {
        newArr.push(callback(ele))
    })
    return newArr;
};


// let a = [1, 2, 3]

// const callback = function (el) {
//     return el * el;
// }

// console.log(a.myMap(callback));


Array.prototype.myReduce = function (callback) {
    let sum = 0
    this.myEach(ele => {
        sum += element
    })
    return sum + initialValue
}

const callback = function (el)