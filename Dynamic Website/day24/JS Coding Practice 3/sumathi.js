// create & log an object
let vehicle = {
    name: "Mercedes Benz",
    model: "C-Class",
    manufacturer: "Daimler AG Company",
    length: "4686mm",
    "cargo capacity": "12.6 cubic feet"
}
console.log(vehicle);

// create & log an object-2
let movie ={
    title:"Bahubali",
    director: "Rajamouli",
    producers: ["sobhu","Raghavendra","Prasad"],
    "lead actors with their roles": {
        prabhas:"bahubali",
        anushka:"devsena",
        rana:"bhallaladeva",
        tamannah:"avanthika"
    }
}
console.log(movie);

// access the value of an object
let person ={
    name:"sam"
}
console.log(person.name);
console.log(person["name"]);

// update the values of an object
let cat={
    name:"siri",
    age:18,
    "fur color":"grey",
    likes:["catnip","milk"],
    birthday:{
        month:7,
        day:17,
        year:1994
    }
}
let value = "sassy";
cat.name = value;
console.log(cat);

// add a property to an object
let meals ={
    breakfast: "oatmeal",
    lunch:"burrito",
    dinner:"chapathi"
}
meals.snack = "Noodles";
console.log(meals);