function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
   const pin = getPin();
   document.getElementById('display-pin').value = pin;

}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');

    if(isNaN(number)){
        if(number == 'C'){
            typedNumbers.value = '';
        }
    }
    else{
        const previousTypedNumber = typedNumbers.value;
        const newNumber = previousTypedNumber + number;
        typedNumbers.value = newNumber;
    }
    
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    if(pin == typedNumbers){
        document.getElementById('success').style.display = 'block';
        document.getElementById('fail').style.display = 'none';
    }
    else{
        document.getElementById('fail').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
}