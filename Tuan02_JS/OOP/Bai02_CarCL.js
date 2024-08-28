
class CarCL {
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

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const car1 = new CarCL('Ford', 120);

car1.accelerate();
car1.brake();    

console.log(`${car1.make} hiện đang chạy với tốc độ ${car1.speedUS} mi/h`); 

car1.speedUS = 50; 
console.log(`${car1.make} hiện đang chạy với tốc độ ${car1.speed} km/h`); 
