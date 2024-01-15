"use strict";
console.groupCollapsed("Basic object");
// first method

// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
const company1 = {};
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1.name = "Feelit";
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2010;
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = "EU-5403";
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employees = 45;
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = "John Wolf";
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = false;
// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ["Germany", "Italy", "UK"];
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ["Programming", "Finance", "Marketing"];
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

company1.contacts = {};
company1.contacts.phone = "+3720142264";
company1.contacts.email = "companyemail@email.com";
company1.contacts.address = {};
company1.contacts.address.country = "Latvia";
company1.contacts.address.city = "Ryga";
company1.contacts.address.street = "Albert st.";
company1.contacts.address.apartment = 241;

console.log(company1);
// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
company1.companyAddress = function () {
  return `${company1.contacts.address.street} ${company1.contacts.address.apartment}, ${company1.contacts.address.city}, ${company1.contacts.address.country} `;
};

console.log(company1.companyAddress());
// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
company1.companyNvoTrue = function () {
  this.nvo = true;

  return this.nvo;
};

console.log(company1.companyNvoTrue());
//        6.2. Pakeičia NVO statusą į false.
company1.companyNvoFalse = function () {
  this.nvo = false;

  return this.nvo;
};

console.log(company1.companyNvoFalse());
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
company1.companyNvoSwitch = function () {
  this.nvo = !this.nvo;

  return this.nvo;
};

console.log(company1.companyNvoSwitch());
console.log(company1.companyNvoSwitch());
console.log(company1.companyNvoSwitch());
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
company1.workingLocationsString = function () {
  let output = `Working locations: ${this.workingLocations.join(", ")}`;

  return output;
};

console.log(company1.workingLocationsString());
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
company1.activityAreasString = function () {
  let output = `Working locations: ${this.activityAreas.join(", ")}`;

  return output;
};

console.log(company1.activityAreasString());
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
company1.addNewCountry = function (country) {
  this.workingLocations.push(country);
  return this.workingLocations;
};

console.log(company1.addNewCountry("Belarus"));
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
company1.addNewActivityAreas = function (activity) {
  this.activityAreas.push(activity);
  return this.activityAreas;
};

console.log(company1.addNewActivityAreas("Human resource"));
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
company1.removeCountry = function (countryToRemove) {
  let filteredCountries = this.workingLocations.filter(
    (country) => country !== countryToRemove
  );

  return filteredCountries;
};

console.log(company1.removeCountry("UK"));
//        9.2. Veiklos rūšį iš veiklų masyvo.
company1.removeActivityAreas = function (activityToRemove) {
  let filteredActivityAreas = this.activityAreas.filter(
    (item) => item !== activityToRemove
  );

  return filteredActivityAreas;
};

console.log(company1.removeActivityAreas("Finance"));

// Second Method

const company2 = {
  "company name": "Feelit",
  opened: 2010,
  companyCode: "EU-5403",
  employees: 45,
  ceo: "John Wolf",
  nvo: false,
  workingLocations: ["Germany", "Italy", "UK"],
  activityAreas: ["Programming", "Finance", "Marketing"],
  contacts: {
    phone: "+3720142264",
    email: "companyemail@email.com",
    address: {
      country: "Latvia",
      city: "Ryga",
      street: "Albert st.",
      apartment: 241,
    },
  },

  companyAddress: function () {
    return `${company1.contacts.address.street} ${company1.contacts.address.apartment}, ${company1.contacts.address.city}, ${company1.contacts.address.country} `;
  },

  companyNvoSwitch: function () {
    this.nvo = !this.nvo;

    return this.nvo;
  },

  addNewCountry: function (country) {
    this.workingLocations.push(country);
    return this.workingLocations;
  },

  addNewActivityAreas: function (activity) {
    this.activityAreas.push(activity);
    return this.activityAreas;
  },

  // removeCountry: function (countryToRemove) {
  //   let filteredCountries = this.workingLocations.filter(
  //     (country) => country !== countryToRemove
  //   );

  //   return filteredCountries;
  // },

  // removeActivityAreas: function () {
  //   let filteredActivityAreas = this.activityAreas.filter(
  //     (item) => item !== activityToRemove
  //   );

  //   return filteredActivityAreas;
  // },
};

