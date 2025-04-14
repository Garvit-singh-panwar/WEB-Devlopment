let drkbtn = document.querySelector("button");

drkbtn.addEventListener("click" , function(){
   
   let body = document.querySelector('body');
    if(body.classList != "darke"){
        body.classList.add("darke");
    }
   else{
     body.classList.remove("darke");
   }  
});

drkbtn.addEventListener("mouseout" , function(){
    this.style.backgroundColor = "greenyellow";
    setTimeout(() => {
        this.style.backgroundColor = "";
    }, 500);


});

drkbtn.addEventListener('click' , function()
{
    this.style.backgroundColor = "green";
});

let para = document.createElement("p");
document.querySelector('body').append(para);

let input = document.querySelector('#generateP');
input.addEventListener("keypress" , function(event){ 
para.innerText +=  ` ${event.code} `;
});

let h2 = document.createElement("h2");
document.querySelector('body').append(h2);
input.addEventListener("change",function(event){
    h2.innerText+= ` ${this.value} `;
});




