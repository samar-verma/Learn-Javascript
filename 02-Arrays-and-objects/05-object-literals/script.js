let x;
const person = {
    name: 'samar verma',
    age: 22,
    isAdmin: true,
    address: {
        street: '123 main st',
        city:'Indore',
        state:'MP',
    },
    hobbies: ['sketching','cricket','coding']
};

// access property
x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies.includes('cricket');

// change values
person.name = 'smr'
x = person.name;

// add new property
person.course = 'javascript';

person.greet = function() {
    console.log(`Hello, my name is ${person.name}`);
};

person.greet();

const person2 = {
    'first name': 'samar'
};

x = person2['first name'];

console.log(x);