/*
1. var, let, const
2. default parameter
3. template string
4. arrow function 
5. destructuring and spread operater
6. Object.keys, Object.values, Object.entries
7. for of used in array and string
8. for in loop use in object

*/ 



const a = 56;
const number = [55, 64, 10];
const person = {
    name : "anik"
}
const result = `Hi, ${person.name} has a: ${a} access to ${number[0]}`;
// console.log(result);



const square = x => x * x;
const pI = () => Math.PI;
const sum = (a, b) => a + b;



const student = {
    name : 'anik',
    job : 'study',
    age : 24,
    roll : 55
};
const {name, age, ...others} = student;



const [first, sonde, ...rest] = ['ram', 'sam', 'jodu', 'modhu'];

console.log(rest);