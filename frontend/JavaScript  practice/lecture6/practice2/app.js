console.log("Makking a function to generate a random number from 1 to 6");

function random()
{
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}

random();
