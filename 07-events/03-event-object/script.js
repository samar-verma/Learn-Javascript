const head = document.querySelector('.head');

function onClick (e) {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // e.target.style.backgroundColor = 'red';
    // console.log(e.type);
    console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log(e.screenX);
    // console.log(e.screenY);
};

function onDrag(e) {
    document.querySelector('.head').textContent = `X ${e.clientX} Y ${e.clientY}`
};

head.addEventListener('click',onClick);
head.addEventListener('drag', onDrag);
// target & currentTarget
document.body.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e.currentTarget);
});


