


// // interval function
// const intervalID = setInterval(myCallBack, 1000,'hello');

// // creating a  function
// function myCallBack(a) {
//     console.log(a, Date.now());
// };



// changing color 
let intervalID;

function startChange() {
    if (!intervalID) {
        intervalID = setInterval(changeRandomColor, 1000);
    }
};

// Black to white change
// function changeColor() {
//     if (document.body.style.backgroundColor !== 'black') {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
        
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
        
//     }
// }


// Random color generates

function changeRandomColor() {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = `#${randomColor}`;
}
function stopChange() {
    clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange)
document.getElementById('stop').addEventListener('click', stopChange)

