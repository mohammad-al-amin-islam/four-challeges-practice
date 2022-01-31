function toCelcius(temp){
    let result = ((temp - 32) * 5/9);
    return result;
}

let getCelcius = toCelcius(64);
console.log(getCelcius);