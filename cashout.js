
document.getElementById('cashout-btn')
.addEventListener('click', function(event){
 event.preventDefault()

 const cashout=getInputFieldByID('cashout-amount')
 const cashoutPin=getInputFieldByID('cashout-pin-number')
 console.log(cashout, cashoutPin)
 if(cashoutPin===1234){
    const balance=getTExtFieldValueByID('balance-amount')
    console.log('cash out amount is ', cashout)

    const newBalance=balance-cashout
    console.log(newBalance)
    document.getElementById('balance-amount').innerText=newBalance
 }
 else{
    event('cash out filled')
 }
})