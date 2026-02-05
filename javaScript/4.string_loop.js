

// Print each character
let name = 'kamaluddin';
for (let i of name) {
    console.log(i);
}

// Find length
let names = "apnacollege";
console.log(names.length);
let count = 0
for (let i = 0; i < names.length; i++) {
    count++
}
console.log("total length :", count);



// Count consonants
let str = "i love javaScript apnacollege";
let consonants = 0;
for (let i of str.toLowerCase()) {
    if (i >= "a" && i <= "z" && (i !== "a" && i !== "e" && i !== "i" && i !== "o" && i !== "u"))
        consonants++;
}

console.log("Total consonants :", consonants);


// Reverse string
let fullName = "kamaluddin";
let newName = "";
for (let i of fullName) {
    newName = i + newName;
}
console.log(newName);


// Replace space (১৫–২০টা)
let fullNames = " kam alu ddin ";
console.log(fullNames.trim());

console.log(fullNames.split(" ").join(""));