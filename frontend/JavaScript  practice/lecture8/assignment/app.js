let arr = [1,2,3,4,5 ,6];

let value = arr.reduce((sum , squr) => { return sum+squr*squr});
console.log(value);
let avg ;

avg = value/arr.length;
console.log(avg);


let newArr = arr.map((el) => el+5 );
console.log(newArr);

let str = ["h" , "e" , "l" , "l" , "o"];

let newstr = str.map((el) => (el.toUpperCase()));
console.log(newstr);

function doubleAndReturnArgs(arr, ...args){
    let newarr = args.map((el) => el*2);
    return [...arr,...newarr];
}

let dARA = doubleAndReturnArgs(arr,1,2,3,4,5,6);
console.log(dARA);

function mergeObject( obj1,obj2){
    return{...obj1,...obj2};
}


const Stud = {
        student: "aman",
        password: 1234 ,
        year: "2nd"

};

const teacher = {
    computerGraphics: "kirtimam",
    Java: "bhramadat shukla",
};

obj3 = mergeObject(Stud,teacher);

console.log(obj3);


