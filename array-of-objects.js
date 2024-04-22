const products = [
    { id: 1, name: 'hp', price: 12000 },
    { id: 2, name: 'Dell', price: 14000 },
    { id: 3, name: 'Lenovo', price: 18000 },
];

//-----> map
const names = products.map(product => product.name);
// console.log(names);


const prices = products.map(product => product.price);
// console.log(prices);


//---->forEach
// products.forEach(element => console.log(element.name));


//---->filter
const expensive = products.filter(product => product.price > 12000);
// console.log(expensive);



// ----->find
const findFirstExpensive = products.find(product => product.price > 12000);
// console.log(findFirstExpensive);



//------>reduce 
const sumOfTotal = products.reduce((p, c) => p + c.price, 0);
console.log(sumOfTotal);