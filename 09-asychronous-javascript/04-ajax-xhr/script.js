const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/samar-verma/repos');



// readyState has 5 possible values
// 0: request not initialized
// 1: server connection eastablished
// 2: request received
// 3: processing request
// 4: request finished and response is ready

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);

        data.forEach((repo) => {
             const li = document.createElement('li');
             li.innerHTML = `<strong>Name-${repo.name}, Genre-${repo.description}</strong>`;
             document.getElementById('list').appendChild(li);
            
        });
    };
};

xhr.send();