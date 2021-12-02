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
const updateDisplay = () => {};

// Number Btns
numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log(button.innerHTML);
        submitNumber(button.innerHTML.trim());
    });
});

// Get values from numbers
const submitNumber = (x) => {
    if (currentOperand === "0") {
        currentOperand = x;
    } else {
        currentOperand = currentOperand + x;
    }
    console.log(currentOperand);
};

// Operation Btns
operationBtns.forEach((button) => {
    button.addEventListener("click", () => {
        submitOperator(button.innerHTML.trim());
        selectOperation(button.innerHTML);
        calculate();
        // updateDisplay();
    });
});

// Get values from operations
const submitOperator = (x) => {
    operator = x;
    console.log(operator);
};

equalsBtn.addEventListener("click", (button) => {
    submitEquals();
});

const submitEquals = (x) => {
    console.log("Equals");
    console.log(calculate());
};

// All Clear Button "AC"
clearAllButton.addEventListener("click", (button) => {
    submitAllClear();
    // console.log("Clear");
});

// All Clear function "AC"
const submitAllClear = (x) => {
    currentOperand = "0";
    previousOperand = "";
    // operation = undefined;
    console.log(currentOperand);
};

// Delete Button "C"
deleteBtn.addEventListener("click", (button) => {
    submitDelete();
    // console.log("delete");
});

// Delete Button "C"
const submitDelete = (x) => {
    if (currentOperand.length === 1) {
        currentOperand = "0";
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }

    console.log(currentOperand);
};

// Calculates and generates result.
const calculate = () => {
    let calculation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;
    switch (calculation) {
        case "+":
            calculation = prev + current;
            break;
        case "-":
            calculation = prev - current;
            break;
        case "x":
            calculation = prev * current;
            break;
        case "÷":
            calculation = prev / current;
            break;
        default:
            return;
    }
};

const selectOperation = (operation) => {
    if (currentOperand === "") return;
    if (previousOperand !== "")
        // If history has value then compute (How do we get values into history?)
        calculate(); //otherwise
    operation = operation;
    // done typing the previous number move to history
    previousOperand = currentOperand;
    currentOperand = "";
};
