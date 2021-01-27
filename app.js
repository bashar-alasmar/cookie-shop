

// var userInput = prompt('Whats your name?');
// console.log(userInput);

// alert('Hello ' + userInput);

// console.log(123 + 345);

// console.log('123' + 345);

// console.log('abc' + 'de' );

// var userName = 'sara';
// var userInput = 'anything';
// console.log(userName , userInput);
// var pi = 3.14 + 10;

// var x = 5;
// // < > != <= >=
// console.log(pi * x);

// console.log(pi);
// var y =20;
// var z ='20';
// console.log( y == z );
// // console.log(x >= pi);
// // console.log(x < pi);

// var numberOne = 10;
// var numberTwo = 10;
// // = assigning value 
// // == checking 2 values regarding the datatype
// // === stictly equl 
// var newUser = 'mohammad al azzam';
// // alert('Hi ' + newUser);
// console.log(newUser);


// // var mohammad = 'mohammad al khazali';
// // console.log(mohammad);

// var mohammad;

// mohammad = 5;
// console.log(mohammad)
// // reassign
// mohammad = 10;

// mohammad = 'ahmad';
// console.log(mohammad)

// // alert('this wont be saved')


//conditions 

// if statement
// var x = 15; 
// var y = 10;

// if(x<y){ // either true or false
//     alert('Hello ahmad');
// }else{
//     alert('We  are here in the else')
// }

// var user = prompt('what is your age?');
// // people less than 18 to be alerted with hello teenger
// if(user<18){
//     alert('Hello Teenger');
// }else{
//     alert('Hello Adults');
//     // as genral case 
// };
// people greater than 18 to be alerted with hello adults 

// if we have more than one condition
// 24
var hourNow = prompt('what is the time');
if(hourNow > 18){
    document.write('<h3>'+'Good Evening' + '</h3>');
}else if(hourNow > 12){
    document.write('Good afternoon');
}else if (hourNow >= 0 ){
    document.write('Good morning');
}else{
    alert('Welcome!');
}

// another way to show an output
// document.write("Welcome People");