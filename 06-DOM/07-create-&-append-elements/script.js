const div = document.createElement('div');
div.classNmae = 'my-element';
div.id = 'my-element';
div.setAttribute('title','My Element');


const text = document.createTextNode('Hello world');
div.appendChild(text);


document.body.appendChild(div);