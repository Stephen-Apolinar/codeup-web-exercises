"use strict";
//1
var i =1 ;

while ( i <  65536 )  {
    i = i * 2;
    console.log(i);
}


//2
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


do {
    console.log("Start of the day I have " + allCones + " left");
    var conesTosell = Math.floor(Math.random() * 5) + 1;

    if (conesTosell <= allCones) {
        console.log("I sold " + conesTosell);
        allCones = allCones - conesTosell;
    } else if (allCones === 0) {
        console.log("I can go home");

    } else {
        console.log("I don't have " + conesTosell +" cones to sell");
    }

}
 while (allCones !== 0);