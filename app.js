// hour now > 18 correct      hourNow < 24;
// logical operators 
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

// i want to log out 10 numbers
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// our problem we want to console.log() 10 numbers using some sort of loops

// i++ => i = i + 1;
// i-- => i = i - 1;
// for(var i =0 ; i < 10 ; i++){
//     console.log(i)
// }

// for(var i = 30; i >= 10 ; i--){
//     console.log(i);
// }

// console.log('this is the i out of the for loop', i);


// while(condition){  T  --  F
 // code block 
//}
// for(var i = 10; i >10; i--){
//     console.log(i)
// }

// // the main difference between for and while the structure 
// // of each loop and the second is when i dont know how many time
// // im going to loop
// while(condition){

//     // code block
// }


// we need to ask the user to choose 
// if he wants dounts or cookies 
// cake 


// we want the user only be able to pick one of these(dounts, cookies);
// i want to strict the user to enter one of these 
// if the user ordered an thing else than dounts or cookies 
// we want to keep asking him the question
// falafel
// cookies
// while(!(userOrder =='dounts' || userOrder =='cookies')){
//             // F                      // T
//                             // T
//                             // !T - > False
//     userOrder = prompt('please enter the correct item')
// }

// falfel , shawerma , homs , mansaf
var userOrder = prompt('what would you like to order dounts or cookies','place your order');
while(userOrder !=='dounts' && userOrder !=='cookies'){
        // T               &&        T
                            //T
    userOrder = prompt('please enter the correct item')

}
// falafel
// cookies
// console.log(userOrder);

// i want to ask the user how many cookies or dounts he wants 
// and based on the number i will provide them with an images
// cookies
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





