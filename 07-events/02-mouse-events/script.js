const head = document.querySelector('.h1');

const onClick = () => console.log('on click event');
const onDoubleClick = () => console.log('on double click event');
const onRightClick = () => console.log('on Right click event');
const onMouseDown = () => console.log('on Mouse Down event');
const onMouseUp = () => console.log('on Mouse up event');
const onMousewheel = () => console.log('on Mouse wheel event');
const onMouseOver = () => console.log('on Mouse over event');
const onMouseOut = () => console.log('on Mouse out event');
const onDragStart = () => console.log('on Drag Start event');
const onDrag = () => console.log('on Drag event');
const onDragEnd = () => console.log('on Drag end event');


head.addEventListener('click', onClick);
head.addEventListener('dblclick', onClick);
head.addEventListener('contextmenu', onRightClick);
head.addEventListener('mousedown', onMouseDown);
head.addEventListener('mouseup', onMouseUp);
head.addEventListener('wheel', onMousewheel);
head.addEventListener('mouseover', onMouseOver);
head.addEventListener('mouseout', onMouseOut);
head.addEventListener('dragstart', onDragStart);
head.addEventListener('drag', onDrag);
head.addEventListener('dragend', onDragEnd);
