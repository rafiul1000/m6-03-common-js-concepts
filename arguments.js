function sum(a, b, c){          //(a, b, c) ==>> parameters.
    // console.log(typeof arguments);     // arguments ==>> array like object.
    const result = a + b + c;
    const args = [...arguments];
    // console.log(args);
    return result;
}

const total = sum(45, 89, 16, 45, 98, 56);     // (45, 89, 16) ==>> arguments.
// console.log(total);
console.log(sum.length);