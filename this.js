class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}


const kodom = new Person('kodom', 22);
console.log(kodom);
kodom.sleep();

const badam = new Person('badam', 25);
console.log(badam);
badam.sleep();