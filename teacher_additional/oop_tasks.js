"use strict";

// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.
// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPrice priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.
// 3. Pridėti funkciją 'getDiscount', kuri, kaip argumentą, priima nuolaidos dydį ir grąžina kainą su nuolaida.
// 4. Pridėti property 'mileage' ir papildoti automobilių objektus pridedant jų ridą.
// 5. Pakoreguoti kainų funkcijas:
//        5.1. Jeigu rida daugiau nei 0, tai kaina sumažėja 10%.
//        5.2. Jeigu rida daugiau nei 20000, tai kaina sumažėja 15%.
//        5.3. Jeigu rida daugiau nei 50000, tai kaina sumažėja 20%.
//        5.4. Jeigu rida daugiau nei 100000, tai kaina sumažėja 30%.
//        5.5. Jeigu rida daugiau nei 400000, tai kaina sumažėja 50%.

// 6. Pridėti property 'baseColors'. Tai bus masyvas su bazinėmis spalvomis (juoda, raudona, mėlyna, sidabrinė, balta, 'special blue'). Jų pakeisti negalima, nes yra sukuriamos tiesiogiai klasės constructor funkcijoje.
//        6.1. Pridėti property 'color', kuria galima papildyti kuriant automobilio objektą pagal klasę. Jeigu kuriant objektą, spalva nėra nurodoma, tai pagal nutylėjimą ji bus juoda.
//        6.2. Jeigu nurodyta spalva yra 'special blue', tai automobilio kaina turi padidėti 500.
//        6.3. Jeigu nurodytos spalvos nėra tarp bazinių spalvų, tai automobilio kaina turėtų padidėti 3000.

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

  renderElement() {
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

    const image2Element = document.querySelectorAll("img");
    const child = image2Element[0];

    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/%C5%A0koda_Fabia_IV_1X7A7110_%28cropped%29.jpg/1920px-%C5%A0koda_Fabia_IV_1X7A7110_%28cropped%29.jpg";
    // const image2Element = document.createElement("img");
    // image2Element.src =
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/%C5%A0koda_Fabia_IV_1X7A7110_%28cropped%29.jpg/1920px-%C5%A0koda_Fabia_IV_1X7A7110_%28cropped%29.jpg";
    // image2Element.classList.add("image");
    // carImageElement.append(image2Element);

    // DESCRIPTION-BOX
    const carDescriptionElement = document.createElement("div");
    carDescriptionElement.classList.add("car-description-card");
    carElement.append(carDescriptionElement);

    const brandElement = document.createElement("h2");
    brandElement.classList.add("car-brand");
    brandElement.textContent = `${this.brand}`;
    carDescriptionElement.append(brandElement);

    const modelElement = document.createElement("h3");
    modelElement.classList.add("car-model");
    modelElement.textContent = `${this.model}`;
    carDescriptionElement.append(modelElement);

    const engineTypeElement = document.createElement("h4");
    engineTypeElement.classList.add("engine-type");
    engineTypeElement.textContent = `${this.engine} engine`;
    carDescriptionElement.append(engineTypeElement);

    const mileageElement = document.createElement("h4");
    mileageElement.classList.add("mileage-text");
    mileageElement.textContent = `${this.mileage} miles`;
    carDescriptionElement.append(mileageElement);

    const colorElement = document.createElement("h4");
    colorElement.classList.add("color");
    colorElement.textContent = `${this.color} color`;
    carDescriptionElement.append(colorElement);

    const basePriceElement = document.createElement("h4");
    basePriceElement.classList.add("base-price");
    basePriceElement.textContent = `The base price starts at  ${this.getPrice()}`;
    carDescriptionElement.append(basePriceElement);

    return carElement;
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
console.log(carModel1);
console.log(
  `The car model you picked is ${carModel1.model} No. 1 __________________________________`
);
console.log(`The price is determined by the engine: ${carModel1.getPrice()}`);
console.log(
  `Price has been reduced by a personal discount (${
    carModel1.discount
  }%): ${carModel1.getDiscount()}`
);
console.log(
  `Price has been reduced by a mileage (${carModel1.mileage} miles) discount (${
    carModel1.mileageDiscount
  }%): ${carModel1.getDiscountByMileage()}`
);
console.log(
  `The final price is (color - ${
    carModel1.color
  })  = ${carModel1.getPriceByColor()} $`
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
console.log(carModel2);
console.log(
  `The car model you picked is ${carModel2.model} No. 2 __________________________________`
);
console.log(
  `The car you picked is ${
    carModel2.model
  }. The price is determined by the engine: ${carModel2.getPrice()}`
);
console.log(
  `Price has been reduced by a personal discount (${
    carModel2.discount
  }%): ${carModel2.getDiscount()}`
);
console.log(
  `Price has been reduced by a mileage (${carModel2.mileage} miles) discount (${
    carModel2.mileageDiscount
  }%): ${carModel2.getDiscountByMileage()}`
);
console.log(
  `The final price is (color - ${
    carModel2.color
  })  = ${carModel2.getPriceByColor()} $`
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
console.log(carModel3);
console.log(
  `The car model you picked is ${carModel3.model} No. 3 __________________________________`
);
console.log(`The price is determined by the engine: ${carModel3.getPrice()}`);
console.log(
  `Price has been reduced by a personal discount (${
    carModel3.discount
  }%): ${carModel3.getDiscount()}`
);
console.log(
  `Price has been reduced by a mileage (${carModel3.mileage} miles) discount (${
    carModel3.mileageDiscount
  }%): ${carModel3.getDiscountByMileage()}`
);
console.log(
  `The final price is (color - ${
    carModel3.color
  })  = ${carModel3.getPriceByColor()} $`
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
console.log(carModel4);
console.log(
  `The car model you picked is ${carModel4.model} No. 4 __________________________________`
);
console.log(
  `The car you picked is ${
    carModel4.model
  }. Price is determined by the engine: ${carModel4.getPrice()}`
);
console.log(
  `Price has been reduced by a personal discount (${
    carModel4.discount
  }%): ${carModel4.getDiscount()}`
);
console.log(
  `The car you picked is ${
    carModel4.model
  }. This price has been reduced by a mileage (${
    carModel4.mileage
  } miles) discount (${
    carModel4.mileageDiscount
  }%): ${carModel4.getDiscountByMileage()}`
);
console.log(
  `The final price is (color - ${
    carModel4.color
  })  = ${carModel4.getPriceByColor()} $`
);

// console.log(carModel1.getEngineTurnOn());

// 7. Sukurti metodą 'renderElement', kuris sukurią html elementą, jame atvaizduoja automobilio informaciją (modelį, brandą, variklio tipą, kilometražą, spalvą, bazinę kainą) ir šį elementą išveda į ekraną.
//        7.1. Pridėti property 'image' (nuotraukos nuoroda), kuris turėtų būti nuotrauka ir šią nuotrauką, taip pat, pridėti į formuluojamą elementą.

const contentElement = document.querySelector("#content");

const carModel1Element = carModel1.renderElement();
const carModel2Element = carModel2.renderElement();
const carModel3Element = carModel3.renderElement();
const carModel4Element = carModel4.renderElement();
contentElement.append(carModel1Element, carModel2Element, carModel3Element);
contentElement.append(carModel4Element);
