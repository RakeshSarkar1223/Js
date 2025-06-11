const a = 3;
const b = 5;

const add = (a, b) => {
    return a + b;
}

document.writeln(add(3,4));

function concatination(a, b){
    return a.concat(b);
}

document.writeln(concatination("hello", " world"));

function vowels(a){
    let count = 0;
    let arr = a.split('');

    for(let i = 0; i < arr.length; i++){
        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
            count++;
        }
    }
    document.writeln(count);
}

vowels("Prerana");

const arr = [1,2,3,4,5];

// arr.forEach(function print(value){
//     console.log(value);
// })


arr.forEach((val) => {
    console.log(val);
})

const msg = () => {
    alert("Hello");
}

const square = () => {
    const num = document.getElementById('inputN').value;
    alert(num * num);
}