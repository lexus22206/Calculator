const inputDisplay = document.querySelector('.input-display'),
      btnDigits = document.querySelectorAll('.btn-digit'),
      btnOperations = document.querySelectorAll('.btn-operation'),
      btnResult = document.querySelector('.btn-result'),
      btnClear = document.querySelector('.btn-clear');

btnDigits.forEach(button => {
    button.addEventListener('click', () => {
        inputDisplay.value += button.value;
    });
});

btnOperations.forEach(button => {
    button.addEventListener('click', () => {
        inputDisplay.value += ` ${button.value} `;
    });
});

btnResult.onclick = function() {
    const display = inputDisplay.value;
    const tokens = display.split(' ').filter(token => token.trim() !== '');

    if (tokens.length < 3) {
        inputDisplay.value = 'Помилка';
        return;
    }

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = parseFloat(tokens[i + 1]);

        result = calculate({
            a: result,
            b: nextNumber,
            operation: operator
        });
    }


    inputDisplay.value = result;
}

btnClear.onclick = function() {
    inputDisplay.value = '';
};




// let selectedOperation = null;

// btnOperation.forEach(button => {
//     button.addEventListener('click', () => {
//         selectedOperation = button.value;
//     })
// })

// btnResult.onclick = function() {
//     const a = Number(inputA.value); 
//     const b = Number(inputB.value); 

//     if (selectedOperation === null) {
//         resultField.innerHTML = 'Оберіть операцію';
//         return;
//     }
    
//     const result = calculate({a, b, operation: selectedOperation});

//     resultField.innerHTML = result;
// }

