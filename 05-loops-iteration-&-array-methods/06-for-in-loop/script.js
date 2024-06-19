// Object
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
};


// Array
const colorArr = ['red','green','blue','yellow'];

for (const key in colorArr) {
    console.log(colorArr[key]);
};

// String
const str = '546273';

for (const key in str) {
    console.log(str[key]);
};


// In object key is key
// In arrays key is index
// In string key is index of each alphabet

