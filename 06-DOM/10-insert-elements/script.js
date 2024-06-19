// InsertAdjacentElement 
// function insertElement() {
//     const li = document.querySelector('.ul');

//     const h1 = document.createElement('h1');
//     h1.textContent = 'insertAdjacentElement';

//     li.insertAdjacentElement('beforebegin', h1);
// };


// insertElement();

// Costum insertAfter function

function insertAfter(newEl, existing) {
    const ul = document.querySelector('ul');

    const nextEl = existing.nextElementSibling;

     ul.insertBefore(newEl, nextEl);
};


const new1 = document.createElement('li');
new1.textContent = 'new child';

const exist = document.querySelector('li:first-Child');

insertAfter(new1,exist);

