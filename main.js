let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('lastNumber');
let operator = document.getElementById('operator');
let clearButton = document.querySelector('.clearButton')

let calcForm = document.querySelector(".calcForm");

function getResults(){
    let results = eval(firstNumber.value + operator.value + secondNumber.value)
    return results
}

calcForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    let results = getResults()

    let answer = document.querySelector('.answer')
    answer.innerHTML = `
         <h2>${results}</h2>
    `
    addClearbutton()
})

function addClearbutton(){
    clearButton.innerHTML = `
        <button>Clear</button>
    `
}


clearButton.addEventListener('click', function(e){
    e.preventDefault();

    calcForm.reset();
})


