// const numbers  = [1,2,3,4,5,6,7,8,9,10];

// // by normal function
// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 ===0;
// });

// console.log(evenNumbers);

// // By  arrow function
// const oddNumbers = numbers.filter(number => number % 2 !==0);

// console.log(oddNumbers);

// // Filter by using forEach

// const luckyNumber = [];

// numbers.forEach((number) => {
//     if (number===7) {
//         luckyNumber.push(number);
//     }
// });

// console.log(luckyNumber);


// COMPANIES filter
const companies = [
    {name: 'TCS',category: 'tech', country: 'India'},
    {name: 'suzuki',category: 'auto', country: 'japan'},
    {name: 'SBI',category: 'finance', country: 'India'},
    {name: 'CIPLA',category: 'PHARMA', country: 'India'},
    {name: 'LV',category: 'fasion', country: 'paris'},
    {name: 'google',category: 'tech', country: 'USA'},
];

const india = companies.filter(function (countrys) {
    if (countrys.country=== 'India') {
              console.log(countrys);
    }
});



console.log(india);