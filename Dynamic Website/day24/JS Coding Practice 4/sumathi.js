// make a person object

function makePersonObject(id,name,email){
    let person={
        id,
        name,
        email
    }
    return person;
}
console.log(makePersonObject(1,"Shiva","shiva@gmail.com"));
console.log(makePersonObject(3,"adarsh","aadarsh@gmail.com"));

// calculate the total score of a cricketer
function calculateTotalScore(arrayOfScores){
    let totalScore =0 ;
    for(i=0;i<arrayOfScores.length;i++){
        totalScore = arrayOfScores[i]+totalScore;
    }
    return totalScore;
}
console.log(calculateTotalScore([25,55,30]));
console.log(calculateTotalScore([50,63,101]));

// make an array
function makeAnArray(num1,num2,num3) {
    let myArray =[num1,num2,num3];
    return myArray;
}
console.log(makeAnArray(1,2,3));
console.log(makeAnArray(0,0,0));

// eligibility to play the next level of a game
let eligibility = function x(name1,score) {
    let person1 ={
        name1,
        score
    }
    if (person1.score>5) {
        return true;
    } else {
        return false;
    }
}
console.log(eligibility("preethi",10));
console.log(eligibility("Geetha",5));

// Game Mode
function y(arrayOfFriends) {
    if(arrayOfFriends === 0){
        return "Solo";
    }
    else if(arrayOfFriends === 1){
        return "Dual"
    }
    else{
        return "Squad"
    }
}
console.log(y("Anand"));
console.log(y("Anand","Sam"));
