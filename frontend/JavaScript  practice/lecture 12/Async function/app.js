async function greet(){
    throw "404 page not found";
    return "hello!";
}

greet()
.then((result)=>{
console.log("promise was resolved");
console.log(`result : ${result}`);
})
.catch((err)=>{
    console.log("error was occured");
    console.log(`error : ${err}`);
})

let demo = async ()=>{
    return 5;

};

function getNUm(){
    return new Promise((resolve,rejected) => {
      setTimeout(()=>{
        let num = Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
      },1000);  
    });
};

async function demo1() {
    await getNUm();
          getNUm();
          getNUm();
}
demo1();

let element = document.querySelector("#mColor");

function multicolor(color){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            element.style.color = color;
            resolve();
        },1000);
        
    });
} 

async function colored(){
    try{
     await multicolor("red");
     await multicolor("green");
     await multicolor("blue");
     await multicolor("orange");
     await multicolor("grey");
    }
    catch(err){
         console.log("error catch");
         console.log("err");
    }
     
 }

colored();
