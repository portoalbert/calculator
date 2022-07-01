const calcScreen = document.getElementById("screenCal")
let op = "add"
let termOne = null
let termTwo = null
let result = 0

let calc = {
   'add': function(a,b) {return a + b},
   'sub': function(a,b) {return a - b},
   'divide': function(a,b) {return a / b},
   'mult': function(a,b) {return a * b},
};

function clearScreen () {
    calcScreen.placeholder = "0"
    calcScreen.value = ''
}
function typer (a) {
    calcScreen.value += a
    result = parseInt(calcScreen.value);
    console.log(result)
}
function thinker() {
    if (termOne == null){
        termOne = parseInt(calcScreen.value);
        clearScreen();
        return;
    }
    termTwo = parseInt(calcScreen.value);
    calcScreen.value = calc[op](termOne,termTwo);
    termOne = parseInt(calcScreen.value);
    termTwo = null
}
function pressOp (a){
    op = a
    
} 