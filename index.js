let num1 = 8
let num2 = 2



document.getElementById('num1').textContent = num1
document.getElementById('num2').textContent = num2


let ansEl = document.getElementById('ans_el')



document.getElementById('add_btn').addEventListener('click', add); 
document.getElementById('sub_btn').addEventListener('click', sub);
document.getElementById('div_btn').addEventListener('click', div);
document.getElementById('mul_btn').addEventListener('click', mul);

function add() {
    let result = num1 + num2
    ansEl.textContent = "sum: " + result
    console.log("adding")
}

function sub() {
    let result = num1 - num2
    ansEl.textContent = "sum: " + result
    console.log("subtracting")
}

function div() {
    let result = num1 / num2
    ansEl.textContent = "sum: " + result
    console.log("dividing")
}

function mul() {
    let result = num1 * num2
    ansEl.textContent = "sum: " + result
    console.log("multiplying")
}