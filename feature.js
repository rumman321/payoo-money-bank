
document.getElementById('show-addmoney')
.addEventListener('click', function(event){
    event.preventDefault()
    showSectionById('addmoney-form')

})
document.getElementById('show-cashout')
.addEventListener('click', function(event){
    event.preventDefault()
    showSectionById('cashout-form')

})
document.getElementById('show-TRANSACTION')
.addEventListener('click', function(event){
    event.preventDefault()
    showSectionById('transaction-form')

})