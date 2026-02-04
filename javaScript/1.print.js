// print 1-5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log(`-------------------`);


// Print 1–10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log(`-------------------`);

// Print 5–1 decrement
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log(`-------------------`);


// Print 10–1
let n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}

console.log(`-------------------`);


// Print even 1–10
for (let j = 1; j <= 10; j++) {
    // console.log(j);
    if (j % 2 === 0) {
        console.log(j);
    }
}

console.log(`***************`);


let j = 2;
while (j <= 10) {
    console.log(j)
    j += 2;
}


console.log(`-------------------`);


// Print odd 1–20
for (let d = 1; d <= 20; d++) {
    if (d % 2 !== 0) {
        console.log(d);
    }
}


console.log(`================`);

// reverse way odd
let e = 20;
while (e >= 1) {
    e--;
    if (e % 2 !== 0) {
        console.log(e)
    }
}

console.log(`--------------------`);


// Print multiples of 3
for (let m = 3; m <= 50; m += 3) {
    console.log(m)
}


let c = 3;
while (c <= 30) {
    c++;
    if (c % 3 == 0) {
        console.log(c);
    }
}
console.log(`---------------------`);



// Print multiples of 5
for (let m = 5; m <= 30; m += 5) {
    console.log(m)
}

console.log(`------------------`);


// Print numbers > 10
for (let k = 1; k <= 30; k++) {
    if (k > 10) {
        console.log(k)
    }
}

// Print numbers < 50
for (let n = 1; n <= 50; n++) {
    console.log(n)

}