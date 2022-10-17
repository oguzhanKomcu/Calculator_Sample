
    const numberButtons = document.querySelectorAll('[data-number]') // herhangi bu nitelik ile belirtilmiş olan sayılar
    const operationButtons = document.querySelectorAll('[data-operation]') //Çarpma, toplama gibi operasyon butonaları
    const equalsButtons = document.querySelector('[data-equals]') //  "=" eşittir butonunu yakaldık
    const deleteButton = document.querySelector('[data-delegete]')
    const allButtons = document.querySelector('[data-all-clear]')
    const previousOperandTextElement = document.querySelector('[data-previous-operand]')
    const currentOperandTextElement = document.querySelector('[data-current-operand]')



    //Şimdi hesapmakinemiz için bir sınıf tanımlıyoruz
