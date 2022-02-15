function getPin() {
    const pin = Math.round(Math.random()* 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin
    }
    else {
        console.log('this is 3 numbar', pin)
        return getPin()
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const numbar = event.target.innerText;
    const clacInput = document.getElementById('typed-numbars');
    if (isNaN(numbar)) {
        if (numbar == "C") {
            clacInput.value = ""
        }
    }
    else {
        const previousNumbar = clacInput.value;
        const newNumbar = previousNumbar + numbar;
        clacInput.value = newNumbar
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbar = document.getElementById('typed-numbars').value;
    const successMassage = document.getElementById('notify-success');
    const notifyError = document.getElementById('notify-fail');

    if (typedNumbar == pin) {
        successMassage.style.display = 'block'
        notifyError.style.display = 'none'
    }
    else {
        successMassage.style.display = 'none'
        notifyError.style.display = 'block'
    }
}
