function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');

    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.text = 'Binary';

    const hexOption = document.createElement('option');
    hexOption.value = 'hexadecimal';
    hexOption.text = 'Hexadecimal';

    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexOption);

    selectMenuTo.value = "binary";

    function decimalToBinary(decimal) {
        return (decimal >>> 0).toString(2);
    }

    function decimalToHexadecimal(decimal) {
        return decimal.toString(16).toUpperCase();
    }

    const convertButton = document.querySelector("button");
    convertButton.addEventListener("click", function () {
        const decimalInput = parseInt(document.getElementById("input").value, 10);
        const selectedOption = selectMenuTo.value;
        let result;

        if (isNaN(decimalInput)) {
            result = "Invalid input";
        } else {
            if (selectedOption === "binary") {
                result = decimalToBinary(decimalInput);
            } else if (selectedOption === "hexadecimal") {
                result = decimalToHexadecimal(decimalInput);
            } else {
                result = "Invalid conversion";
            }
        }

        document.getElementById("result").value = result;
    });
}