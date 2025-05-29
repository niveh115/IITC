import { makeId } from "./utils.js";

let cars = [];

export function createCar(fields) {
  const carToAdd = { ...fields, gas: 100, id: makeId() };
  cars.push(carToAdd);
}

export function getCars() {
  return cars;
}

export function driveCar(id) {
  cars.forEach(function (car) {
    if (car.id === id) {
      car.gas -= 20;
      car.km++;
    }
  });
}

export function deleteCar(id) {
  cars = cars.filter(function (car) {
    return car.id !== id;
  });
}
