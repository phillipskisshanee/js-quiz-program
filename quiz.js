// variables
var correct = 0;

// prompt
var answer1 = prompt("When will Frank Ocean release his second album?");
// console.log("the answer is:" + answer1);

// if statement
if ( answer1.toUpperCase() === 'never' ) {
 correct += 1;
}

//console.log("correst:" + correct);

// prompt
var answer2 = prompt("Did you believe Frank Ocean when he said he was coming out with new music?");
// console.log("the answer is:" + answer1);

// if statement
if ( answer2.toUpperCase() === 'nope' ) {
 correct += 1;
}

//console.log("correst:" + correct);

// prompt
var answer3 = prompt("How many times has Frank lied to us about releasing new music?");
// console.log("the answer is:" + answer1);

// if statement
if ( answer3.toUpperCase() === 'too many' ) {
 correct += 1;
}

//console.log("correst:" + correct);

// prompt
var answer4 = prompt("Has Frank forgotten about us?");
// console.log("the answer is:" + answer1);

// if statement
if ( answer4.toUpperCase() === 'definitely' ) {
 correct += 1;
}

//console.log("correst:" + correct);

// prompt
var answer5 = prompt("Is Frank Ocean still alive?");
// console.log("the answer is:" + answer1);

// if statement
if ( answer5.toUpperCase() === 'questionable' ) {
 correct += 1;
}

//console.log("correst:" + correct);

// output results
document.write("<p>" Congrats! If you believed Frank was going to grace us with new music, you played yourself. "</p>");
