function PSum1toN(n)
{   let sum = 0;
    for(i=1 ; i <= n ; i++)
    {
        sum = sum+i;
    }    

    return sum;
}



console.log(PSum1toN(5));