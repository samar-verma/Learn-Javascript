// setTimeout  function
const timer = setTimeout(hello,2000);

function hello() {
    document.querySelector('h1').textContent = 'changed';
}

// this line will execute first
console.log("hello from global scope");
const button = document.querySelector('button')
button.addEventListener('click',() => clearTimeout(timer));
