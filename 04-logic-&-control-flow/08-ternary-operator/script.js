// Using a ternary Operator
age = 19;

age >= 18 ? console.log('you can vote') : console.log('you cannot vote');


// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'you can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;
// let redirect;

// if (auth) {
//     alert('welcome to the dashboard');
//     redirect = 'dashboard';

// } else {
//     alert ('Access denied');
//     redirect = 'login'
// }

// 
const redirect = auth ? (alert('welcome to dashboard'),'/dashboard')
              : (alert('Access denied'), '/login');

console.log(redirect);

auth ? console.log('welcome to the dashboard'): null;

auth && console.log('welcome to the dashboard');