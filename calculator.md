My Calculator plan

Part One - Design

1. Find image online focusing on simple design to allow maximum time to focus on building functionality https://www.shutterstock.com/image-vector/white-calculator-icon-on-blue-background-220395709

-   has number keys from 0 to 9
-   has operator keys (+, -, /, \*, =)
-   has a display (which will render the current calculation) in a box at the top
-   has a "." key

2. Review design and consider how best to build, using Flexbox and or grid
3. Create HTML first including all buttons (adding classes or ID's in HTML relating to their operation to use for DOM manipulation).
4. Create styles in SCSS as much as possible refactoring code as I go

Part Two - JavaScript

1. Once design is in place begin work on JavaScript.

-   Start by reviewing resources online to assist and considering all functions that must be complete, the basic functionalities of a calculator are:

    -   addition, subtraction, multiplication, division, delete, all-clear, and the ability to use decimal numbers in performing these operations.

-   Start by creating variables in JS and use DOM to select relevant elements for all buttons
-   Can group and select all numbers and operators using querySelectorAll because the buttons appear several times on the calculator

-   Now we can start to code to make the calculator work:
    -   Determine where we will display the output and create a function to do so
    -   Functions to clear() or delete() data
    -   Function that adds numbers clicked to the display appendNumber()
    -   Function to selectOperation(operator) from operators
    -   Functions to determineValues() and displayOutput()

Outcomes:
Should render the current calculation in a box at the top (calculator display) - will need to select
It should handle decimals
It doesn't need to support orders of operation
It should not use eval() or Function() constructor
You should be writing arrow functions
Try and create as many pure functions as possible!

If time allows or in the future I would like to create inverted colors as well https://www.shutterstock.com/image-vector/blue-calculator-icon-on-white-background-233412259

// Additional buttons
// const memoryRecallBtn = document.getElementById("memory-recall");
// const memoryPlusBtn = document.getElementById("memory-plus");
// const memorySubtractBtn = document.getElementById("memory-subtract");
