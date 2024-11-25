// Car Constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding getMakeModel method to Car prototype
Car.prototype.getMakeModel = function () {
    return `${this.make} ${this.model}`;
};

// SportsCar Constructor
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

// DOM Elements
const makeInput = document.getElementById('make');
const modelInput = document.getElementById('model');
const topSpeedInput = document.getElementById('topSpeed');
const outputDiv = document.getElementById('output');

// Event Listeners
document.getElementById('createCar').addEventListener('click', () => {
    const make = makeInput.value;
    const model = modelInput.value;

    if (make && model) {
        const car = new Car(make, model);
        outputDiv.innerHTML = `<p>Car Created: ${car.getMakeModel()}</p>`;
    } else {
        outputDiv.innerHTML = `<p>Please enter both make and model for the car.</p>`;
    }
});

document.getElementById('createSportsCar').addEventListener('click', () => {
    const make = makeInput.value;
    const model = modelInput.value;
    const topSpeed = topSpeedInput.value;

    if (make && model && topSpeed) {
        const sportsCar = new SportsCar(make, model, parseInt(topSpeed));
        outputDiv.innerHTML = `
            <p>SportsCar Created:</p>
            <p>${sportsCar.getMakeModel()}</p>
            <p>Top Speed: ${sportsCar.getTopSpeed()} mph</p>
        `;
    } else {
        outputDiv.innerHTML = `<p>Please enter make, model, and top speed for the sports car.</p>`;
    }
});
