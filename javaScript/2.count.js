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


console.log(`------------------------`);


// Count odd numbers
let a_count = 0;
let b = 1;
while (b <= 46) {
    if (b % 2 !== 0) {
        a_count++;
    }
    b++;
}
console.log("Total ODD number :", a_count);


console.log(`-----------------------`);


// Count numbers > 10
let n_count = 0;
for (let n = 1; n <= 20; n++) {
    if (n > 10) {
        n_count++;
    }
}
console.log("Total 10 of big number :", n_count);


console.log(`------------------------`);



// Count numbers divisible by 5
let f_count = 0;
for (let f = 1; f <= 50; f++) {
    if (f % 5 === 0) {
        f_count++;
    }
}
console.log("Total number of divisible 5 :", f_count);


console.log(`------------------------`);



// Count vowels in "hello"
let str = "hello";
let vowels = 0;
for (let val of str) {
    // console.log(val)
    if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
        vowels++;
    }
}
console.log("Total vowel is :", vowels);


console.log(`------------------------`);


// Count spaces
let fullName = " ka mal ud di ";
let spaces = 0;
for (let s of fullName) {
    if (s === " ") {
        spaces++;
    }
}
console.log("Total spaces :", spaces);


console.log(`------------------------`);


// Count characters  (২০টা পর্যন্ত)
let name = "kamaluddin apnacollege programming hero";
let charCount = 0;
for (let ch of name) {
    if (charCount < 20) {
        charCount++
    }
}

console.log(charCount);