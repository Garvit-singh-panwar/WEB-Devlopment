let avg = (array) => {
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        avg += array[i];

    }

    return avg / array.length;
}

arr = [10, 10, 10];

console.log(avg(arr));


let isEven = (n) => {
    return n % 2 === 0;
}

console.log(isEven(3));

const object = {
    message:'Hello,World!',
    logMessage() {
        console.log(this.message);
    }

    };
    setTimeout(object.logMessage,4000);

let length = 4; 
function callback()
{
    console.log(this.length);
}
const obj = {
    length: 5, method(callback) 
    { 
        callback(); 
    }, 
    }; 
obj.method(callback, 1, 2);