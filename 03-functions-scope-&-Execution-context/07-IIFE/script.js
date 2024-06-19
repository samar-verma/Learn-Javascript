
(function () {
    const user = 'smr';
    console.log(user);

    const hello = () => console.log('Hello from IIFE');
    hello();
})();


(function (name) {
    console.log('hello ' + name);
})('shawn');

(function hello() {
    console.log('hello');
})();

