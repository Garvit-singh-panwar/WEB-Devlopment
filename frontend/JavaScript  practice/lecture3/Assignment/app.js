let array =  [1,2,3,4];
let n = prompt("Enter any positive no less than 5");

alert(array.slice(0,n));

n = Number(prompt("enter a no less than 5"));
n = array.length - n ;
alert(array.slice(n)); 

let str = "";

if(str.length === 0)
{
    console.log("Str empty");
}
else{
    console.log("not Empty");
}

let str1 = "Apple";
 n = Number(prompt("Enter the indx no less than 5"));
if( str1[n] >= "A" && str1[n] <= "Z"  )
{
    console.log("UpperCase");
}
else if(str1[n] >= "a" && str1[n] <= "z" )
{
    console.log("LowerCase");
}
else
{
    console.log("not a alphabet Character");
}

let charstr = "            Apple           ";
console.log(charstr.trim());

let ary = [ "hello" , "how" ,"are" , "you"];
if(ary.includes("abc"))
    {
        console.log("present")
    }
    else{
        console.log("not present");
    }