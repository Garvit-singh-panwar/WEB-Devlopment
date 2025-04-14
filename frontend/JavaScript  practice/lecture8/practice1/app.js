let arr = [1,2,3,4,5,6,7,8];

let max = arr.reduce((max,ele) => 
{
    if(max < ele)
    {
        return ele;
    }
    else{
        return max;
    }
});
console.log(max);
