let input = document.querySelector("input");

// input.addEventListener("keydown" , function(event) {
//     console.log(`key = ${event.key}`);
//     console.log(`keycode = ${event.code} `);

    

// });
input.addEventListener("keydown" , function(event) {
    if(event.code == "ArrowUp" )
    {
        console.log("Move Upward");
    }
    else if(event.code == "ArrowDown")
    {
        console.log("Move downwards");
    }
    else if(event.code == "ArrowLeft")
    {
        console.log("Move left");
    }
    else if(event.code == "ArrowRight")
    {
        console.log("Move right");
    }

    

});


let form = document.querySelector("form");

form.addEventListener("submit" , function(event){
    event.preventDefault(); 
    alert("form submitted");
});


let form1 = document.querySelector("#form1");

form1.addEventListener("submit" , function(event) { event.preventDefault();
    let user = document.querySelector('#user');       
    console.log(user.value);
    let pass = document.querySelector('#pass');
    console.log(pass.value);

    alert(`Hi ${user.value} , your password is set to ${pass.value}`);


  });




  let user1 = document.querySelector("#newuser");
            user1.addEventListener("change" , function(event){
                event.preventDefault();
                console.log("change event");
                console.log(`final value = ${this.value}`);
            });

            user1.addEventListener("input" , function(event){
                event.preventDefault();
                console.log("input Event");
                console.log(`final value = ${this.value}`);
            });
       
            let mainform = document.querySelectorAll("form");
    let form2 = document.querySelector("#form2");
    form2.addEventListener("submit" , function(event){
        event.preventDefault();
      });