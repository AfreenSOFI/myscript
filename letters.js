// let string = "hi there"
// document.write(string[3]);
// document.write(string.length);

// let string = prompt("Enter your string");
// let count = 0;

// for (let i = 0; i < string.length; i++) {
//     if (string[i] != " ") {
//         count = count + 1;
//     }else{
//     count = count;
// }
// }

// document.write(count);

// more efficient code

let string = prompt("Enter your string");
let count = 0;

for (let i = 0; i < string.length; i++) {
    if (/^[a-zA-Z]$/.test(string[i])) {
        count = count + 1;
    }
}

document.write(count);