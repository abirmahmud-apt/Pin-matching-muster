function pinShow(x){
    document.getElementById('pin-matcher').value += x;
}
function remove(){
    document.getElementById('pin-matcher').value = null;
}
function backDlt(){
   document.getElementById('pin-matcher').value = document.getElementById('pin-matcher').value.slice(0, -1)
}

// generate a pin 
    function getPin(){
        const pin = Math.round(Math.random()* 10000);
        const pinString= pin + "";
        if (pinString.length == 4){
            return pinString;
        }
        else{
            return getPin();
        }
    }
    function generatePin(){
        const output = getPin();
        document.getElementById('pin-generator').value = output;
    }


function verifyPin(){
    const pin = document.getElementById('pin-generator').value;
    const typedNumbers = document.getElementById('pin-matcher').value;
    const successMessage= document.getElementById('wright');
    const failError = document.getElementById('wrong');
    const displayNone = document.getElementById('pin-muster')
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
    document.getElementById('pin-generator').value = null;
    document.getElementById('pin-matcher').value = null;
}