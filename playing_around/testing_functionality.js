class Cars {
  constructor(
    brand,
    model,
    engine,
    turnOn,
    basePrice,
    discount,
    mileage,
    carColor = "black"
  ) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.turnOn = turnOn;
    this.basePrice = basePrice;
    this.discount = discount;
    this.mileage = mileage;
    this.color = carColor;

    this.baseColors = ["black", "red", "blue", "grey", "white", "special blue"];

    if (this.mileage > 0 && this.mileage < 20000) {
      this.mileageDiscount = 10;
    } else if (this.mileage >= 20000 && this.mileage < 50000) {
      this.mileageDiscount = 15;
    } else if (this.mileage >= 50000 && this.mileage < 100000) {
      this.mileageDiscount = 20;
    } else if (this.mileage >= 100000 && this.mileage < 400000) {
      this.mileageDiscount = 30;
    } else if (this.mileage >= 400000) {
      this.mileageDiscount = 50;
    }
  }

  getEngineTurnOn() {
    const engineOn = alert(this.turnOn);
    return engineOn;
  }

  getPrice() {
    if (this.engine === "electric") {
      const electricPrice = this.basePrice + 10000;
      return electricPrice;
    } else if (this.engine === "diesel") {
      const dieselPrice = this.basePrice + 5000;
      return dieselPrice;
    } else if (this.engine === "petrol") {
      const petrolPrice = this.basePrice;
      return petrolPrice;
    } else {
      return `At this moment, we don't have any ${this.engine} engines.`;
    }
  }

  getDiscount() {
    const yourDiscount = this.getPrice() * ((100 - this.discount) / 100);
    return yourDiscount;
  }

  getDiscountByMileage() {
    if (this.mileage > 0 && this.mileage < 20000) {
      const discountAfterMileage =
        this.getDiscount() * ((100 - this.mileageDiscount) / 100);
      return Math.floor(discountAfterMileage);
    } else if (this.mileage >= 20000 && this.mileage < 50000) {
      const discountAfterMileage =
        this.getDiscount() * ((100 - this.mileageDiscount) / 100);
      return Math.floor(discountAfterMileage);
    } else if (this.mileage >= 50000 && this.mileage < 100000) {
      const discountAfterMileage =
        this.getDiscount() * ((100 - this.mileageDiscount) / 100);
      return Math.floor(discountAfterMileage);
    } else if (this.mileage >= 100000 && this.mileage < 400000) {
      const discountAfterMileage =
        this.getDiscount() * ((100 - this.mileageDiscount) / 100);
      return Math.floor(discountAfterMileage);
    } else if (this.mileage >= 400000) {
      const discountAfterMileage =
        this.getDiscount() * ((100 - this.mileageDiscount) / 100);
      return Math.floor(discountAfterMileage);
    }
  }

  getPriceByColor() {
    for (let i = 0; i < this.baseColors.length; i++) {
      if (this.baseColors[i] === this.color) {
        return this.getDiscountByMileage();
      }

      if (this.baseColors[5] === this.color) {
        return this.getDiscountByMileage() + 500;
      }
    }

    return this.getDiscountByMileage() + 3000;
  }
}

const carModel1 = new Cars(
  "Skoda",
  "Octavia",
  "electric",
  "vroom",
  18500,
  10,
  24200
);

const carModel2 = new Cars(
  "Skoda",
  "Fabia",
  "diesel",
  "vroom",
  16800,
  8,
  125400,
  "white"
);

const carModel3 = new Cars(
  "Skoda",
  "Superb",
  "petrol",
  "vroom",
  23200,
  12,
  53400,
  "green"
);

const carModel4 = new Cars(
  "Skoda",
  "Rapid",
  "diesel",
  "vroom",
  13200,
  5,
  413420,
  "special blue"
);

function renderElement(data) {
  // MAIN CONTAINER
  const carElement = document.createElement("div");
  carElement.classList.add("car-container");

  // IMAGES-BOX
  const carImageElement = document.createElement("div");
  carImageElement.classList.add("car-image-card");
  carElement.append(carImageElement);

  const imageElement = document.createElement("img");
  imageElement.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Skoda_Octavia_IV_liftback_%28cropped%29.jpg/800px-Skoda_Octavia_IV_liftback_%28cropped%29.jpg";
  imageElement.classList.add("image");
  carImageElement.append(imageElement);

  // DESCRIPTION-BOX
  const carDescriptionElement = document.createElement("div");
  carDescriptionElement.classList.add("car-description-card");
  carElement.append(carDescriptionElement);

  const brandElement = document.createElement("h2");
  brandElement.classList.add("car-brand");
  brandElement.textContent = `${data.brand}`;
  carDescriptionElement.append(brandElement);

  const modelElement = document.createElement("h3");
  modelElement.classList.add("car-model");
  modelElement.textContent = `${data.model}`;
  carDescriptionElement.append(modelElement);

  const engineTypeElement = document.createElement("h4");
  engineTypeElement.classList.add("engine-type");
  engineTypeElement.textContent = `${data.engine} engine`;
  carDescriptionElement.append(engineTypeElement);

  const mileageElement = document.createElement("h4");
  mileageElement.classList.add("mileage-text");
  mileageElement.textContent = `${data.mileage} miles`;
  carDescriptionElement.append(mileageElement);

  const colorElement = document.createElement("h4");
  colorElement.classList.add("color");
  colorElement.textContent = `${data.color} color`;
  carDescriptionElement.append(colorElement);

  const basePriceElement = document.createElement("h4");
  basePriceElement.classList.add("base-price");
  basePriceElement.textContent = `The base price starts at  ${data.getPrice()}`;
  carDescriptionElement.append(basePriceElement);

  return carElement;
}

const image2Element = document.getElementsByClassName("div.car-container");
const image3Element = document.querySelector("car-container");
console.dir(document);
console.log(image3Element);

// const child = content.item(1);
// console.log(child);

const contentElement = document.querySelector("#content");

const carModel1Element = renderElement(carModel1);
const carModel2Element = renderElement(carModel2);
const carModel3Element = renderElement(carModel3);
const carModel4Element = renderElement(carModel4);

contentElement.append(
  carModel1Element,
  carModel2Element,
  carModel3Element,
  carModel4Element
);
