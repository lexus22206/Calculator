const inputA = document.querySelector('.input-a'),
      
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
     

    if (selectedOperation === null) {
        resultField.innerHTML = 'Оберіть операцію';
        return;
    }
    
    const result = calculate({a, b, operation: selectedOperation});

    resultField.innerHTML = result;
}

