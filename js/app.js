'use strict';
var point = 0;

var name = prompt('what is your name ?', 'Insert your name please');
console.log('Name: ', name);
alert('Greeting! Welcome ' + name);
alert('now lets start the guess game about me :)');

var car = prompt('Do i like cars ?', 'please answer with yes or no');
console.log('Car: ', car);
switch (car.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log('your answer is true, i like cars');
        alert('nice one ! your answer is true');
        point++;
        break;
    case 'no':
    case 'n':
        console.log('your answer is false , i like cars');
        alert('sorry , good luck next time');
        break;
    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}


var Country = prompt('Iam From jordan ?', 'please answer with yes or no');
console.log('Country: ', Country);
switch (Country.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log('your answer is true , iam from jordan');
        alert('nice one ! your answer is true');
        point++;
        break;
    case 'no':
    case 'no':
        console.log('false');
        alert('your answer is wrong, iam from jordan');
        break;
    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}


var age = prompt('iam 20 year old ?', 'please answer with yes or no');
console.log('age: ', age);
switch (age.toLowerCase()) {
    case 'yes':
    case 'y' :
        console.log('yours answer is false, iam 22 year old');
        alert('sorry... Good luck next time');
        break;
    case 'no':
    case 'n' :
        console.log('your answer is true,iam 22 year old');
        alert('nice one ! your answer is true');
        point++;
        break;
    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}


var food = prompt('Do i like food ?', 'please answer with yes or no');
console.log('food: ', food);
switch (food.toLowerCase()) {
    case 'yes':
    case 'y' :
        console.log('your answer is true , i like food');
        alert('nice one ! your answer is true');
        point++;
        break;
    case 'no':
    case 'n' :
        console.log('false');
        alert('your answer is false , i like food');
        break;
    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}


var color = prompt('black is my fav color ?', 'please answer with yes or no');
console.log('color: ', color);
switch (color.toLowerCase()) {
    case 'yes':
    case 'y' :
        console.log('false');
        alert('your answer is wrong , my fav color is white');
        break;
    case 'no':
    case 'n' :
        console.log('your answer is true');
        alert('nice one ! your answer is true , cuz my fav color is white ');
        point++;
        break;

    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}

alert('now i will show you the correct answers :)');
alert(`Here is the correct answers : i Like cars , Iam from jordan , iam 22 year old , i love food as well at then end my fav color is white`);

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
    console.log(number);
}



var myGamesTypes = ['wars', 'action', 'sport', 'stratigy', 'team work'];
for (var i = 0; i < 6; i++) {
    var guessAnswer = prompt('Can you guess my favorite games type as if they are action or family games?');
    var guess = guessAnswer.toLowerCase();

    for (var h = 0; h < myGamesTypes.length; h++) {
        if (guess === myGamesTypes[h]) {
            alert('That was one of the right answers , thank you ');
            point++;
            i = 6;
            console.log(myGamesTypes);
            break;
        }
    }
    if (i !== 6) {
        alert('Sorry wrong answer, try again');
    }
}



alert('My best game types i like are: wars, action, sport, stratigy and team work');

alert('Well done correct answers are ' + point + '/7');

alert("i hope u had alot of fun :) , thanks for your time and have a nice day " + name);

