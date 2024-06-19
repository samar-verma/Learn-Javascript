const firstName = 'Samar';
const lastName = 'Verma';
const age = 22;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

// Destructuring

const todo = {
    id: 1,
    title:'Take out trash',
    user: {
        name:'Samar',
    },
};

const { 
    id: todoId,
    title,
    user:{name},
} = todo;
console.log(todoId);


// Destructure Arrays
const numbers = [23,67,33,49];

const [first, second,...nums] = numbers;

console.log(first, second,nums);