const d = new Date(10,30,2022,6,0,0);
const hour = d.getHours();

console.log(hour);

if (hour<12) {
    console.log('Good morning');
}
else if (hour<18) {
    console.log('Good afternoon');
}
else {
    console.log('good night');
}

// Nested if
if (hour<12) {
    console.log('Good morning');

    if (hour===6) {
        console.log('wake up');
    }
}
else if (hour<18) {
    console.log('Good afternoon');
}
else {
    console.log('good night');
}

// Multiple condition
if (hour>=7 && hour<15) {
    console.log('It is work time');
}