console.log(company2);

const testObj = {
  firstName: "Andrew",
  lastName: "Wolf",
  nickName: "Strong",
};

const nameKey = "Name";

console.log(testObj["first" + nameKey]);
console.log(testObj["last" + nameKey]);
console.log(testObj["nick" + nameKey]);
console.table(testObj);

console.groupEnd();

// Method with OOP

// UŽDUOTIS:
// 1. Sukurti įmonės klasę.
// 2. Klasė turės:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti dvi funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.

company1.contacts = {};
company1.contacts.phone = "+3720142264";
company1.contacts.email = "companyemail@email.com";
company1.contacts.address = {};
company1.contacts.address.country = "Latvia";
company1.contacts.address.city = "Ryga";
company1.contacts.address.street = "Albert st.";
company1.contacts.address.apartment = 241;

class Company {
  constructor(
    companyName,
    companyOpened,
    companyCode,
    companyEmployees,
    companyCeo,
    companyNvo,
    companyWorkingLocations,
    companyActivityAreas,
    phone,
    email,
    country,
    city,
    street,
    apartment,
    addCompanyWorkingLocations,
    addCompanyActivityAreas
  ) {
    this["company name"] = companyName;
    this.opened = companyOpened;
    this.companyCode = companyCode;
    this.employees = companyEmployees;
    this.ceo = companyCeo;
    this.nvo = companyNvo;
    this.workingLocations = companyWorkingLocations;
    this.activityAreas = companyActivityAreas;
    this.contacts = {
      phone,
      email,
      address: {
        country,
        city,
        street,
        apartment,
      },
    };
    this.addLocations = addCompanyWorkingLocations;
    this.addActivity = addCompanyActivityAreas;
  }

  getInfoAddress() {
    const infoAddress = `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country} `;
    return infoAddress;
  }

  getNvoSwitcher() {
    const nvoSwitcher = (this.nvo = !this.nvo);
    return nvoSwitcher;
  }

  getWorkingLocationsString() {
    const workingLocationsString = `Working locations: ${this.workingLocations.join(
      ", "
    )}`;
    return workingLocationsString;
  }

  getActivityAreasString() {
    const activityAreasString = `Working locations: ${this.activityAreas.join(
      ", "
    )}`;
    return activityAreasString;
  }

  getToAddNewCountry() {
    const addNewCountry = this.workingLocations.concat(this.addLocations);
    return addNewCountry;
  }

  getToAddNewActivityAreas() {
    const addNewActivityAreas = this.activityAreas.concat(this.addActivity);
    return addNewActivityAreas;
  }

  getRemoveCountry(countryToRemove) {
    const filteredCountries = this.workingLocations.filter(
      (country) => country !== countryToRemove
    );

    return filteredCountries;
  }

  getRemoveActivityAreas(activityToRemove) {
    const filteredActivityAreas = this.activityAreas.filter(
      (item) => item !== activityToRemove
    );

    return filteredActivityAreas;
  }
}

const firstCompany = new Company(
  "Feelit",
  2010,
  "EU-5403",
  45,
  "John Wolf",
  false,
  ["Germany", "Italy", "UK"],
  ["Programming", "Finance", "Marketing"],
  "+3720142264",
  "companyemail@email.com",
  "Latvia",
  "Ryga",
  "Albert st.",
  241,
  ["Belarus", "New Zealand"],
  ["Human resource", "Archyve"]
);

console.log(firstCompany);
console.log(firstCompany.getInfoAddress());
console.log(
  firstCompany.getNvoSwitcher(),
  firstCompany.getNvoSwitcher(),
  firstCompany.getNvoSwitcher()
);
console.log(firstCompany.getWorkingLocationsString());
console.log(firstCompany.getActivityAreasString());

console.log(firstCompany.getToAddNewCountry());
console.log(firstCompany.getToAddNewActivityAreas());

console.log(firstCompany.getRemoveCountry("UK"));
console.log(firstCompany.getRemoveActivityAreas("Finance"));
