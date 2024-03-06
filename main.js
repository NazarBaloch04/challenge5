"use strict";
// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
console.log("Nazar Baloch");
// console.log("-".repeat(80));
// let num8 = 5;
// let num9 = 3;
// console.log(5 + 3);
// console.log("-".repeat(80));
// let num10 = 12;
// let num11 = 4;
// console.log(12 - 4);
// console.log("-".repeat(80));
// let num12 = 2;
// let num13 = 4;
// console.log(2 * 4);
// console.log("-".repeat(80));
// let num14 = 64;
// let num15 = 8;
// console.log(64 / 8);
console.log("Date = 5 - 3 - 2024");
// let favoriteNumber = 90;
// console.log(`My favoriteNumberis ${favoriteNumber}`);
// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time
let favoritePersons = ["Ali", "Ahmed", "Nabi Dost", "Abdul Qadeer", "Muhammad Ali"];
for (let i = 0; i < favoritePersons.length; i++) {
    console.log(favoritePersons[i]);
}
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
let friendsList = ["Ali", "Ahmed", "Nabi Dost", "Abdul Qadeer", "Muhammad Ali"];
for (let name of friendsList) {
    //  send each a personanal message
    console.log(`Assalam o alaikum ${name} i hope that you are fine.`);
}
