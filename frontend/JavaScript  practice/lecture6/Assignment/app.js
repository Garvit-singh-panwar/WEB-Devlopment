function LargestElementInArray(array)
{
let largest = array[0];

for(let i = 0 ; i < array.length ; i++)
{
    if(array[i] > largest)
    {
        largest = array[i];
    }
}

return largest;
}

const array = [1,2,3,4,5,6];

console.log(LargestElementInArray(array));

function findUniqueStr(str)
{   let ans = "";
    for(let i = 0 ; i < str.length ; i++)
    {   let flag = true; 
        for(let j = 0 ; j < ans.length ; j++ )
        {
            if(ans[j] === str[i])
            {
                flag = false;
            }
        }

        if(flag == true)
        {
                ans+=str[i];
        }

    }

    return ans;
}

let str = "abcdabcdefgggh";
console.log(findUniqueStr(str));

let country = ["Australia" , "Germany" , "United States Of Amarica"];

function longestContryName(array)
{
    let ans = ""
    for(let i = 0 ; i < array.length ; i++ )
    {
        if(array[i].length > ans.length)
        {
            ans = array[i];
        }
    }
    return ans;
}

console.log( longestContryName(country));

function VowelsCount(str)
{   let vowels = "aeiou";
    let Count = 0;
    for(let i = 0 ; i < str.length ; i++ )
    { 
        for(let j = 0 ; j < vowels.length ; j++)
        {
            if(str[i] === vowels[j] )
            {
                Count++;
            }
        }

    }

    return Count;
}


let S = "Hi Hello";

console.log(VowelsCount(str));


function randomNoBetween(start , end)
{
    if(start > end)
    {
        console.error("Wrong input");
        return -1;
    }
    let maxRandomValue = end - start;

    let num = Math.floor(Math.random() * maxRandomValue) + 1 ;
    num += start;
    return num;
}

console.log(randomNoBetween(20 , 30));