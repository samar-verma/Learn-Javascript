const post = {
    id: 1,
    title: 'Post One',
    body: 'This is body'
};

// Convert to JSON string
const str = JSON.stringify(post);


// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);
const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is body'
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is body'
    }

];

const str2 = JSON.stringify(posts);

console.log(str2);