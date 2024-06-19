let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerHTML = 'Child two';
output = parent.childNodes[3].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild
console.log(output);
