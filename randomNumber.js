var arrNumber = ["a", "b", "c", "d"];
var randomChar = 0;

function getRandomIndexArray(arrLength) {
    var max = arrLength;
    var min = 0;
    var randIndex = Math.floor(Math.random() * (max - min)) + min;
    console.log(randIndex);
    return randIndex;
}

var randomIndex = getRandomIndexArray(arrNumber.length);
console.log(arrNumber[randomIndex]);