const itemInput = document.querySelector('#item-input');




const onKeyPress = (e) => console.log('key pressed');

const onKeyUP = (e) => console.log('key UP');

const onKeydown = (e) => {
    console.log('key down')
   
    // key
    console.log(e.key);

    // key code
    console.log(e.keyCode);

    // code
    console.log(e.code);

    // repeat
    console.log(e.repeat);

    // shift key
    console.log(e.shiftKey);
    
    // ctrl key
    console.log(e.ctrlKey);
    
    // Alt key
    console.log(e.altKey);
};


itemInput.addEventListener('keydown', onKeydown);

