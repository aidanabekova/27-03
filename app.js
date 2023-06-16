function calcAverage(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var average = sum / numbers.length;
    var rounding = Math.round(average);
    return rounding;
}
console.log(calcAverage(3, 3, 3));



function DataType(argument) {
    console.log(typeof argument);
}
DataType(234567);