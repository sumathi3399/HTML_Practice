//Objects
let person = {
    name:"Sumathi",
    age: 22,
    city: "vijayawada"
};
console.log(person);

let person1 = {
    name:"Sumathi",
    age: 22,
    city: "vijayawada",
    "1":"myChoice",
    "my state":"AP"
};
console.log(person1);
//Dot notation
console.log(person.age);

//bracket notation
console.log(person1['name']);
console.log(person1['my state']);

let key = "name";
console.log(person[key]); //sumathi.. key value is name so, the property is name and value is sumathi
console.log(person.key); //undefined because it dont have key as property


//object destructuring
let {name}=person;  //let name = person.name; //same
let {age, city}=person;
console.log(name);
console.log(person.name);

//modifying objects
person.age= 21;
console.log(person.age);

person["age"] = 18;
console.log(person["age"]);


//adding object property
person.gender = "female";
console.log(person.gender);
person["gender"] = "female";
console.log(person["gender"]);

//adding function as value inside the object
let woman = {
    name:"Sumathi",
    age: 22,
    city: "vijayawada",
    run: function() {
        console.log(this.name + " is sleeping");
    },
    habits:["sewing","watching TV"],//array as value
    car:{
        name: "BMW",
        color:"white"
    }
};
// console.log(woman.run());
woman.run();
console.log(woman.habits);
console.log(woman.habits[1]);
console.log(woman["habits"][0]);
console.log(woman.car);
console.log(woman.car.name);
console.log(woman.car["color"]);


