// select all buttons
const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const clearAllButton = document.querySelector("[data-all-clear]");
const previousText = document.querySelector("[data-previous-operand]");
const currentText = document.querySelector("[data-current-operand]");
let currentOperand = "0";
let previousOperand = "0";
let operator = "";

// update the values inside the output also need to make sure only one decimal
const updateDisplay = () => {
    currentText.innerHTML = currentOperand;
    // previousText.innerHTML = previousOperand;
    if (operator != null) {
        // creates string to show operation
        previousText.innerText = previousOperand + operator;
    } else {
        previousText.innerText = "";
    }
};

// Number Btns
numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
        submitNumber(button.innerHTML.trim());
        updateDisplay();
    });
});

// Get values from numbers
const submitNumber = (x) => {
    if (currentOperand === "0") {
        currentOperand = x;
    } else {
        currentOperand = currentOperand + x;
    }
};

// Operation Btns
operationBtns.forEach((button) => {
    button.addEventListener("click", () => {
        submitOperator(button.innerHTML.trim());
        selectOperation(button.innerHTML);
        calculate();
        updateDisplay();
    });
});

// Get values from operations
const submitOperator = (x) => {
    if (operator !== "") return;
    operator = x;
    // calculate();
};

equalsBtn.addEventListener("click", (button) => {
    submitEquals();
});

const submitEquals = (x) => {
    let total = calculate(
        parseFloat(previousOperand),
        parseFloat(currentOperand),
        operator
    );

    previousOperand = currentOperand;
    currentOperand = total;
    operator = "";

    updateDisplay();
};

// All Clear Button "AC"
clearAllButton.addEventListener("click", (button) => {
    submitAllClear();
    updateDisplay();
});

// All Clear function "AC"
const submitAllClear = (x) => {
    currentOperand = "0";
    previousOperand = "";
    operator = "";
};

// Delete Button "C"
deleteBtn.addEventListener("click", (button) => {
    submitDelete();
    updateDisplay();
});

// Delete Button "C"
const submitDelete = (x) => {
    if (currentOperand.length === 1) {
        currentOperand = "0";
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }
};

// Calculates and generates result.
const calculate = (x, y, z) => {
    if (isNaN(x) || isNaN(y)) return;
    switch (z) {
        case "+":
            return x + y;

        case "x":
            return x * y;

        case "÷":
            return x / y;

        case "-":
            return x - y;

        default:
            return;
    }
};

const selectOperation = () => {
    if (currentOperand === "") return;
    // If history has value...
    if (previousOperand !== "")
        // then calculate
        calculate(); //otherwise
    // done typing the previous number move to history
    previousOperand = currentOperand;
    currentOperand = "";
};
