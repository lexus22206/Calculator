const inputA = document.querySelector('.input-a'),
      inputB = document.querySelector('.input-b'),
      btnOperation = document.querySelectorAll('.grup-btn__operation'),
      btnResult = document.querySelector('.btn-result'),
      resultField = document.querySelector('.result-field');

let selectedOperation = null;

btnOperation.forEach(button => {
    button.addEventListener('click', () => {
        selectedOperation = button.value;
    })
})

btnResult.onclick = function() {
    const a = Number(inputA.value); 
    const b = Number(inputB.value); 

    if (selectedOperation === null) {
        resultField.innerHTML = 'Оберіть операцію';
        return;
    }
    
    const result = calculate({a, b, operation: selectedOperation});

    resultField.innerHTML = result;
}

