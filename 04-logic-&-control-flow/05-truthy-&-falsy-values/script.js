/*
Falsy Values:
false
0
"" or '' (Empty string)
null
undefined
Na
*/


// Truthy and Falsy caveats
const children = 2;

if (children) {
    console.log(`You have ${children} children`);
}
else {
    console.log('Please enter number of children');
}

// Checking for empty arrays
// An empty array is truthy
const posts = [];

if (posts) {
    console.log('list post');
} else {
    console.log('no posts');
}

// Checking for empty Objects
// An empty object is truthy
       const user = {};


// Loose Equality (==)

    

