document.getElementById('add-money-btn').addEventListener('click',function(event){
event.preventDefault()
console.log('add money success')


const enterAmount= getInputFieldByID('amount')
const pinNumber= getInputFieldByID('pin-number')
// const addMoney=document.getElementById('amount').value
//  const addAmountNumber=parseFloat(addMoney)


if(pinNumber===1234){
    const balance= getTExtFieldValueByID('balance-amount')
    console.log(balance,enterAmount)
    const newBalance=balance+enterAmount
    console.log(newBalance)
    document.getElementById('balance-amount').innerText=newBalance
}
else{
    alert('failed to add the money')
}
})