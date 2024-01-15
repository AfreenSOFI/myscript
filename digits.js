
const Input = prompt("Enter a number:");
const Number = parseFloat(Input);

if (!isNaN(Number)) {
    let digitCount = 0;

    if (Number === 0) {
        digitCount = 1;
    } else {
        let number = Number;
        while (number !== 0) {
            number = Math.floor(number / 10);
            digitCount++;
        }
    }

    document.write(`The number ${Number} has ${digitCount} digits.`);
} else {
  
    document.write("Invalid input. Please enter a valid number.");
}





