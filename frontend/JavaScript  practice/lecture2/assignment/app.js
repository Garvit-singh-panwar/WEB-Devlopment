let num = 20;
if(num % 10 == 0)
{
    console.log("good");

}
else{
    console.log("bad");
}

let name = prompt("Enter your name");
let age = prompt("enter your age");

alert(`${name} is ${age} years old`);

let Quater = prompt("Enter which  quarter is this ");

switch(Quater)
{
    case "1":
        alert("January , Febuary , March");
        break;
    case "2":
        alert("April,May,June");
        break;
    case "3":
        alert("July,August,September");
        break;
    case "4":
        alert("Qctomber,November,December");
        break;
    default:
        alert("Wrong Quater");
}

let str = prompt("Enter the String");

if((str[0] === "a" || str[0] === "A") && str.length > 5)
{
    alert("good");
}
else {
    alert("bad");
}


let a = 5;
let b = 6;
let c = 7;

if(a > b){
    if(a > c)
    {
        console.log("a");
    }
    else{
        console.log("c");
    }
}
else 
{
    if(b > c)
    {
        console.log("b");
    }
    else{
        console.log("c");
    }
}


let no1 = 3;
let no2 = 47852;

if(no1 % 10 === no2 % 10)
{
    console.log("same");
}
else{
    console.log("notSame");
}