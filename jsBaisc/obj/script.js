

//1
const person = {
    name: "Adam",
    age: 25,
    gender: "male"
};

console.log(person.name, person.age, person.gender);

//2
const person1 = {
    name: "Adam",
    age: 25
};
person1.gender = "male";
console.log(person1);


//3
const person2 = {
    name: "Adam",
    age: 25
};
person2["gender"] = "male";
console.log(person2);

//4
const person4= {
    name: "Adam",
    age: 25,
    gender: "male"
};
console.log(person4.name); 

//5
const person5 = {
    name: "Adam",
    age: 25
};
console.log(person5["name"]);