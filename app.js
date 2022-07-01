const calcScreen = document.getElementById("argone")
const calcScreenTwo = document.getElementById("argtwo")
const calcScreenThree = document.getElementById("argthree")
let op = "add"
let termOne = null
let termTwo = null
let result = 0
let currentArg = 1
let changes = false

let calc = {
   '+': function(a,b) {return a + b},
   '-': function(a,b) {return a - b},
   '/': function(a,b) {return a / b},
   'x': function(a,b) {return a * b},
};

function clearScreen () {
    calcScreen.textContent = ""
    calcScreenTwo.textContent = ""
    calcScreenThree.textContent = ""
    op = ""
    currentArg = 1
}
function typer (a) {
    changes = true
    if (currentArg == 1)
        { 
        calcScreen.textContent += a
        return;
        }
    else {
        calcScreenThree.textContent += a
         }
}
function thinker() {
    if (currentArg == 1 || changes === false){return;}
    termOne = parseInt(calcScreen.textContent);
    termTwo = parseInt(calcScreenThree.textContent);
    calcScreen.textContent = calc[op](termOne,termTwo);
    termOne = parseInt(calcScreen.textContent);
    termTwo = null
    calcScreenThree.textContent = ""
    calcScreenTwo.textContent = ""

    changes = false
    if (!Number.isInteger(termOne)){ calcScreen.textContent = "ERROR"}
}
function test(a){
    if (calcScreenThree !== ""){thinker();}
    calcScreenTwo.textContent = a
    currentArg = 3
    op = a
}