// Replace first item
function replaceFirstItem() {
    const firstItem  = document.querySelector('li:first-child')

    const li = document.createElement('li');
    li.textContent = 'Replaced first';

    firstItem.replaceWith(li);
};

// Replace second item
function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced second</li>'
};

// Replace all item 
function replaceAllItems() {
    const lis = document.querySelectorAll('li');
    lis.forEach((item, index) => {item.innerHTML = 'Replace All'});
     
};


// Replace child 
function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'shopping list';
    header.replaceChild(h2,h1);
}



replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();