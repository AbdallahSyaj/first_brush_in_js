

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

//6
const obj1 = { name: "Adam", age: 25 };
const obj2 = { gender: "male" };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);

//7
const obj = { name: "Adam", age: 25 };
Object.freeze(obj);
obj.age = 26; 
console.log(obj);

//8
const obje = { name: "Adam", age: 25 };
Object.seal(obje);
obje.age = 26; 
obje.gender = "male";  
console.log(obje);
