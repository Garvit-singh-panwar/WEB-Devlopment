let btn = document.createElement('button');
let input = document.createElement('input');
let body = document.querySelector('body');

btn.innerText = "Click me";
body.append(input);
body.append(btn);

input.setAttribute("placeholder" , "username");
btn.setAttribute("id" , "btn");

let btnid = document.querySelector("#btn");

btnid.style.backgroundColor = "blue";
btnid.style.color = "white";


let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
body.append(h1);
h1.classList.add("underline" , "cpurple");
let newpc= document.createElement('p');
body.append(newpc);
newpc.innerHTML="Apna College <b>Delta</b> Practice";