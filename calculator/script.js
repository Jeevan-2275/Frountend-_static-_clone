// const display = document.querySelector('.input');
// const buttons = document.querySelectorAll('.button');

// let currentInput = '';
// let operator = '';
// let previousInput = '';

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;

//         if (value === 'C') {
//             currentInput = '';
//             previousInput = '';
//             operator = '';
//             display.value = '';
//         } else if (value === '=') {
//             if (currentInput && previousInput) {
//                 display.value = operate(previousInput, currentInput, operator);
//                 currentInput = display.value; // Update for chaining calculations
//                 previousInput = '';
//                 operator = '';
//             }
//         } else if (['+', '-', 'x', '÷'].includes(value)) {
//             if (currentInput) {
//                 if (previousInput) {
//                     currentInput = operate(previousInput, currentInput, operator);
//                 }
//                 previousInput = currentInput;
//                 operator = value === 'x' ? '*' : value === '÷' ? '/' : value;
//                 currentInput = '';
//             }
//         } else {
//             currentInput += value;
//             display.value = currentInput;
//         }
//     });
// });

// function operate(num1, num2, operator) {
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     switch (operator) {
//         case '+': return num1 + num2;
//         case '-': return num1 - num2;
//         case 'x': return num1 * num2;
//         case '÷': return num1 / num2;
//         default: return num2; // Return the second number if no operator
//     }
// }





















// let string="";
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',()=>{
//         if(e.target.innerHTML=='='){
//             string=eval(string);
//             document.querySelector('input').value=string;

//         }else{

        
//       console.log(e.target)  
//       string =string+e.target.innerHTML;
//       document.querySelector('input').value=string;
//         }
// })
// })



const display = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.querySelector('img')) {
            if (currentInput.length > 0) {
                currentInput = currentInput.slice(0, -1); // Remove the last character
                display.value = currentInput;
            }
        } else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            if (currentInput && previousInput) {
                display.value = operate(previousInput, currentInput, operator);
                currentInput = display.value; 
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', 'x', '÷'].includes(value)) {
            if (currentInput) {
                if (previousInput) {
                    currentInput = operate(previousInput, currentInput, operator);
                }
                previousInput = currentInput;
                operator = value === 'x' ? '*' : value === '÷' ? '/' : value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return num2; 
    }
}
