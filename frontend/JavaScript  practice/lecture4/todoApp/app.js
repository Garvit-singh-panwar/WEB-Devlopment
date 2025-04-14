alert("this is a simple todo list application");

let todo = [];
let req = prompt("Enter the request you want \n list to show your list \n add to add task on list \n delete to delete task from the list \n exit to exit from the app ")

while(true)
{
    if(req === "quit")
    {
        console.log("thanks for using the app");
        break;
    }

    if(req === "add")
    {
        todo.push(prompt("enter What do you want to add"));
    }
    else if(req === "list")
    {
        console.log("----------X----------")
        for( i = 0 ; i < todo.length ; i++)
        {
            console.log(i +" "+todo[i]);
        }
        console.log("----------X----------")
    }
    else if(req === "delete")
    {
        todo.splice(prompt("Enter which index you want to delete") , 1);
    }
    else{
        console.log("wrong req");
    }

    req = prompt("Please Enter your req");
}

