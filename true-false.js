/* 
Truthy: 
1. true
2. any number (+ve, -ve) will be truthy other then or except zero (0);
3. any string(''). other then (' ')empty string.
4. '0', 'false'
5. {} (empty object)
6. [] (empty array)

Falsy: 
1. false
2. (0) zero
3. ('') empty string
4. undefined
5. null
*/


// const x = 0;
// const x = 'Rafiul'
// let x;
// let x = null
// let x = {}
// let x = {a: 5, b: 'amar'};
// let x = []
let x = [5, 'amar']
if(x){
    // console.log('value of x is truthy');
}
else{
    // console.log('value of x is falsy')
}

// optional
// check falsi
const y = '';
if(!y){
    // console.log('value is falsy');
}

const z = ' ';
// check true
if(!!x){
    // console.log('value is truthy');
}