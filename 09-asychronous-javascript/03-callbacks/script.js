// Simple callback function
// function toggle(e) {
//     e.target.classList.toggle('changeColor');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'},
];

// Creating a new post
function createPost(post, cb) {
    setTimeout(()=> {
        posts.push(post);
        cb();
    },2000);
    
}

// Appending post in Div
function getPosts() {
    setTimeout(() => {
        posts.forEach( (post) => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
        document.querySelector('#div').appendChild(div);
    });
},1000);
}


createPost({title:'Post three',body: 'This is post three'}, getPosts);

// getPosts();
