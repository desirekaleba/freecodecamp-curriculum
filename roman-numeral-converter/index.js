function convertToRoman(num) {

    const objValues = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };


    let decimalValues = revertArr(Object.keys(objValues));
    let romanValues = revertArr(Object.values(objValues));

    let result = '';

    for (let i = 0; i < decimalValues.length; i++) {
        while (decimalValues[i] <= num) {
            result += romanValues[i];
            num -= decimalValues[i];
        }
    }

    return result;
}

function revertArr(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(convertToRoman(36));