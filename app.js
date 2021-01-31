function greeting(){
var hourNow = prompt('what is the time');
console.log(hourNow)
// mohammad
var message= '';
console.log(message);
if(hourNow >= 18  && hourNow <= 24){ //f
    message = 'Good Evening';
}else if(hourNow >= 12 && hourNow < 18){
    message = 'Good Afternoon';
}else if (hourNow >= 0 && hourNow< 12){
    message = 'Good morning';
}else{
    alert('Welcome ')
}
document.write('<h2>' + message + '</h2>');
}

function orderingCookie(){
var userOrder = prompt('what would you like to order dounts or cookies','place your order');
while(!(userOrder =='dounts' || userOrder =='cookies')){
            // F                      // T
                            // T
                            // !T - > False
    userOrder = prompt('please enter the correct item')
}


var userInputs = prompt('how many cookeis or dounts  do you want?')
// 5 
var image=''; 

// docuemnt.write()
// 3
for(var i = 0; i < userInputs; i++){
    if(userOrder =='cookies'){
        image = image + '<img src="https://www.kainoasgrill.com/wp-content/uploads/2019/03/Cookies-400x300.jpg">'
        console.log(image)
        
    }else if(userOrder =='dounts'){
        image = image +'<img src="https://thebakingexplorer.com/wp-content/uploads/2020/05/NDpin1-200x300.jpg">'
  
    }

}

document.write(image)

}

greeting();
orderingCookie();


/*
// using document.write printout the odd numbers between(1-100) each number in one line


// for(var i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//        document.write(i);
//        document.write("<br>")
//     }
// }


// function greeting(message){
//     alert(message);
// }
// greeting('welcome to my webPage')




// var ahmadsGrade = 300;
// var mohammadsGrade = 280;
// var samisGrade = 400;
// var omarsGrade = 600;
// var khaledsGrade = 700;

// var ahmadAvg = ahmadsGrade/3;
// console.log(ahmadAvg);

// var mohammadsAvg = mohammadsGrade/3;
// console.log(mohammadsAvg);

// var samisAvg = samisGrade/3;
// console.log(samisAvg)

// var omarsAvg = omarsGrade/3
// console.log(omarsAvg)

// var khaledsAvg = khaledsGrade/3;
// console.log(khaledsAvg);



// function gradeCalc(name,grade){
//     var avg = grade/3;
//     console.log(name +avg);
// }

// gradeCalc('ahmad :',ahmadsGrade)
// gradeCalc('mohammad : ',mohammadsGrade)
// gradeCalc('sami : ',samisGrade)


*/