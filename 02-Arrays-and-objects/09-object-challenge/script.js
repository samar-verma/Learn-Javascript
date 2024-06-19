// Step 1
const library =  [
     {
    title: 'The road ahead',
    author: 'Bill Gates',
    status: {
        own: true,
        reading: false,
        read: false, 
            }
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
            own: true,
            reading: false,
            read: false, 
                }
        },
        {
            title: 'Mockingjay',
            author: 'Suzanne Collins',
            status: {
                own: true,
                reading: false,
                read: false, 
                    }
            }
];

// Step 2
library[0].status.read = true;

console.log(library[0].status.read);


// Step 3
const {title: firstBook} = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);