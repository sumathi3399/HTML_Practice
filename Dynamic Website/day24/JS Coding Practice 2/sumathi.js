// call a function
function greet(){
    console.log("Hello! Have a nice day");
}
greet();

// return a value in the function
function getSumOfTwoIntegers(firstInteger,secondInteger) {
    let result = firstInteger + secondInteger;
    return result;
}
console.log(getSumOfTwoIntegers(2,3));
console.log(getSumOfTwoIntegers(10,20));

// create a function
function getNationalBird(){
    let nationalBird = "peacock";
    return nationalBird;
}
console.log(getNationalBird());

// passing an arguement to the function
function greetWithName(personName){
    console.log("Hi "+ personName);
}
greetWithName("Sumathi");

// creating a function with parameters
function getAvgOfTwoIntegers(firstInteger,secondInteger) {
    let result = (firstInteger + secondInteger)/2;
    return result;
}
console.log(getAvgOfTwoIntegers(4,2));
console.log(getAvgOfTwoIntegers(10,20));

// create a function expression
let convertMinutesToSeconds = function getSeconds(minutes){
    let seconds = minutes*60;
    return seconds;
}
console.log(convertMinutesToSeconds(1));
console.log(convertMinutesToSeconds(5));

