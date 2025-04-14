let p = document.querySelector(".fact");

p.innerText = "click on button to generate some random facts";

let url = "https://catfact.ninja/fact";

async function getFact() 
{
  try{
        let res = await axios(url);
        // console.log(res);
        return res.data.fact;
    }
    catch(e){
        // console.log(`error : ${e}`);
    }
}

document.querySelector("button").addEventListener("click",async ()=>{
    try{
        let res = await getFact();
        p.innerText = res;
    }
    catch{
        p.innerText = "NO facts ";
    }
})
getFact();