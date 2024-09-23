let cars = [];
let id = 0;

function createCar() {
    const model = prompt("Digite o modelo do carro:");
    const brand = prompt("Digite a marca do carro:");
    const year = prompt("Digite o ano do carro:");
    const color = prompt("Digite a cor do carro:");
    const price = prompt("Digite o preço do carro:");

    const car = { id: id++, model, brand, year, color, price };
    cars.push(car);
    alert("Carro cadastrado com sucesso!");
    displayCars();
}

function readCars() {
    displayCars();
}

function updateCar() {
    const carId = prompt("Digite o ID do carro que deseja atualizar:");
    const car = cars.find(c => c.id == carId);

    if (car) {
        car.color = prompt("Digite a nova cor do carro:", car.color);
        car.price = prompt("Digite o novo preço do carro:", car.price);
        alert("Carro atualizado com sucesso!");
        displayCars();
    } else {
        alert("Carro não encontrado!");
    }
}

function displayCars() {
    const carList = document.getElementById("carList");
    carList.innerHTML = "";
    cars.forEach(car => {
        const li = document.createElement("li");
        li.textContent = `ID: ${car.id} | Modelo: ${car.model} | Marca: ${car.brand} | Ano: ${car.year} | Cor: ${car.color} | Preço: ${car.price}`;
        carList.appendChild(li);
    });
}
function updateCar() {
    const carId = prompt("Digite o ID do carro que deseja atualizar:");
    const car = cars.find(c => c.id == carId);

    if (car) {
        car.color = prompt("Digite a nova cor do carro:", car.color);
        car.price = prompt("Digite o novo preço do carro:", car.price);
        alert("Carro atualizado com sucesso!");
        displayCars();
    } else {
        alert("Carro não encontrado!");
    }
}
function searchCar() {
    const model = prompt("Digite a marca do carro que deseja buscar:");
    const filteredCars = cars.filter(car => car.brand.toLowerCase().includes(brand.toLowerCase()));
    const carList = document.getElementById("carList");
    carList.innerHTML = "";
    filteredCars.forEach(car => {
        const li = document.createElement("li");
        li.textContent = `ID: ${car.id} | Modelo: ${car.model} | Marca: ${car.brand} | Ano: ${car.year} | Cor: ${car.color} | Preço: ${car.price}`;
        carList.appendChild(li);
    });
}