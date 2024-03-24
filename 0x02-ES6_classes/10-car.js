export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;

    }
    cloneCar() {
        const current = this;
        return Object.assign(object.create(object.getPrototype(current)), {
            _brand: undefined,
            _motor: undefined,
            _color: undefined,
        });
    }
}