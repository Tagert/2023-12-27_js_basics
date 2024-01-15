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

// class Cars {
//   constructor(carColor) {
//     this.baseColors = ['juoda', 'raudona', 'mėlyna', 'sidabrinė', 'balta', 'special blue']
//     this.color = carColor
//   }
// }

class Cars {
  constructor(
    brand,
    model,
    engine,
    turnOn,
    basePrice,
    discount,
    mileage,
    carColor
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
      const discountAfterMileage = this.getDiscount() * ((100 - 10) / 100);
      return Math.floor(discountAfterMileage);
    } else if (this.mileage >= 20000 && this.mileage < 50000) {
      const discountAfterMileage = this.getDiscount() * ((100 - 15) / 100);
      return Math.floor(discountAfterMileage);
    } else if (this.mileage >= 50000 && this.mileage < 100000) {
      const discountAfterMileage = this.getDiscount() * ((100 - 20) / 100);
      return Math.floor(discountAfterMileage);
    } else if (this.mileage >= 100000 && this.mileage < 400000) {
      const discountAfterMileage = this.getDiscount() * ((100 - 30) / 100);
      return Math.floor(discountAfterMileage);
    } else if (this.mileage >= 400000) {
      const discountAfterMileage = this.getDiscount() * ((100 - 50) / 100);
      return Math.floor(discountAfterMileage);
    }
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
console.log(
  `The car model you picked is ${carModel1.model} No. 1 __________________________________`
);
console.log(
  `The car you picked is ${
    carModel1.model
  }. The price is determined by the engine: ${carModel1.getPrice()}`
);
console.log(
  `Price has been reduced by a personal discount (${
    carModel1.discount
  }%): ${carModel1.getDiscount()}`
);
console.log(
  `Price has been reduced by a mileage discount: ${carModel1.getDiscountByMileage()}`
);

const carModel2 = new Cars(
  "Skoda",
  "Fabia",
  "diesel",
  "vroom",
  16800,
  8,
  125400
);
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
  `Price has been reduced by a mileage discount: ${carModel2.getDiscountByMileage()}`
);

const carModel3 = new Cars(
  "Skoda",
  "Superb",
  "petrol",
  "vroom",
  23200,
  12,
  53400
);
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
  `Price has been reduced by a mileage discount: ${carModel3.getDiscountByMileage()}`
);

const carModel4 = new Cars(
  "Skoda",
  "Rapid",
  "diesel",
  "vroom",
  13200,
  5,
  413420
);
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
  }. This price has been reduced by a mileage discount: ${carModel4.getDiscountByMileage()}`
);

console.log(carModel1, carModel2);
// console.log(carModel1.getEngineTurnOn());
