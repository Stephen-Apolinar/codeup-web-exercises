'use strict';
//1
function showMultiplicationTable(number) {
    for (var i = 1; i<= 10; i++) {
        console.log(number + "x" + i + "= " + (number*i));
    }
}

showMultiplicationTable(7);


//2
function randomInt(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

function isEven(x) {
    return x % 2 === 0;
}

function isOdd (x) {
    return x % 2 !==0;
}

var number;

for (var i = 1; i <= 10; i++) {
    number = randomInt(20, 200);

    if (isEven(number)) {
        console.log(number + " is even");
    }

    if (isOdd(number)) {
        console.log(number + " is odd");
    }
}


//3
// var string;
// for(var i = 1; i <= 9; i++) {
//     i = i.toString();
//
//     string = i.substring(i.length - 1);
//
//     console.log(string.repeat(i));
//
// }

for (var i = 1; i<=9; i+=1) {
    var output = "";
    for (var j = 1; j <= i; j+=1) {
        output += i;
    }
    console.log(output);
}


//4

for(var i = 100; i >= 5; i -= 5) {
    console.log(i);
}