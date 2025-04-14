
let str = ["app" , "adam" ,"eva"];
function concatinate(str = [] ){
    let result = "";
    for(i = 0 ; i < str.length ; i++)
    {
        result += str[i];
    }

return result;
}

console.log(concatinate(str));