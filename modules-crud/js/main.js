import { createCar, deleteCar, getCars, driveCar } from "./car.service.js";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  document
    .getElementById("createCarForm")
    .addEventListener("submit", onCreateCar);

  renderCarList();

  window.onDeleteCar = onDeleteCar;
  window.onDriveCar = onDriveCar;
}

function onCreateCar(ev) {
  ev.preventDefault();
  const modelInput = document.getElementById("inputModel");
  const yearInput = document.getElementById("inputYear");
  const kmInput = document.getElementById("inputKm");
  const handsInput = document.getElementById("inputHands");

  if (
    !modelInput.value ||
    !yearInput.value ||
    !kmInput.value ||
    !handsInput.value
  ) {
    alert("invalide fields");
    return;
  }

  const carFields = {
    model: modelInput.value,
    year: yearInput.value,
    km: kmInput.value,
    hands: handsInput.value,
  };

  createCar(carFields);
  renderCarList();
}

function onDeleteCar(id) {
  deleteCar(id);
  renderCarList();

  // optional:
  // document.getElementById(`carItem_${id}`).remove();
}

function onDriveCar(id) {
  driveCar(id);
  renderCarList();
}

function renderCarList() {
  const list = document.getElementById("carList");
  const cars = getCars();

  list.innerHTML = "";

  list.innerHTML = cars
    .map(function (car) {
      return ` 
            <li id="carItem_${car.id}"class="car-item">
              <h4>model: ${car.model}</h4>
              <p>year: ${car.year}</p>
              <p>KM: ${car.km}</p>
              <p>hand: ${car.hand}</p>
              <p>gas: ${car.gas}</p>
              <div class="car-actions">
                <button onclick="onDriveCar('${car.id}')" class="btn btn-primary">Drive</button>
                <button onclick="onDeleteCar('${car.id}')" class="btn btn-danger">Delete</button>
              </div>
            </li>
            `;
    })
    .join("");
}
