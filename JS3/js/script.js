// for(let i = 0; i <= 10; i++){
//     document.writeln("The number is ", i , "<br>");
// }

// document.writeln("Loop finished")

// const profile = {
//     followers : 100,
//     following : 45,
//     post : 32
// };

// for(var i in profile){
//     document.writeln(i," = ",profile[i],"<br>" );
// }

// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// let fixedNumber = 25;
// let userInput = prompt("Enter a random number from 1 to 100 : ");

// while(userInput != fixedNumber){
//     userInput = prompt("Enter a random number from 1 to 100 : ");
// }

// document.writeln("Congratulations you entered the right Number!!");


let first = "@";
let userName = prompt("Please enter your fullname without any space");
let length = userName.length;


let userID = first.concat(userName.concat(length));

document.writeln("Your user name is ", userID);