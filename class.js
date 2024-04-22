// ------------>class has some properties, and method

class Product{
    country = "Bangladesh";
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    speak(talk){
        console.log(`talking about ${talk};`);
    }
}


// const lenovo = new Product('anik', 'javaScript');
// console.log(lenovo);
// lenovo.speak('wow')



class Teacher{

    constructor(name, subject){
        this.name = name;
        this.subject = subject
    }
    lecture(time){
        // console.log(`sir is teaching ${this.subject}`); 
        console.log(`sir is teaching ${time}`); 
    }
}

const topon = new Teacher('topon', 'English');
topon.lecture('3.30');