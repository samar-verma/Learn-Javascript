const posts = [
    {name: 'samar verma', age: 22},
    {name: 'chirag tawar', age: 21}
];


const post = new Promise( (resolve) => {
   setTimeout (() => {
    item = {name: 'raja', age: 23};
    posts.push(item);
    resolve();
},1000);
});


const getPost = () => {
    const list =  document.getElementById('list');
    posts.forEach((item) => {
    const post = document.createElement('li');
    post.innerHTML = `<h>${item.name} - ${item.age}</h1>`
    list.appendChild(post);
   });
};


post
   .then(getPost)
   .then(() => console.log('done'));



