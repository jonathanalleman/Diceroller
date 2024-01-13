function diceRoll(num, num2, NAME1) {
    console.log("this is how many sides", num, num2)
    document.getElementById(NAME1).innerHTML = numberMinMax(num, num2);
}

function d4(){
    console.log("button clicked")
    console.log("this is the d4 dice")
    numberMinMax(1, 4); //calls numberMinMax function defined above
}
function d6(){
    console.log("button clicked")
    console.log("this is the d6 dice")
    numberMinMax(1, 6); //calls numberMinMax function defined above
}

function d8(){
    console.log("button clicked")
    console.log("this is the d8 dice")
    numberMinMax(1, 8); //calls numberMinMax function defined above
}

function d10(){
    console.log("button clicked")
    console.log("this is the d8 dice")
    numberMinMax(1, 10); //calls numberMinMax function defined above
}

function d12(){
    console.log("button clicked")
    console.log("this is the d8 dice")
    numberMinMax(1, 12); //calls numberMinMax function defined above
}

function d20(){
    console.log("button clicked")
    console.log("this is the d8 dice")
    numberMinMax(1, 20); //calls numberMinMax function defined above
}

function numberMinMax(min, max){
const diceRoll = Math.floor(Math.random()*(max-min + 1))+ min
console.log(diceRoll)
return diceRoll
}

