function simpleCalculator() {
    // Get the first number from the user, handle non-numeric input
    let num1 = parseFloat(prompt("Enter the first number:"));
    if (isNaN(num1)) {
      alert("Invalid input. Please enter a valid number.");
      return;
    }
  
    // Get the operator from the user, handle incorrect operators
    let operator = prompt("Enter an operator (+, -, *, /):");
    if (!(operator === '+' || operator === '-' || operator === '*' || operator === '/')) {
      alert("Invalid operator. Please enter a valid operator.");
      return;
    }
  
    // Get the second number from the user, handle non-numeric input
    let num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num2)) {
      alert("Invalid input. Please enter a valid number.");
      return;
    }
  
    // Perform the calculation based on the operator
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          alert("Division by zero is not allowed.");
          return;
        }
        result = num1 / num2;
        break;
      default:
        alert("Invalid operator.");
        return;
    }
  
    alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
  }
  
  // Call the calculator function
  simpleCalculator();
  