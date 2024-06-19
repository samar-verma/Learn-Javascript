let x;

const fruits = ['apple','pear','orange'];
const berries = ['strawberry','blueberry','rasberry'];

// fruits.push(berries);

// x = fruits[3][1];

const allfruits = [fruits,berries];

x = allfruits[1][0];

// concat
x = fruits.concat(berries);

// spread operator (...)
x = [...fruits,...berries];

// Flatten Arrays
const arr = [1,2,[3,4],5,[6,7]];
x = arr.flat();

// Static methods on Array objects

x = Array.isArray(fruits);

// string to array
x = Array.from('12345');

// values to array
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c);



console.log(x);