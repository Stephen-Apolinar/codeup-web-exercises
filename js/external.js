"use strict"
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");



var userInput = prompt("What's your favorite color?");
alert('Great! ' + userInput + ' is my favorite color too!');



alert("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay? ");
var rentalPerDayDollars = prompt ("How much is each rental per day $?");
var littleMermaidDays = prompt ("How many days have you rented the little mermaid?");
var brotherBearDays = prompt ("How many days have you rented brother bear?");
var herculesDays = prompt ("How many days have you rented Hercules?");
var totalRentalCost;
totalRentalCost =
    (parseInt(littleMermaidDays)
        + parseInt(brotherBearDays)
        + parseInt(herculesDays))
    * parseInt(rentalPerDayDollars);
alert("You will end up paying $" + totalRentalCost.toFixed(2));



alert("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.");
var googleHourlyRateDollars = 400;
var amazonHourlyRateDollars = 380;
var facebookHourlyRateDollars = 350;
var googleHours = prompt ("How many hours did you work for at Google");
var amazonHours = prompt ("How many hours did you work for at Amazon");
var facebookHours = prompt ("How many hours did you work for at Facebook");
var totalPayment;
totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;
alert("You will earn $" + totalPayment + " from working this week");


alert("A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.");
var classIsNotFull = confirm("Is the class open?");
var classSchedulesCheck = confirm("Schedule is conflict free?");
var studentEnrolled = classIsNotFull && classSchedulesCheck;
alert("The student is enrolled: " + studentEnrolled);


alert("A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.");
var numberOfItemsForDiscount = 2;
var numberOfItems = prompt ("How man items does the customer have?");
var offerIsNotExpired = confirm("Is the offer valid?");
var isPremiumMember = confirm("Is the person a premium member?");
var productDiscountApplied = isPremiumMember || (numberOfItems >= numberOfItemsForDiscount && offerIsNotExpired);
alert("The product offer is " + productDiscountApplied);