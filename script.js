//console.dir(String);


const user = {
    name: "Joe",
    age: 20
}

console.log(typeof user);

//ha egy key-nek a value-ját szeretnénk megtalálni, akkor így kell:
console.log(user.name);
console.log(user["name"]);

function createPizza(pizzaName, pizzaPrice) { //a beküldött értéket mindig a value veszi fel, nem a key
    return {
        name: pizzaName,
        price: pizzaPrice,
        details() { //ez ugyanaz mint: details: function () {}
            console.log(pizzaName, pizzaPrice);
            let newPrice = pizzaPrice * 2
            console.log(newPrice);
        }
    }
}

let pizza1 = createPizza("Hawaii", 1800)
console.log(pizza1);
console.log(createPizza("Magyaros", 2800));
pizza1.details();

const pizza = {
    name: "Hawaii",
    price: 1800,
    details() {
        console.log(this.name); //a this a pizza váltózóra utal
        console.log(this.price);
        console.log(pizza.name);
        console.log(pizza.price);
    }
}

//a this praktikus, ha mondjuk idő közben átírjuk a változó nevét, mert ha sok adat van akkor nem kell egyesével átírni


const pizzaObj = new Object()
pizzaObj.name = "Piedone"
console.log(pizzaObj.name);


class Pizza {
    constructor(name, price) {
        this.name = name; //mindenképp kell a this hogy tudja hogy mire hivatkozunk (this nélkül nem tudja eldönteni melyik a key és melyik a value)
        this.price = price;
    }
    details() {
        console.log(this.name);
        console.log(this.price);
    }
}

const pizzaLecso = new Pizza("Lecso", 3100)
console.log(pizzaLecso);
console.log(pizzaLecso.name);
console.log(pizzaLecso.price);

pizzaLecso.details()

// const pizzaHam = new Pizza("Ham", 1400)
// console.log(pizzaHam);
// console.log(pizzaHam.name);
// console.log(pizzaHam.price);
// pizzaHam.details()



//pizza.details()

let params = ["Kolbász", 1560]

let pizzaFromArray = new Pizza(...params)
console.log(pizzaFromArray);

let params1 = [...params, "raja :)"]
console.log(params1);

//2 array összevonása
let params2 = [...params, ...params1]
console.log(params2);