console.log(Math.random());
console.log(Math.random()*100);

let randomNum = Math.random()*100;
console.log(randomNum);
console.log(Math.ceil(randomNum));

console.log("Arrays");
//Arrays
let array = [1,4,3,"KP",12];
console.log(array);
console.log(array[3]);
array[4]=1999;
console.log(array);
array.push(true);
console.log(array);
let delItem = array.pop()
console.log(array);
console.log(delItem);
console.log(array.length);

let h1Element = document.createElement('h1');
h1Element.textContent = "Hi, Sumathi";
// document.appendChild(h1Element);
h1Element.classList.add('heading');
console.log(h1Element);
let containerElement = document.getElementById("containerElement");
containerElement.appendChild(h1Element);

let btnElement = document.createElement('button');
btnElement.textContent = "Change name";
containerElement.appendChild(btnElement);
btnElement.onclick = function(){
    // console.log("event triggred");
    // h1Element.textContent = "How are you";
    // h1Element.style.color = "blue";
    // h1Element.style.fontSize = "40px";
    // h1Element.style.textDecoration = "underline";
    h1Element.classList.add('heading'); //only style will apply when user clicks the button
    console.log(h1Element);
}


