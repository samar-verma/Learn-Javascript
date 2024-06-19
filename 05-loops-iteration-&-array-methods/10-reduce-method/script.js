const arr = [1,2,3,4,5,6];

const x = arr.reduce(function (acc,curr) {
  return acc+curr;
},0);

console.log(x);

// Using a for loop
let total = 0;
for (let i = 0;i<arr.length;i++) {
    total = total+arr[i];
};
console.log(total);

// shopping cart
const cart = [
    {id: 1, name: 'shoes', price: 670},
    {id: 2, name: 'book', price: 320},
    {id: 3, name: 'watch', price: 920},
];

const bill = cart.reduce((acc,product) => {
    return acc + product.price;
},0);

console.log(bill);




