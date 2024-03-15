
                                         // chapter 1 alert

// 1st-box
alert("Error! please enter a velid password.");

// 2nd-box
alert("Welcom to JS Land...\nHappy Coding\nTalha Khan!");

// 3rd-box
alert("Welcom to JS Land...");

// 5th-box
alert("Hello... i can run JS through my web browser's console");
console.log("Hello... i can run JS through my web browser's console")

// chapter 1 alert complet.




                                            // chapter 2 VARIABLES FOR STRINGS 

// 1.
var username;

// 2.
var myName = "Talha Khan";

// 3.
var message;

message = "Hello World";

alert(message);

// 4.
var studentName = "Talha Khan";
var studentAge = 23;
var studentGrade = "A";
var studentCity = "Karachi";

alert("Name: " + studentName + "\nAge: " + studentAge + "\nGrade: " + studentGrade + "\nCity: " + studentCity);

// 5.
var alertMessage = "pizza\npizz\npiz\npi\np";
alert(alertMessage);

// 6.
var email = "talhastudent0313@gmail.com";
alert("My email address is: " + email);

// 7.
var a = "book";
var a = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + a);

// 8.
document.getElementById('content').innerHTML = '<h3>Yah! I can wright HTML content through Javascript</h3>'

// 9.
var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

alert(specialString);

document.write(specialString);

// chapter 2 VARIABLES FOR STRINGS end


                                          // chapter 3 VARIABLES FOR NUMBERS.

// 1.
var age = 23; 
alert("My age is: " + age);

// 2.
var visitCount = localStorage.getItem('visitCount');

if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount++;
}

localStorage.setItem('visitCount', visitCount);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('visitMessage').textContent = "You have visited this site " + visitCount + " times.";
});

// 3.
var birthYear = 2001;
document.write("My birth year is " + birthYear + "Data type of ddeclared variable is number");

// 4.
var visitorName = "Bilal ansari";
var productTitle = "T-shirt";
var quantity = 5;
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on Talha Khan Clothing store.");

 // chapter 3 VARIABLES FOR NUMBERS end

//                                           //  chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL.

// // 1. 
// var var1, var2, var3;

// // 2. 
// // Legal variable names
// var $myVariable;
// var _myVariable;
// var myVariable123;
// var my_variable;
// var camelCaseVariable;

// // Illegal variable names
// // var 123myVariable; // starts with a number (illegal)
// // var my Variable; // contains a space (illegal)
// // var my-Variable; // contains a hyphen (illegal)
// // var my@Variable; // contains a special character (illegal)
// // var var; // reserved keyword (illegal)

// // 3.
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain letters, digits, underscores, and dollar signs. For example $my_1stVariable.</p>");
// document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.</p>");
// document.write("<p>Variable names are case-sensitive.</p>");
// document.write("<p>Variable names should not be JavaScript reserved keywords.</p>");

// //  chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL end


//                                              // chapter 5 MATH EXPRESSIONS

// // 1.
// var num1 = "3";
// var num2 = "7";
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));

// var sum = num1 + num2;

// document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

// // 2.
// var num1 = "2";
// var num2 = "3";
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));

// var subtraction = num1 - num2;

// var multiplication = num1 * num2;

// var division = num1 / num2;

// var modulus = num1 % num2;

// document.write("Subtraction: " + subtraction + "<br>");
// document.write("Multiplication: " + multiplication + "<br>");
// document.write("Division: " + division + "<br>");
// document.write("Modulus: " + modulus + "<br>");

// // 3.
// var num1;

// document.write("Value after variable declaration is: " + num1 + "<br>");

// num2 = 5;

// document.write("Initial value: " + num2 + "<br>");

// num1++;

// document.write("Value after increment is: " + num1 + "<br>");

// num2 += 7;

// document.write("Value after addition is: " + num2 + "<br>");

// num1--;

// document.write("Value after decrement is: " + num1 + "<br>");

// var remainder = num2 % 3;
// document.write("The remainder is: " + remainder + "<br>");

// // 4.
// var ticketPrice = 600;

// var numberOfTickets = 5;

// var totalCost = ticketPrice * numberOfTickets;

// document.write("The cost of buying " + numberOfTickets + " movie tickets is " + totalCost + " PKR.");


// // 5.
// var number = 7;

// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br><br>");
// }

// // 6.
// var celsiusTemp = 30;

// var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

// document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");

// var fahrenheitTemp2 = 86;

// var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;

// document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// // 7.
// var items = ["T-shirt", "Jeans", "Shoes"];

// var prices = [1000, 2000, 3000];

// var quantities = [1, 2, 1];

// var totalCost = 0;
// for (var i = 0; i < items.length; i++) {
//     totalCost += prices[i] * quantities[i];
// }

// document.write("<h2>Shopping Cart</h2>");
// for (var i = 0; i < items.length; i++) {
//     document.write(items[i] + " - Quantity: " + quantities[i] + "<br>");
// }
// document.write("<br>Total Cost: " + totalCost + " PKR");

// // 8.
// var totalMarks = 980;

// var marksObtained = 804;

// var percentage = (marksObtained / totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");

// // 9.
// var usDollars = 5;
// var saudiRiyals = 15;

// var usdToPkr = 104.80;
// var sarToPkr = 28;

// var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * sarToPkr);

// document.write("Total amount in Pakistani Rupees: " + totalPkr.toFixed(2) + " PKR");

