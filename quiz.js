// variables
var correct = 0;

// prompt
var answer1 = prompt("ask a question...");
// console.log("the answer is:" + answer1);

// if statement
if ( answer1.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}

//console.log("correst:" + correct);

// output results
document.write("<p>" + answer1 + "</p>");
