// sum of the valurs of an array
function sumOfArray(myArray) {
    let sum =0;
    for (let i=0; i<myArray.length; i++) { 
        sum = sum + myArray[i];  
    }
    return sum;
}
console.log(sumOfArray([12,1,2,4,1]));
console.log(sumOfArray([]));

// log the values of each object
let arrayOfInventions = [
    {
        name:"printing press",
        "invented by":"johanes gutenberg"
    },
    {
        name:"light bulb",
        "invented by":"thomas edison"
    },
    {
        name:"telephone",
        "invented by":"alexander graham bell"
    },
    {
        name:"aeroplane",
        "invented by":"orville and wilbur wright"
    },
    {
        name:"computer",
        "invented by":"charles babbage"
    },
];
function arrayOfObj(inv) {
    console.log(inv);
}
for (const inv of arrayOfInventions) {
    arrayOfObj(inv.name);
}
for (const inv of arrayOfInventions) {
    arrayOfObj(inv["invented by"]);
}