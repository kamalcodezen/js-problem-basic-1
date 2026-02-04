// Count numbers 1–10
let count = 0;
for (let i = 1; i <= 10; i++) {
    count++;
}
console.log("Total number :", count);


console.log(`---------------------`);


// Count even numbers
let j_count = 0;
for (let j = 1; j <= 30; j++) {
    if (j % 2 === 0) {
        j_count++;
    }
}
console.log("Total even number :", j_count);


// Count odd numbers
let a_count = 0;
let b = 1;
while (b <= 46) {
    b++;
    if (b % 2 !== 0) {
        a_count++;
    }
}
console.log("Total ODD number :", a_count);


console.log(`-----------------------`);


// Count numbers > 10
let n_count = 0;
for (let n = 1; n <= 20; n++) {
    if (n >= 10) {
        n_count++;
    }
}
console.log("Total 10 of big number :", n_count);


// Count numbers divisible by 5
let f_count = 0;
for (let f = 1; f <= 50; f++) {
    if (f % 5 === 0) {
        f_count++;
    }
}
console.log("Total number of divisible 5 :", f_count);