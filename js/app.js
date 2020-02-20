'use strict';
var point = 0;
function q1(){
var name = prompt('what is your name ?', 'Insert your name please');
alert('Greeting! Welcome ' + name);
alert('now lets start the guess game about me :)');

var car = prompt('Do i like cars ?', 'please answer with yes or no');
switch (car.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('nice one ! your answer is true');
        point++;
        break;
    case 'no':
    case 'n':
        alert('sorry , good luck next time');
        break;
    default:
        alert('please answer with yes or no next time');
}
}
q1();

function q2() {
var Country = prompt('Iam From jordan ?', 'please answer with yes or no');
switch (Country.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('nice one ! your answer is true');
        point++;
        break;
    case 'no':
    case 'no':
        alert('your answer is wrong, iam from jordan');
        break;
    default:
        alert('please answer with yes or no next time');
}
}
q2();
function q3(){
var age = prompt('iam 20 year old ?', 'please answer with yes or no');
switch (age.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert('sorry... Good luck next time');
        break;
    case 'no':
    case 'n' :
        alert('nice one ! your answer is true');
        point++;
        break;
    default:
        alert('please answer with yes or no next time');
} }
q3();

function q4 (){
var food = prompt('Do i like food ?', 'please answer with yes or no');
switch (food.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert('nice one ! your answer is true');
        point++;
        break;
    case 'no':
    case 'n' :
        alert('your answer is false , i like food');
        break;
    default:
        alert('please answer with yes or no next time');
} }
q4();

function q5(){
var color = prompt('black is my fav color ?', 'please answer with yes or no');
switch (color.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert('your answer is wrong , my fav color is white');
        break;
    case 'no':
    case 'n' :
        alert('nice one ! your answer is true , cuz my fav color is white ');
        point++;
        break;

    default:
        alert('please answer with yes or no next time');
} }
q5();

alert('now i will show you the correct answers :)');
alert(`Here is the correct answers : i Like cars , Iam from jordan , iam 22 year old , i love food as well at then end my fav color is white`);
function q6 (){
alert('try to guess the number in my head ', 'please answer with a number');
var counter = 0;
while (counter < 4 && number !== 10) {
    var number = parseInt(prompt('Guess my number'));
    if (number > 10) {
        alert('This is so high, please try to Guess again');
        counter++;
    } else if (number < 10) {
        alert('This is so low, please try to Guess again');
        counter++;
    }
}

if (counter === 4) {
    alert('Sorry guesses limits has been finished , Good Luck next time');
}


if (number === 10) {
    alert('nice one ! this is my number');
    point++;
    counter = 5;
}

}
q6();
function q7 (){
var myGamesTypes = ['wars', 'action', 'sport', 'stratigy', 'team work'];
for (var i = 0; i < 6; i++) {
    var guessAnswer = prompt('Can you guess my favorite games type as if they are action or family games?');
    var guess = guessAnswer.toLowerCase();

    for (var h = 0; h < myGamesTypes.length; h++) {
        if (guess === myGamesTypes[h]) {
            alert('That was one of the right answers , thank you ');
            point++;
            i = 6;
            break;
        }
    }
    if (i !== 6) {
        alert('Sorry wrong answer, try again');
    }
}

}
q7();

alert('My best game types i like are: wars, action, sport, stratigy and team work');

alert('Well done correct answers are ' + point + '/7');

alert("i hope u had alot of fun :) , thanks for your time and have a nice day " + name);

