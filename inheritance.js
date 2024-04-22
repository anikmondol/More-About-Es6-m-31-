class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price =price;
    }
    move(){
        console.log(`gari chole na chole na chole na re`);
    }
}


// const newVehicle = new Vehicle('a', 2000);
// newVehicle.move()
// console.log(newVehicle);

class Bus extends Vehicle{
    constructor(name, price, ticketPrice, seat){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    road(){
        console.log(`going Dhaka to chittagong`);
    }
}


const newBus = new Bus('ena', 1000, 40, 70);
newBus.road()
console.log(newBus);


class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}


const newTruck = new Truck('eko', 80000, 7);
console.log(newTruck);

