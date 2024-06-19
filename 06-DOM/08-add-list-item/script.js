// Quick & Dirty way
function createListItem(item) {
    const li = createElement('li');


    li.innerHTML = `${item}<button class="remove-item btn-link text-red" <li class="fa-solid fa-xmark"></li></button>`
    
    document.querySelector('.items').appendChild(li);
};


// Clean & Performant
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-kink text-red';

    const icon = document.createElement('li');
    icon.className= 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);

};


createListItem('bread');
createNewItem('butter');