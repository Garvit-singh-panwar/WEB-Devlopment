let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.every((el) => (el%10 == 0)));

console.log(arr.reduce((min,ele) => {
    if(min > ele)
    {
        return ele;
    }
    else{
        return min;
    }
}));