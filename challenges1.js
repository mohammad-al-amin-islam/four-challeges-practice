function toCelcius(temp) {
    let result = (temp * (9 / 5)) + 32;
    return result;
}

const calcultedTemp = toCelcius(12);
console.log(calcultedTemp);