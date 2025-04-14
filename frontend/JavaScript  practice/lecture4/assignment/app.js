let arr = [1,2,3,4,5,6,2,3]
console.log(arr);
let num = prompt("Enter the no you Want to delte from array");
for(let i = 0 ; i < arr.length ; i++)
{   
    if(arr[i] === Number(num))
    {
        arr.splice(i,1);
    }

}
console.log(`new array = ${arr}`);

let number =287152;
let count = 0;
while(number > 0)
{
    number = Math.floor(number/10);
    count++;
}

console.log(`no of digits in number is ${count}`);

number = 287215;
let sum = 0;

while(number > 0 )
{
    sum += number % 10;
    number = Math.floor(number/10);
}

console.log(`sum of all the Elements of no is ${sum}`);

let factorial = 1;
let fact = prompt("Enter a number whose factorial you want to find");
for(let i = 1 ; i <= fact ; i++ )
{
    factorial *= i;
}

console.log(`factorial of ${fact} is ${factorial}`);

let array = [1,2,3,4,5,1,2,3];
let LNO = array[0];
for(let i = 0 ; i  < array.length ; i++)
{
    if(LNO < array[i])
    {
        LNO = array[i];
    }
}

console.log(`Largest no in array is ${LNO}`);
