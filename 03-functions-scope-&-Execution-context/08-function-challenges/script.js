// Challenge 1

// Regular function
function getCelsius(fahrenheit) {
    const celsius = (fahrenheit-32)*5/9;
    return celsius;
};

// Arrow function 
const celsius = fahrenheit => (fahrenheit-32)*5/9;

console.log(celsius(99));
console.log(`The temperature is ${getCelsius(32)} \xB0C`);


// Challenge 2

// Using arrow function
const minMax = (...arr) => ({
    min: Math.min(...arr),
    max: Math.max(...arr),
});

console.log(minMax(-5,2,33,4,5));


// Challenge 3

(function show(length,width) {

    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length*width}`);
})(4,4);


