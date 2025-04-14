let dice = Math.floor(Math.random() * 6)+1;
console.log(dice);

const car = {
    name: "Supra" , 
    model: "MK5",
    color: "Steel Grey"
}

console.log(car.name);

const person = {
    name: "namit",
    age: 24,
    city: "Ujjain"
};
console.log("City before changing "+person.city);

person.city = "NewYork";

console.log("City After changing "+person.city);

person.country = "United States";

console.log(person);