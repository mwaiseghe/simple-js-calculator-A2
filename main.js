let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('lastNumber');
let operator = document.getElementById('operator');

let calcForm = document.querySelector(".calcForm");

calcForm.addEventListener('submit', function(e){
    e.preventDefault();
    let results = eval(firstNumber.value + operator.value + secondNumber.value)
    console.log(results); 

    let answer = document.querySelector('.answer')
    answer.innerHTML = `
         <h2>${results}</h2>
    `
})

