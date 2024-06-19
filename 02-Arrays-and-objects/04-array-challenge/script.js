// Challenge 1
let x;

const arr = [1,2,3,4,5];

arr.push(6);
arr.unshift(0);
arr.reverse();
x = arr;
console.log(x);

// Challenge 2
let y;

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

// Solution 1
const arr3 = arr1.slice(0,4);

y = arr3.concat(arr2);
y = [...arr3,...arr2];

// Solution 2
const arr4 = [...arr1,...arr2];
 arr4.splice(4,1);
console.log(arr4);


