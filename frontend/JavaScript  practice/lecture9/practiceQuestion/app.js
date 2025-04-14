let body = document.querySelector('.body');

let p = document.createElement('p');
p.innerText= "hey I'm red!";
body.append(p);
p.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText ='I,am a blue h3!';
body.append(h3);
h3.classList.add("blue");

let newdiv = document.createElement('div');
body.insertAdjacentElement("afterend",newdiv);

let h1 = document.createElement('h1');
h1.innerText = "'I'm in a div";
newdiv.append(h1);
let para1 = document.createElement('p');
para1.innerText = '"ME TOO!"';

newdiv.append(para1);

newdiv.classList.add('box');







