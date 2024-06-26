function getData(endpoint,cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET',endpoint);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 & this.status === 200) {
            cb(JSON.parse(this.responseText));

        }
    }

    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000)+ 1000);
}

getData('./movie.json',(data) => {
    console.log(data);
    getData('./actor.json',(data) => {
        console.log(data);
       getData('./genre.json',(data) => {
           console.log(data);
       });
       
    });
});
