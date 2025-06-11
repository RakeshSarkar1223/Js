// let marks = [2,3,7,4,5];
// document.writeln(marks[4]);

// let arr = [250,645,300,900,50];

// for(let i = 0;i < arr.length ; i++){
//     let offer = arr[i]*(0.1);
//     arr[i] = arr[i] - offer;
//     document.writeln(`price of items after offer is ${arr[i]} <br>`);
// }


// document.writeln("The final array ",arr);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log("companies are : ", companies);

companies.splice(0,1);

console.log(companies);

companies.splice(1,1,"Ola");

console.log(companies);

companies.splice(5,0,"Amazon");

console.log(companies);