// // 10.
// var num = 10;

// var result = ((num + 5) * 10) / 2;
// document.write("Result: " + result);

// // 11.
// var currentYear = new Date().getFullYear(2024);

// var birthYear = 2001;

// var age1 = currentYear - birthYear;
// var age2 = age1 - 2;

// document.write("They are either " + age1 + " or " + age2 + " years old.");


// // 12.
// var radius = 20;

// var circumference = 2 * Math.PI * radius;

// var area = Math.PI * radius * radius;

// document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// document.write("The area is " + area.toFixed(2));


// // 13.
// var favoriteSnack = "chocolate";

// var currentAge = 30;

// var maximumAge = 80;

// var amountPerDay = 2;

// var yearsRemaining = maximumAge - currentAge;
// var daysRemaining = yearsRemaining * 365;
// var totalAmountNeeded = daysRemaining * amountPerDay;

// document.write("You will need " + totalAmountNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");

// // chapter 5 MATH EXPRESSIONS end




//                                              // chapter 6-to-9.

// // 1.
// var number = 20; 

// var result = (((number + 10) * 2) / 2) - number;

// document.write("The result of the arithmetic operations is: " + result);

// // 2.
// var a = 5, b = 3;
// var result = --a - --b + ++b + b--;
// console.log(result);




// // 3.
// var Name = prompt("Enter your name:");

// document.write("Hello, " + Name + "! Welcome to our website.");

// var number = parseInt(prompt("table number:"));

// if (isNaN(number)) {
//     number = 5;
// }

// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// var subject1 = prompt("enter subject name-1 english:");
// var subject2 = prompt("enter subject name-2 math:");
// var subject3 = prompt("enter subject name-3 urdo:");

// var totalMarks = 100;

// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for subject-1" + subject1 + "72"));
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for subject-2" + subject2 + "78"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for subject-3" + subject3 + "89"));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<h2>Result</h2>");
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("</table>");
// document.write("<br>");
// document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");

// // chapter 6-to-9 end




//                                            // chapter 9-to-11.

// // 1.
// var city = prompt("Enter city name:");

// if (city.toLowerCase() === "karachi") {
//     document.write("Welcome to the city of lights.");
// } else {
//     document.write("Welcome.");
// }

// // 2.
// var gender = prompt("Enter your gender (male/female):");

// if (gender.toLowerCase() === "male") {
//     document.write("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//     document.write("Good Morning Maam.");
// } else {
//     document.write("Good Morning.");
// }

// // 3.
// var color = prompt("Enter the color of road traffic signal (red/yellow/green):");

// switch (color.toLowerCase()) {
//     case "red":
//         document.write("Must Stop.");
//         break;
//     case "yellow":
//         document.write("Ready to move.");
//         break;
//     case "green":
//         document.write("Move now.");
//         break;
//     default:
//         document.write("Invalid color.");
// }

// // 4.
// var remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));

// if (remainingFuel < 0.25) {
//     document.write("Please refill the fuel in your car.");
// } else {
//     document.write("You have enough fuel in your car.");
// }

// // 5.
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }


// // 6.
// var marksSubject1 = parseInt(prompt("Enter marks obtained in english:"));
// var marksSubject2 = parseInt(prompt("Enter marks obtained in acconting:"));
// var marksSubject3 = parseInt(prompt("Enter marks obtained in urdu:"));
// var totalMarks = parseInt(prompt("Enter total marks:"));

// var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// var grade;
// if (percentage >= 80) {
//     grade = "A+";
// } else if (percentage >= 70) {
//     grade = "A";
// } else if (percentage >= 60) {
//     grade = "B";
// } else if (percentage >= 50) {
//     grade = "C";
// } else if (percentage >= 40) {
//     grade = "D";
// } else {
//     grade = "Fail";
// }

// var remarks;
// switch (grade) {
//     case "A+":
//     case "A":
//         remarks = "Excellent";
//         break;
//     case "B":
//         remarks = "Good";
//         break;
//     case "C":
//         remarks = "Satisfactory";
//         break;
//     case "D":
//         remarks = "Needs Improvement";
//         break;
//     default:
//         remarks = "Sorry, you failed.";
// }

// document.write("<h2>Result</h2>");
// document.write("<p>Total Marks: " + totalMarks * 3 + "</p>");
// document.write("<p>Marks Obtained: " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");


// // 7.
// var secretNumber = 6; 

// var guess = parseInt(prompt("Guess the secret number (from 1 to 10):"));

// if (guess === secretNumber) {
//     document.write("Bingo! Correct answer.");
// } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
//     document.write("Close enough to the correct answer.");
// } else {
//     document.write("Sorry, try again!");
// }


// // 8.
// var number = parseInt(prompt("Enter a number:"));

// if (number % 5 === 0) {
//     document.write("The number is divisible by 5.");
// } else {
//     document.write("The number is not divisible by 5.");
// }


// // 9.
// var number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//     document.write("The number is even.");
// } else {
//     document.write("The number is odd.");
// }

// // 10.
// var temperature = parseInt(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//     document.write("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("It is freezing outside!");
// }


// // 11.
// var num1 = "35";
// var num1 = "42";
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;
// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     result = num1 / num2;
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     document.write("Invalid operation.");
// }

// document.write("The result of the operation is: " + result);

// // chapter 9-to-11 end

