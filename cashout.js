
document.getElementById('cashout-btn')
.addEventListener('click', function(event){
 event.preventDefault()

 const cashout=getInputFieldByID('cashout-amount')
 const cashoutPin=getInputFieldByID('cashout-pin-number')
 console.log(cashout, cashoutPin)
 // check NaN
if(isNaN(cashout)){
    alert('filled to cashout')
    return
}
 if(cashoutPin===1234){
    const balance=getTExtFieldValueByID('balance-amount')
    console.log('cash out amount is ', cashout)

    if(cashout>balance){
        alert("you don't have enough balance")
        return
    }
    const newBalance=balance-cashout
    console.log(newBalance)
    document.getElementById('balance-amount').innerText=newBalance
    // add transaction history
    const div =document.createElement('div')
    div.classList.add('bg-white')
    div.innerHTML=`
    <h4 class="text-2xl font-bold">Cash out</h4>
    <p>${cashout} tk. New Balance ${newBalance} tk.</p>
    `

    document.getElementById("transaction-container").appendChild(div)
 }
 else{
    event('cash out filled')
 }
})