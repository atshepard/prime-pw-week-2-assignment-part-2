// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set the value to 'Dane'.
// Then we set a condition that if the value of name is equal to 'Mary', we log the string 'Hi, Mary!' to the console.
// If the value of name is anything other than 'Mary', the string 'How do you do?' is logged to the console.
// In this case, when the code is run, 'How do you do?' will log to the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret and do not assign it a value.
// We create a variable called code and assign it the value 123.
// Our first conditional statement checks if the value of code is equal to 123, and if so, it sets the value of secret to 'super', and multiplies the value of code by 2.
// The second conditional checks if the current value of code is greater than 250, and if so, sets the value of secret to 'duper'
// When we log the value of secret to the console we get 'super', as the value of code is 246.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First we define 3 variables, isStudent (boolean), age (number) and zip (number).
// In our if/else conditional, the code works top to bottom and will log the first statement that fulfills its conditions. The first phrase checks if isStudent is true and zip is above 80000. If so, it logs 'You're a student on the West Coast!
// Then it checks if isStudent is false or age is under 30, in which case it logs 'What are your hobbies?'
// Then if neither of the above conditions are met, then we check if isStudent is true, and if so log 'Welcome to Prime' to the console.
// If none of the above conditions are met, the console will log 'How about the weather?'
// With our current values, when the code is run we will see 'Welcome to Prime!' log to the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX-- Value of colorOne should be 'blue', and colorTwo should be 'red'

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX-- Both the values of colorOne and colorTwo should be set to purple, not just colorOne
// The code block should read:
// if (mix === true) {
// colorOne = 'purple';
// colorTwo = 'purple';
// }

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4; // FIX -- use let instead of const if time will change - const variables cannot be updated later.

// FIX -- current statement uses OR conditional and instead should read
// if (temp > 39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX -- current conditional statement checks if minAge is less than or equal to age.
// correct statement should be if(age >= minAge) ..etc.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
