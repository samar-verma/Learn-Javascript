const jokeEl = document.getElementById('box');

const generateJoke =  () => {
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText).value;
      jokeEl.innerHTML = `<strong>${data}</strong>`;
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      jokeEl.style.backgroundColor = `#${randomColor}`;
    };
};
 xhr.send();
};
document.getElementById('box').addEventListener('click',generateJoke);
