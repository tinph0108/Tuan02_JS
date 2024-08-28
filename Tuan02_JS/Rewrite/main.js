// map
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// filter
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// find
Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

// reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// some
Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

// every
Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

// flatMap
Array.prototype.myFlatMap = function(callback) {
    return this.myMap(callback).myReduce((acc, val) => acc.concat(val), []);
};

// mapFn 
function mapFn(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

// filterFn 
function filterFn(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

// ======= Chạy thử các hàm =======

// myMap
console.log('Test myMap:');
const arr1 = [1, 2, 3, 4];
const mappedArr = arr1.myMap(x => x * 2);
console.log('Original array:', arr1);
console.log('Mapped array:', mappedArr); 

// myFilter
console.log('\nTest myFilter:');
const filteredArr = arr1.myFilter(x => x > 2);
console.log('Original array:', arr1);
console.log('Filtered array:', filteredArr);

// myFind
console.log('\nTest myFind:');
const foundItem = arr1.myFind(x => x === 3);
console.log('Original array:', arr1);
console.log('Found item:', foundItem);

// myReduce
console.log('\nTest myReduce:');
const reducedValue = arr1.myReduce((acc, x) => acc + x, 0);
console.log('Original array:', arr1);
console.log('Reduced value:', reducedValue);

// mySome
console.log('\nTest mySome:');
const someResult = arr1.mySome(x => x > 3);
console.log('Original array:', arr1);
console.log('Some result:', someResult);

// myEvery
console.log('\nTest myEvery:');
const everyResult = arr1.myEvery(x => x > 0);
console.log('Original array:', arr1);
console.log('Every result:', everyResult); 

// myFlatMap
console.log('\nTest myFlatMap:');
const flatMappedArr = arr1.myFlatMap(x => [x, x * 2]);
console.log('Original array:', arr1);
console.log('FlatMapped array:', flatMappedArr);

// mapFn
console.log('\nTest mapFn:');
const mappedArrFn = mapFn(arr1, x => x + 1);
console.log('Original array:', arr1);
console.log('Mapped array using mapFn:', mappedArrFn); 

// filterFn
console.log('\nTest filterFn:');
const filteredArrFn = filterFn(arr1, x => x <= 3);
console.log('Original array:', arr1);
console.log('Filtered array using filterFn:', filteredArrFn);
