function sum(a, b) {
    return a+b;
}

console.log(sum(10, 10)); // 20

function product(a, b) {
    return a*b;
}

function division(a, b) {
     a/b;
}

console.log(product(12, 12));

const bigProduct = product(5353, 134534);
console.log(bigProduct);

console.log(division);

//anonymous function
setTimeout(function () {
    console.log("Hey! You rock!!!");
}, 1000);

//arrow function
setTimeout(() => console.log("Hey! You rock!!!"), 1000);