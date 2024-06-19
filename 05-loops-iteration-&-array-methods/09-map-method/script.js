const numbers = [1,2,3,4,5];

const squared = numbers.map((number) => number*number);

console.log(squared);

// Same with forEach

const squared2 = [];

numbers.forEach((number) => {
    squared2.push(number*number);

});

console.log(squared2);


const companies = [
    {name: 'TCS',category: 'tech', country: 'India'},
    {name: 'suzuki',category: 'auto', country: 'japan'},
    {name: 'SBI',category: 'finance', country: 'India'},
    {name: 'CIPLA',category: 'PHARMA', country: 'India'},
    {name: 'LV',category: 'fasion', country: 'paris'},
    {name: 'google',category: 'tech', country: 'USA'},
];

// Create an array of company name 

const companyNames = companies.map((company) => company.name);

console.log(companyNames);

// Create an array with just company and category
// const companyCategory = companies.map ((company) => {
//     return {
//         name: company.name,
//         category: company.category
//     };
// });

// console.log(companyCategory);

// Create an array of objects with the name and length of each company in years
const companyYears = companies.map((company) => {
    return {
        name: company.name,
        length: company.country
    }
})

console.log(companyYears);

// Chaining different methods