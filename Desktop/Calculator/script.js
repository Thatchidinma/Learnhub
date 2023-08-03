const userInput = document.getElementById("userInput");
let expression = '';

const press = (num) => {
    expression += num;
    userInput.value = expression;
}

const equal = () => {
    try {
      userInput.value = eval(expression);
    } catch(e) {
        userInput.value = "Error!";
    }
      expression = '';
}

const erase = () => {
    expression = '';
    userInput.value = expression;
}