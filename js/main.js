// /*----- constants -----*/


/*----- app's state (variables) -----*/
var counter = 0;

/*----- cached element references -----*/
var input = document.querySelector('input'); 
var displayOutput = document.querySelector('div')

/*----- event listeners -----*/
document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', subtract);


/*----- functions -----*/
function initialize() {
    counter = 0;
    displayOutput.value = 1;
}
render();

initialize();

function add() {
    counter += parseInt(input.value);
    render();
}

function subtract() {
    counter -= parseInt(input.value);
    render();
}

function render() {
    displayOutput.innerHTML = counter;
    if (counter < 0) {
        displayOutput.style.color = "red";
    } else 
    {displayOutput.style.color = "black";
}
}