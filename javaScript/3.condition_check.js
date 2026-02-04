
// Check even / odd
let nums = 21;

if (nums % 2 === 0) {
    console.log("even number");
} else {
    console.log("Odd number");
}


// Check even / odd
let nums1 = 0;
if (nums1 > 0) {
    console.log("This is positive number");
} else if (nums1 < 0) {
    console.log("This is negative number");
} else {
    console.log("This is zero")
}


// Check number > 100
let nums2 = 100;
if (nums2 > 100) {
    console.log("This is number more than 100");
} else {
    console.log("This is number less than or equal to 100");
}


// Check vowel
let name = "kamaluddin";
let vowel = 0;
for (let ch of name) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        vowel++;
    }
}
console.log("Total vowel :", vowel);


// Check string empty
let str = "";
if (str === "" || str.length === 0) {
    console.log("This string is empty");
} else {
    console.log("This string if full");
}


// Check array empty
const box = [];
if (Array.isArray(box) && box.length === 0) {
    console.log("array is empty");
} else {
    console.log("array if full");
}