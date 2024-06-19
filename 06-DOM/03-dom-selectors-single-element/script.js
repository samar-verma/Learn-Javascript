// document.getElementById()

console.log(document.getElementById('heads'));
console.log(document.getElementById('heads').id);
console.log(document.getElementById('heads').className);
console.log(document.getElementById('heads').getAttribute('class'));


// Set attributes
document.getElementById('heads').title = 'hello there';

document.getElementById('heads').setAttribute('class','tittle');

const title = document.getElementById('heads');

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello world';
title.innerText = 'Hello there';
title.innerHTML = '<strong>Shopping List</strong>';


// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';


// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#heads'));
console.log(document.querySelector('.tittle'));
console.log(document.querySelector('li:nth-child(2)'));







