"use strict";

function isNumeric(x) {
    return !isNaN(parseFloat(x));
}

function isOdd(input) {
    return isNumeric(input) && input % 2 !== 0;
}

var number;
do {
    number = parseFloat(prompt("Please input an odd number between 1 and 50"));
    if(isOdd(number) && (number < 50 && number >= 1)) {
        break;
    }
} while(true);

console.log("The number to skip is: " + number);

for(var i = 1; i <= 50; i++) {
    if(i === number) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }

    if(isOdd(i)) {
        console.log("Here is an odd number: " + i);
    }
}

// while (true) {
//     var userNum = prompt("enter your odd number")
// }
//  console.log("number to skip is " + userNum);
//
// for (var i = 1; i<=50; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     if (i!== parseInt(userNum)){
//         console.log("here is an odd number" + i);
//     } else {
//         console.log("yikes! skipping number" + userNum);
//     }
//
// }




