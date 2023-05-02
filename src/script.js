document.addEventListener('DOMContentLoaded', function () {
  //JavaScript code goes here

  const dispaly = document.getElementById('calci-display');
  const buttons = document.getElementsByClassName('btn');

  let currentValue = "";
  let inverseMode = false;

  //from here degree radian
  let mode = 'degree'; // Default mode is set to 'degree'

  // Get the radian and degree buttons by their ID (assuming you have assigned the respective IDs in your HTML)
  const radianButton = document.getElementById('radianButton');
  const degreeButton = document.getElementById('degreeButton');

  // Add event listeners to the radian and degree buttons
  radianButton.addEventListener('click', () => {
    mode = 'radian';
  });

  degreeButton.addEventListener('click', () => {
    mode = 'degree';
  });

  // Trigonometric functions that take the angle value as input
  function sin(angle) {
    const angleInRadians = mode === 'degree' ? (angle * Math.PI) / 180 : angle;
    return Math.sin(angleInRadians);
  }

  function cos(angle) {
    const angleInRadians = mode === 'degree' ? (angle * Math.PI) / 180 : angle;
    return Math.cos(angleInRadians);
  }

  function tan(angle) {
    const angleInRadians = mode === 'degree' ? (angle * Math.PI) / 180 : angle;
    return Math.tan(angleInRadians);
  }

  function sinInv(angle) {
    const angleInRadians = mode === 'degree' ? (angle * Math.PI) / 180 : angle;
    return Math.asin(angleInRadians);
  }

  function cosInv(angle) {
    const angleInRadians = mode === 'degree' ? (angle * Math.PI) / 180 : angle;
    return Math.acos(angleInRadians);
  }

  function tanInv(angle) {
    const angleInRadians = mode === 'degree' ? (angle * Math.PI) / 180 : angle;
    return Math.atan(angleInRadians);
  }

  // till here degree radian


  // function to evaluate result, But we must not use eval() function as it is risky
  //we are also replacing some operators so that machine can get it

  function evaluateResult() {
    console.log('currentValue:', currentValue)
    const convertedValue = currentValue
      .replace("×", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("𝝅", "Math.PI")
      .replace("log", "Math.log10")
      .replace("ln", "Math.log")
      .replace("e", "Math.E")
      .replace("√", "Math.sqrt")
      .replace("Exp", "Math.exp")
      .replace("x^y", "**")
      .replace("x!", "factorial")
      .replace("Inv", "toggleInverseMode")
      .replace("sin-1(", "sinInv(")
      .replace("cos-1(", "cosInv(")
      .replace("tan-1(", "tanInv(");

    //we are storing evaluated value in result variable and converting it into String
    console.log('convertedValue:', convertedValue)
    const result = eval(convertedValue);
    currentValue = result.toString();
    dispaly.value = currentValue;

  }

  function toggleInverseMode() {
    inverseMode = !inverseMode;

    const sinButton = document.getElementById('sin-button');
    const cosButton = document.getElementById('cos-button');
    const tanButton = document.getElementById('tan-button');

    if (inverseMode) {
      sinButton.innerHTML = 'sin<sup>-1</sup>';
      cosButton.innerHTML = 'cos<sup>-1</sup>';
      tanButton.innerHTML = 'tan<sup>-1</sup>';
    } else {
      sinButton.innerHTML = 'sin';
      cosButton.innerHTML = 'cos';
      tanButton.innerHTML = 'tan';
    }
  }

  function handleButtonClick(button) {
    if (inverseMode) {
      // Handle inverse sin, cos, and tan functions
      if (button === 'sin') {
        // Calculate inverse sine
        // ...
      } else if (button === 'cos') {
        // Calculate inverse cosine
        // ...
      } else if (button === 'tan') {
        // Calculate inverse tangent
        // ...
      }
    } else {
      // Handle regular sin, cos, and tan functions
      if (button === 'sin') {
        // Calculate sine
        // ...
      } else if (button === 'cos') {
        // Calculate cosine
        // ...
      } else if (button === 'tan') {
        // Calculate tangent
      }
    }
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

  function addOperand(operand) {

    dispaly.value += operand + "(";
  }


  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
      const value = button.innerText;




      try {

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

      catch (error) {

        console.error(error);
        currentValue = "ERROR";
        dispaly.value = currentValue;
      }


    })
  }
});