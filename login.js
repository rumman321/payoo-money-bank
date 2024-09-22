document.getElementById('login-id')
.addEventListener('click', function(event){
    event.preventDefault()
    const inputNum=document.getElementById('phone-number').value
    const number=parseFloat(inputNum)
    const inputPin=document.getElementById('pin-number').value
    const pin=parseFloat(inputPin)

    if(pin===1234){
        window.location.href="./home.html"
    }
    else{
        alert("can't login")
    }
})