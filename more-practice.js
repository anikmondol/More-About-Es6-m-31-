// const numbers = [1, 3, 5, 7, 9];

// const evenNumber = [];
// for(let num of numbers){
//     num +=  1;
//     evenNumber.push(num)
// }
// // console.log(evenNumber);


// const evenNumber = numbers.map(num => num + 1);
// console.log(evenNumber);

// ------------------------------------


// const numbers = [33, 50, 79, 78, 90, 101, 30];

// const intNumber = numbers.filter(num => num % 10 === 0);
// console.log(intNumber);

// const firstIntNumber = numbers.find(num => num % 10 === 0);
// console.log(firstIntNumber);


// ----------------------------------

// const instructor = [
//     {name : 'nodi', age:28, position: 'senior'},
//     {name : 'akil', age:26, position: 'junior'},
//     {name : 'shobuj', age:21, position: 'senior'},
// ]

// const allSenior = instructor.filter(element => {
//     if(element.position === 'senior'){
//         console.log(element.name);
//     }
// })

// console.log(allSenior);


// ----------------------

// const peoples = [
//     {name : 'a', age : 20},
//     {name : 'b', age : 15},
//     {name : 'c', age : 22},
// ];



// let sum = 0;
// for(const people of peoples){
//    sum += people.age;
// }
// console.log(sum);



// const sumOfAge = peoples.reduce((p, c) => p + c.age, 0);
// console.log(sumOfAge);

// ----------------------

// function min(num){
//     return Math.min(num)
// }

// console.log(min([1, 2, 3]));


// -------------------

// const [a, b] = [1, 2, 3];
// console.log(a + b);

// ------------------------

// const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y);


// ------------------------------

// const num = [1, 2, 3, 4, 5];
// let outPut = num.filter(n => n % 2);
// console.log(outPut);

// ------------------------

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

console.log(product.price);