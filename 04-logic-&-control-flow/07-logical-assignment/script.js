
//  ||= assigns the right side value only if the left is a falsy value
let a = 0;
a ||= 10;

//  &&= assigns the right side value only if the left is a truthy value
let b = 1;
b &&= 20;

//  ??= assigns the right side value only if the left is null or undefined
let c = null;
c ??= 30;


console.log(a);
console.log(b);
console.log(c);