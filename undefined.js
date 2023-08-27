/* 
 There are 8 (eight) ways to get Undefine

 1. variable that is not initialized will give undefined
 2. function with no return
 3. parameter that is not passed will be undefined
 4. if return has nothing on the right side will return undefined
 5. property that does not exists on an object will give you undefined
 6. accessing array elements outside of the index range will give you undefined
 7. deleting an element inside an array
 8. set a value directly to undefined

*/


// 1:
// const a;

// 2:
let first ;
// console.log(first);

// 3:
function second(a, b){
    const total = a + b;
}
// const result = second();
// console.log(result);

// 4:
function third(a, b, c, d){
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}
third(2, 5);


// 4-2:
function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}
// const total = noNegative(2,-5);
const total = noNegative(2, 5);
// console.log(total)

// 5:
const fifth = {id: 5, name: 'ponchom', age: 21};
// console.log(fifth.age, fifth.salary);

// 6:
const sixth = [2, 3, 4, 5, 6];
// console.log(sixth[1], sixth[5], sixth[100]);

// 7:
const seventh = [2, 3, 4, 5, 6];

// you should not do it. Instead use splice
delete seventh[1];
// console.log(seventh);

// 8:
const eighth = undefined;

// 9:
const ninth = null;
const data = {results: [], updated: null};
// console.log(typeof undefined);

// ==========================================
// console.log(typeof null);

const a = null;
// console.log(typeof a);
// ==========================================