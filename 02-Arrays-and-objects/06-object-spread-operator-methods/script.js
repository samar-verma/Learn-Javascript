let x;

const todo = new Object();

todo.id = 1;
todo.name = 'buy milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42,
            lng: 32
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};

// spread operator
const obj3 = {...obj1,...obj2};

// assign 
const obj4 = Object.assign({}, obj1,obj2);

x = obj4;

// Array of Objects
const todos = [
    {id:1,name: 'buy milk'},
    {id:2,name: 'wash cloths'},
    {id:3,name: 'cook'},
];

todos.push({id:4,name: 'walk'});

// Object keys into array
x = Object.keys(todo);

// Object values into array
x = Object.values(todo);

// array of key-value pair
x = Object.entries(todo);




console.log(x);
