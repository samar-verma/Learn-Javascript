function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));


    // calling button function 
    const button = createButton('remove-item btn-link text-red');
    
    li.appendChild(button);
    
    document.querySelector('.items').appendChild(li);
};


// Function for create Button
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    // calling icon function
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    
    return button;
    
};


// Function for create Icon
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;

    return icon;

};


createNewItem('butter');


