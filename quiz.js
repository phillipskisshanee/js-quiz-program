// variables
var correct = 0;
var totalAsked = 0;
var i = 0;

var quizQuestion = [
 ["When will Frank Ocean release his second album?", "NEVER"],
 ["Did you believe Frank Ocean when he said he was coming out with new music?", "NOPE"],
 ["How many times has Frank lied to us about releasing new music?", "TOO MANY"],
 ["Has Frank forgotten about us?", "DEFINITELY"],
 ["Is Frank Ocean still alive?", "QUESTIONABLE"]
 ];
 
 function question() {
  while(i < quizQuestion.length) {
   var answerInput = prompt(quizQuestion[i][0]);
   totalAsked += 1;
   if ( answerInput.toUpperCase() === quizQuestion[i][1]) {
    correct += 1;
   }
   i++;
   console.log("total asked: " + totalAsked + "// correct: " + correct)
  }
 }
 
 question();
 

// prompt 
//var answer1 = prompt("When will Frank Ocean release his second album?");
//var answer2 = prompt("Did you believe Frank Ocean when he said he was coming out with new music?");
//var answer3 = prompt("How many times has Frank lied to us about releasing new music?");
//var answer4 = prompt("Has Frank forgotten about us?");
//var answer5 = prompt("Is Frank Ocean still alive?");

// if statement
//if ( answer1.toUpperCase() === 'NEVER' ) {
// correct += 1;
//}

//if ( answer2.toUpperCase() === 'NOPE' ) {
 //correct += 1;
//}

//if ( answer3.toUpperCase() === 'TOO MANY' ) {
 //correct += 1;
//}

//if ( answer4.toUpperCase() === 'DEFINITELY' ) {
// correct += 1;
//}

//if ( answer5.toUpperCase() === 'QUESTIONABLE' ) {
// correct += 1;
//}

// console.log("the answer is:" + answer1);


// output results
//if (correct === 0)
//document.write("<p> Congrats! If you believed Frank was going to grace us with new music, you played yourself. </p>");

//if (correct === 1)
//document.write("<p> Congrats! If you believed Frank was going to grace us with new music, you played yourself. </p>");

//if (correct === 2)
//document.write("<p> Congrats! If you believed Frank was going to grace us with new music, you played yourself. </p>");

//if (correct === 3)
//document.write("<p> Congrats! If you believed Frank was going to grace us with new music, you played yourself. </p>");

//if (correct === 4)
//document.write("<p> Congrats! If you believed Frank was going to grace us with new music, you played yourself. </p>");

//if (correct === 5)
//document.write("<p> Congrats! If you believed Frank was going to grace us with new music, you played yourself. </p>");
