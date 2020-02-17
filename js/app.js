'use strict';

var name = prompt('what is your name ?','Insert your name please');
console.log('Name: ', name);

alert('Greeting! Welcome ' + name);

alert('now lets start the guess game about me :)')
var car = prompt('Do i like cars ?','please answer with yes or no');
console.log('Car: ', car);

switch(car.toLowerCase()){
    case 'yes' :
        console.log('your answer is true, i like cars');
        alert('nice one ! your answer is true');
        break;
    case 'no'  :
        console.log('your answer is false , i like cars');
        alert('sorry , good luck next time');
        break;
    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}

var Country = prompt('Iam From jordan ?','please answer with yes or no');
console.log('Country: ', Country);

switch(Country.toLowerCase()){
    case 'yes' :
        console.log('your answer is true , iam from jordan');
        alert('nice one ! your answer is true');
        break;
    case 'no'  :
        console.log('false');
        alert('your answer is wrong, iam from jordan');
        break;
    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}

var age = prompt('iam 20 year old ?','please answer with yes or no');
console.log('age: ', age);

switch(age.toLowerCase()){
    case 'yes' :
        console.log('yours answer is false, iam 22 year old');
        alert('sorry... Good luck next time');
        break;
    case 'no'  :
        console.log('your answer is true,iam 22 year old');
        alert('nice one ! your answer is true');
        break;
    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}

var food = prompt('Do i like food ?','please answer with yes or no');
console.log('food: ', food);

switch(food.toLowerCase()){
    case 'yes' :
        console.log('your answer is true , i like food');
        alert('nice one ! your answer is true');
        break;
    case 'no'  :
        console.log('false');
        alert('your answer is false , i like food');
        break;
    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}

var color = prompt('black is my fav color ?','please answer with yes or no');
console.log('color: ', color);

switch(color.toLowerCase()){
    case 'yes' :
        console.log('false');
        alert('your answer is wrong , my fav color is white');
        break;
    case 'no'  :
        console.log('your answer is true');
        alert('nice one ! your answer is true , cuz my fav color is white ');
        break;

    default:
        console.log('please answer with yes or not');
        alert('please answer with yes or no next time');
}
alert('now i will show you the correct answers :)');
alert(`Here is the correct answers : i Like cars , Iam from jordan , iam 22 year old , i love food as well at then end my fav color is white`);

alert("i hope u had alot of fun :) , thanks for your time and have a nice day " + name)

