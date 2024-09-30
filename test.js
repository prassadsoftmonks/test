let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
output = document.getElementsByClassName('output')
console.log(output);
num1.addEventListener('click', function() {
    output[0].innerText = num1.value+num2.value;
    console.log(num1.value+num2.value);
});