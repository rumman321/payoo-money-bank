
function getInputFieldByID(id){
    // const addMoney=document.getElementById('amount').value
    // const addAmountNumber=parseFloat(addMoney)
    // return addAmountNumber

    const inputValue=document.getElementById(id).value
    const inputAmount=parseFloat(inputValue)
    return inputAmount

}

function getTExtFieldValueByID(id){
    const textValue=document.getElementById(id).innerText
    const textNumber=parseFloat(textValue)
    return textNumber
}

function showSectionById(){
    document.getElementById('addmoney-form').add('hidden')
    document.getElementById('cashout-form').add('hidden')
    document.getElementById('transaction-form').add('hidden')
    // show the section with the provided id
    document.getElementById(id).remove('hidden')
}