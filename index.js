class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayInfo(){
        return `This ${this.make} is a ${ this.model} from the year ${this.year}`
    }
}

const myCar = new Car( 'Tesla', 'S', '2019', '300');
console.log(myCar)
console.log (myCar.displayInfo())


//subsclasss 
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year) 
        this.range = range;
    }
    displayInfo(){
        return `${super.displayInfo()} with a range of ${this.range} `
    }
}

const ElectricCarModel = new ElectricCar ('Tesla', 'Model S','2019', '300');
console.log(ElectricCarModel)
console.log(ElectricCarModel.displayInfo())

