document.addEventListener('DOMContentLoaded', function () {
    //JavaScript code goes here

    const dispaly = document.getElementById('calci-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    // function to evaluate result, But we must not use eval() function as it is risky
    //we are also replacing some operators so that machine can understand

    function evaluateResult() {
        console.log('currentValue:', currentValue)
        const convertedValue = currentValue.replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01");

        //we are storing evaluated value in result variable and converting it into String
        console.log('convertedValue:', convertedValue)
        const result = eval(convertedValue);
        currentValue = result.toString();
        dispaly.value = currentValue;

    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            // if AC button is clicked this code will make display empty
            if (value == "AC") {
                currentValue = "";
                dispaly.value = currentValue;
            }

            // if equal to button is clicked it calls the function eavluateaResult
            else if(value == "=") {
                evaluateResult();
            }

            // this code will add value to display when button is clicked
            else {
                currentValue += value;
                console.log('currentValue:', currentValue);
                dispaly.value = currentValue;
            }
        })
    }
});