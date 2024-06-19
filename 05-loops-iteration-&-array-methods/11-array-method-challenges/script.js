// Challenge 1
const people = [
    {
        firstName: 'samar',
        lastName: 'verma',
        email: 'samar@gmail.com',
        phone: '9111285829',
        age: 22
    },
    {
        firstName: 'chirag',
        lastName: 'tawar',
        email: 'chirag@gmail.com',
        phone: '6265722488',
        age: 21
    },
    {
        firstName: 'raja',
        lastName: 'chouhan',
        email: 'raja@gmail.com',
        phone: '89654468498',
        age: 23
    },
    {
        firstName: 'yash',
        lastName: 'chouhan',
        email: 'yash@gmail.com',
        phone: '999999999',
        age: 21
    },
    {
        firstName: 'divesh',
        lastName: 'verma',
        email: 'divesh@gmail.com',
        phone: '6263671123',
        age: 18
    },
];

const youngPeople = people.filter((age) => age.age<22)
       .map((person) => 
       { return {
        name: person.firstName,
        email: person.email,
      }
    });

console.log(youngPeople);

// Challenge 2
const numbers = [2,-30,50,20,-12,-9,7];

const positiveSum = numbers.filter((num) => num>=0).reduce((acc,cur) => acc+cur);

console.log(positiveSum);

// Challenge 3
const words = ['coder', 'programmer', 'developer'];

const cWord = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(cWord);

const num = [1,2,3,4,5]

const copy = num.map((num) => num);
console.log(copy);