const itemInput = document.getElementById('item-input');
const checkbox = document.getElementById('item-checkbox');
function onInput(e) {
    console.log(e.target.value);
}

function onCheck(e) {
    console.log(e.target.checked);
}

function onFocus(e) {
    console.log('Input is focused');
    itemInput.style.outlineStyle = '';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
}

function onBlur(e) {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}


itemInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);



