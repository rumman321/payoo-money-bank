document.getElementById('add-money-btn').addEventListener('click',function(event){
event.preventDefault()
console.log('add money success')


const enterAmount= getInputFieldByID('amount')
const pinNumber= getInputFieldByID('pin-number')
// const addMoney=document.getElementById('amount').value
//  const addAmountNumber=parseFloat(addMoney)

// check NaN
if(isNaN(enterAmount)){
    alert('filled to add money')
    return
}
if(pinNumber===1234){
    const balance= getTExtFieldValueByID('balance-amount')
    console.log(balance,enterAmount)
    const newBalance=balance+enterAmount
    console.log(newBalance)
    document.getElementById('balance-amount').innerText=newBalance
    // add transaction history
    const p=document.createElement('p')
    p.style.color='green'
    p.innerText=`added: ${enterAmount} tk. new Balance ${newBalance}`
    console.log(p)

    document.getElementById('transaction-container').appendChild(p)

}
else{
    alert('failed to add the money')
}
})