function calculate() {
    var side = parseFloat(document.getElementById('side').value);
    var selectedFunction = document.getElementById('function').value;

    if (isNaN(side)) {
        alert("Please enter a valid number for the side.");
        return;
    }

    var result, formula;
    if (selectedFunction === 'Area') {
        result = calculateArea(side);
        formula = "Area = side x side";
    } else if (selectedFunction === 'Perimeter') {
        result = calculatePerimeter(side);
        formula = "Perimeter = 4 x side";
    } else {
        alert("Invalid function selected.");
        return;
    }

    document.getElementById('result').innerText = "Formula:\n" + formula + "\n\nResult: " + result;
}

function calculateArea(side) {
    return side * side;
}

function calculatePerimeter(side) {
    return 4 * side;
}
