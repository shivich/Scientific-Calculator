document.addEventListener('DOMContentLoaded', function () {
    //JavaScript code goes here

    const dispaly = document.getElementById('calci-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";
   

    // function to evaluate result, But we must not use eval() function as it is risky
    //we are also replacing some operators so that machine can understand

    function evaluateResult() {
        console.log('currentValue:', currentValue)
        const convertedValue = currentValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("ln", "Math.log")
            .replace("𝝅", "Math.PI")
            .replace("log", "Math.log10")
            .replace("e", "Math.E")
            .replace("tan", "Math.tan")
            .replace("√", "Math.sqrt")
            .replace("Exp", "Math.exp")
            .replace("x^y", "**")
            .replace("x!" , "factorial")
            .replace("Inv" , "getInverse");

        //we are storing evaluated value in result variable and converting it into String
        console.log('convertedValue:', convertedValue)
        const result = eval(convertedValue);
        currentValue = result.toString();
        dispaly.value = currentValue;

    }

    function factorial(num) {
        if (num === 0 || num === 1) {
          return 1;
        }
        else {
          return num * factorial(num - 1);
        }
      }

      function getInverse(num) {
        // Check if the number is 0
        if (num === 0) {
          throw new Error("Cannot find inverse of 0");
        }
        
        // Calculate the inverse
        const inverse = 1 / num;
        
        return inverse;
      }

    
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;


            try{
                 // if AC button is clicked this code will make display empty
            if (value == "AC") {
                currentValue = "";
                dispaly.value = currentValue;
            }

            // if equal to button is clicked it calls the function eavluateaResult
            else if (value == "=") {
                evaluateResult();
            }



            // this code will add value to display when button is clicked
            else {
                
                
                currentValue += value;
                dispaly.value = currentValue;
                }
            }

            catch (error){

                console.error(error);
                currentValue="ERROR";
                dispaly.value = currentValue;
            }
           
          
        })
    }
});