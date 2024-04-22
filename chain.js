// data access

const data = [
    {
        id : 1,
        name : 'anik',
        address : 'dhaka'
    }
];

// console.log(data[0].address);

const products = {
    count : 5000,
    data : [
        {id : 1, name : 'Hp', price : 12000},
        {id : 2, name : 'Dell', price : 10000},

    ]
}

// console.log(products.data[1].price);


const user = {
    id : 50001,
    name : 'Shoriful Raj',
    address : {
        street : {
            first : '54/2 mirpur',
            second : "Nawabgonj"
        },
        city : 'dhaka'
    }
}

const user2 = {
    id : 5002,
    name : 'sakib',
    address : {
        city : 'chittagong',
        country : 'Bangladesh'
    }
}

console.log(user.address?.street?.second);
console.log(user2.address?.street?.second);