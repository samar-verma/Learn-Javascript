// Syntax of Arrow function
const add = (a,b) => { return a+b; };

// Implicit Return
const subtract = (a,b) => a-b;

// Can leave off () with a single param
const double = a => a*2;

// Returning an object
const createObj = () => ( { name: 'samar', age: 22 } );

// Array 
const nums = [1,2,3,4,5];
nums.forEach(function (n) {console.log(n);});

// Arrow function in a callback
nums.forEach((n) => console.log(n));


console.log(add(2,3));
console.log(subtract(5,1));
console.log(double(3));
console.log(createObj());