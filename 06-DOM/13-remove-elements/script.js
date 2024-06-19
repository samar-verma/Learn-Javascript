function removeh1() {
    const h1 = document.querySelector('.h1');
    h1.remove();
};

// Remove Child method
function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
};


// Remove any child 
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
};


// Remove by using indexing
function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber-1];

    ul.removeChild(li);
};

// Remove directly select child
function removeItem3(itemNumber) {
   const li = document.querySelectorAll('li');
   li[itemNumber -1].remove();
};

// Remove using arrow function
const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber-1].remove();



removeh1();
// removeFirstItem();
removeItem(2);
removeItem2(1);
removeItem3(1);
removeItem4(1);