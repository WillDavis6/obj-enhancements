class Vehicle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        return `the vehicle is a ${this.a} ${this.b} from ${this.c}.`;
    }
}

class Car extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 4;
    }
    
}

class MotorCyle extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 2;
    }
    
    revEngine() {
        return 'VROOM!!!';
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "only vehicles";
        }
        if (this.vehicles.length >= this.capacity) {
            return "sorry, we're full";
        }
        this.vehicles.push(newVehicle);
        return "vehicle added!";
    }
}