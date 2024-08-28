
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} hiện đang chạy với tốc độ ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} hiện đang chạy với tốc độ ${this.speed} km/h`);
    }
}

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge; 
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`${this.make} đã được sạc đến ${this.charge}%`);
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} hiện đang chạy với tốc độ ${this.speed} km/h, với mức pin là ${this.charge}%`);
    }
}

const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
