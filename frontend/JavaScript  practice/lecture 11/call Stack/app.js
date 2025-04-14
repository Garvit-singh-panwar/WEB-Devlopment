let h1 = document.querySelector("#Asc");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}


changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});

// callbacks nesting Callback hell

function savetoDb( data , sucess, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {

        sucess();
    } else {

        failure();
    }


}


savetoDb("apna college",
    () => {
        console.log("your data was saved : ");
        savetoDb("Hello World",
            () => {
                console.log("Sucess2 : data2 saved");
                savetoDb("Shradha",
                    () => {
                        console.log("Sucess3 : data3 saved");
                    },
                    () => {
                        console.log("failure3 : weak connection");
                    });
            },
            () => {
                console.log("failure2 : weak connection");
            });
    },
    () => {
        console.log("weak Connection . data not saved");
    });

    console.log(`\n \n promises function \n \n `)


    function savetoDb1(data) {
            return new Promise((success , failure) =>{
                let internetSpeed = Math.floor(Math.random() * 10) + 1;
                if(internetSpeed > 4){
                    success("Success : data was saved");
                } else {
                    failure("failure : weak connection");
                }
        });
    }

    savetoDb1("apna college")
    .then((result)=>{
        console.log("data1 saved. promise was resolved. ");
        console.log(`result : ${result}`);
        return savetoDb1("helloworld");  
    })
    .then((result)=>{
        console.log("data2 saved");
        console.log(`result : ${result}`);
        return savetoDb1("garvit")
    })
    .then((result)=>{
        console.log("data3 saved");
        console.log(`result : ${result}`);
    })
    .catch((error)=>{
        
        console.log("promise was rejected");
        console.log(`error : ${error}`);
    });

    let element = document.querySelector("#change")
    function changingColor(color,delay){

       return new Promise((resolve ,reject)=>{
            setTimeout(() => {
                element.style.color = color;
                resolve("color changed!");
            }, delay);
       })

    }

    changingColor("red",1000)
    .then(()=>{
        return changingColor("blue",1000);
    }
    )
    .then(()=>{
        return changingColor("yellow",1000);

    })
    .then(()=>{
        changingColor("green",1000);
    })