//Iterate through the value of Array 

const items = ['book','table','chair','kite'];

// Iterate through the value of object
const users = [
    {name:'samar'},
    {name:'chirag'},
    {name:'raja'}
]

// for (const i of items) {
//     console.log(i);
// }


for (const i of users) {
    console.log(i.name);
};

// const str = 'hello world';

// for (const letter of str) {
//     console.log(letter);
// }


// Loop over Maps
const map = new Map();
map.set('name', 'samar');
map.set('age',30);
map.set('age',30);

for (const [key,value] of map){
    console.log(key,value);
};
