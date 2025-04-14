alert("this is a gussing game in which you have to guess a number");

const max = prompt("Enter the maximum no");
const random = Math.floor(Math.random() * max)+1;
let guess = prompt("Guess a number between 1 to maximum no or quit if you want to quit");

while(true)
{
    if(guess == "quit")
    {
        console.log("user quit");
        break;
    }

    else if(guess == random)
    {
        console.log("you are right! congrats!!");
        break;
    } 
    else
    {
        guess = prompt("your guess was wrong. no is please try again");
    }
}