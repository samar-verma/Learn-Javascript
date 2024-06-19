const form = document.getElementById('item-form');

function onSubmit (e) {
    e.preventDefault();
    console.log('submit');

}
const item = document.getElementById('item-input').value;
const check = document.getElementById('item-check').value;


if (item === '' || check === false) {
    alert('please fill all fields');
    return;
};



function onSubmit2 (e) {
    e.preventDefault();
    
    const formData = new FormData(form);

    // const item = formData.get('item');
    // const check = formData.get('check');
    
    const entries = formData.entries();
    console.log(entries);
    console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);
