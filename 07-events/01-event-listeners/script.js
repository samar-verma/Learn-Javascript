const btn = document.querySelector('.btn');

function onClear() {
    const li = document.querySelectorAll('li');
    const ul = document.querySelector('ul');

    // const x = li.forEach((item) => item.remove());

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}



 
// function onClear() {
//     alert('Clear Items');
// }
//  btn.onclick = function () {
//        alert('hellllo');
// };

// btn.onclick = function () {
//     console.log('Clear Items');
// };


// addEventListener()

// btn.addEventListener('click', () => alert('Clear Items'));

btn.addEventListener('click', onClear);

// setTimeout(() => btn.removeEventListener('click', onClear), 5000);

// setTimeout(() => btn.click(), 5000);
