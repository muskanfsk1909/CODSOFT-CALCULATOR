// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(input).forEach((button)=> {
//     button.addEventListener('click', (e)=> {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if (e.target.innerHTML == 'C'){
//             string=""
//             document.querySelector('input').value=string;
//         }
//         else{
//             console.log(e.target)
//             string=string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })


document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.querySelector('.display input');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'AC') {
                // Clear the display
                display.value = '';
            } else if (value === 'DE') {
                // Delete the last character
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                // Evaluate the expression
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                // Append the button value to the display
                display.value += value;
            }
        });
    });
});
