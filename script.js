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
