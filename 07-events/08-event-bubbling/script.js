const button = document.querySelector('div button');
const div = document.querySelector('body div');

function onButton (e) {
    alert('button was clicked')
    e.stopPropagation();
};

function onDiv () {
    alert('Div was clicked');
   
};

button.addEventListener('click', onButton);
div.addEventListener('click', onDiv);