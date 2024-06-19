let x;

const arr = [1,2,3,4,55];

// add & remove value at the ending
arr.push(6);
arr.pop();

// add & remove value at begining
arr.unshift(6);
arr.shift();

// search for element
x = arr.includes(2);
x = arr.indexOf(1);

// modify
x = arr.slice(2, 3);
x = arr.splice(3,2);


console.log(x,arr);