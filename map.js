// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array finally returns you the array

const numbers = [22, 4, 55, 10, 30];




const outPut = numbers.map(num => num * 3);
console.log(outPut);



// const doubled = num => num * 2;
// const outPut = numbers.map(doubled);
// console.log(outPut);





// function doubledIt(num){
//     return num * 2;
// }
// const result = numbers.map(doubledIt);
// console.log(result);



// const doubled = [];
// for(let num of numbers){
//     num = num * 2;
//     doubled.push(num);
// }
// console.log(doubled);