let gameseq = [];
let userseq = [];

let btns = ["box1" , "box2" , "box3" , "box4"];

let started = false ;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function(){
    
    if(started == false){
        console.log("game is started ")
        started = true;
        levelUp();
    }
    
});


function gameFlesh(btn)
{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

function userflesh(btn){
    btn.classList.add("userflesh");
    setTimeout(() => {
        btn.classList.remove("userflesh");
    },250);
}

function levelUp(){
    userseq = [];
    level++;
    h3.innerText = `level ${level} `;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`)

    gameseq.push(randColor);
    console.log(gameseq);
    gameFlesh(randBtn);

}


function CheckUserSeq(indx){
    // console.log(`curr level : ${level}`);
    // let indx = level - 1 ;

    if(userseq[indx] === gameseq[indx]){
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelUp , 1200);
        }
    }
    else{
        h3.innerHTML = `Game Over! your current score is <b>${level}</b> <br/> Press any key to start.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "";
        }, 200);
        gameReset();
    }


}

function btnPress(){
    // console.log(this);
    let btn = this;
    userflesh(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    CheckUserSeq(userseq.length -1);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click" , btnPress);
}


function gameReset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

