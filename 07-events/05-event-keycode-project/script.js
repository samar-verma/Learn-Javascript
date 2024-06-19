const main = document.querySelector('#main');

function enterKey(e) {

    const arr = [e.key,e.keyCode,e.code];

    const obj = {
        'e.key': e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };

 main.innerHTML = ' ';
    
 for (item in obj) {

    const div = document.createElement('div');
    const text = document.createTextNode(item);
    const empty = document.createTextNode(':- ');
    const text2 = document.createTextNode(obj[item]);
    div.appendChild(text);
    div.appendChild(empty);
    div.appendChild(text2);
    main.appendChild(div);
    console.log(item);
    console.log(obj[item]);


 }
 
};


document.addEventListener('keydown', enterKey)