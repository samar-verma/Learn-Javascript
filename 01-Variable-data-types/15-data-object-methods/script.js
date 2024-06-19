let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth()+1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();

// Template Literal
x = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;

// DateTimeFormat API
x = Intl.DateTimeFormat('en-IN').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default',{month:'long'}).format(d);

x = Intl.DateTimeFormat('default',{month:'short'}).format(d);

x = d.toLocaleString('default',{month:'short'});



console.log(x);