
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
btn.addEventListener("click" , addToDo);

function addToDo(){
    let li = document.createElement("li");
    
    let dltbtn = document.createElement("button");
    dltbtn.classList.add("delete");
    li.innerText += input.value;
    dltbtn.innerText = "delete";



    ul.append(li);
    li.append(dltbtn);
    
    input.value = "";

    // dltbtn.addEventListener("click",function(){
    //     li.remove();
    // })
};

ul.addEventListener("click",function(event){
    if(event.target.nodeName == 'BUTTON')
    {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})




   




