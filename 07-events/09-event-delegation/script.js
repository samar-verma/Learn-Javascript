const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// // direct traversing li
// listItems.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

// traversing through ul
// list.addEventListener('click', (e) => {
//     if (e.target.className == 'li') {
//         e.target.remove();
//     };
// });

// change color
list.addEventListener('click', (e) => {
    if (e.target.className == 'li') {
        e.target.style.color = 'red';
    };
});