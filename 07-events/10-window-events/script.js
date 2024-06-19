// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello world'
// };


window.addEventListener('load', 
    () => console.log('Page loaded')
);


window.addEventListener('DOMContentLoaded', 
    () => console.log('DOM loaded')
);


console.log('Run me');

window.addEventListener('resize', 
    () => document.querySelector('h1').textContent = `Resized to ${window.innerWidth} X ${window.innerHeight}`

);


window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} X ${window.scrollY}`);
});


window.addEventListener('focus', () => {
    document.querySelector('h1').style.color = 'red';
    }
)

window.addEventListener('blur', () => {
    document.querySelector('h1').style.color = 'black';
    }
)
