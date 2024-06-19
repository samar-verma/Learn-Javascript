const socials = ['X','LinkedIn','Facebook','Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//      console.log(item);
// });

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));

// function logSocials(social) {
//      console.log(social);
// };

// socials.forEach(logSocials);

const socialObjs = [
     { name: 'X', url: 'https://x.com'},
     { name: 'Facebook', url: 'https://facebook.com'},
     { name: 'LinkedIn', url: 'https://linkedin.com'},
     { name: 'Instagram', url: 'https://instagram.com'},
     
];

socialObjs.forEach((item) => console.log(`${item.name} - ${item.url}`));


