"use strict";

const posts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
  {
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  {
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  },
  {
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
  },
  {
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
  },
  {
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
  },
  {
    id: 16,
    title:
      "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
  },
  {
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
  },
  {
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
  },
  {
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
  },
  {
    id: 20,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
  },
  {
    id: 21,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
  },
  {
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
  },
  {
    id: 23,
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
  },
  {
    id: 24,
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
  },
  {
    id: 25,
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
  },
];

// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.

// 7.1. Gauti pirmo masyvo nario reikšmę.
const task1 = function (data) {
  console.log(data[0]);
};

task1(posts);
// 7.2. Gauti paskutinio masyvo nario reikšmę.
const task2 = function (data) {
  console.log(data[data.length - 1]);
};

task2(posts);
// 7.3. Gauti 15 masyvo nario reikšmę.
const task3 = function (data) {
  console.log(data[14]);
};

task3(posts);
// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
const task4 = function (data) {
  console.log(data[data.length - 14]);
};

task4(posts);
// 7.5. Gauti vidurinio masyvo nario reikšmę.
const task5 = function (data) {
  console.log(data[data.length - (data.length + 1) / 2]);
};

task5(posts);
// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
const task6 = function (data) {
  const first4Num = data.slice(0, 4);
  console.log(first4Num);
};

task6(posts);
// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
const task7 = function (data) {
  console.log(data.slice(-5, 25));
};

task7(posts);
// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
const task8 = function (data) {
  console.log(data.slice(4, 15));
};

task8(posts);
// 7.9. Gauti kas antro masyvo nario reikšmes.
const task9 = function (data) {
  const filteredData = data.filter((item) => item.id % 2 === 0);
  console.log(filteredData);
};

task9(posts);
// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
const task10 = function (data) {
  console.log(data[0], data[data.length - 1]);
};

task10(posts);
// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
const task11 = function (data) {
  console.log(data[0].title);
};

task11(posts);
// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
const task12 = function (data) {
  console.log(data[1].body);
};

task12(posts);
// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
const task13 = function (data) {
  const output = `Post title is : ${data[2].title}, and the content is : ${data[2].body}`;
  console.log(output);
};

task13(posts);
// 7.14. Išvesti visus masyvo narius į konsolę.
const task14 = function (data) {
  data.map((item) => console.log(item));
};

task14(posts);
// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
const task15 = function (data) {
  data.map((item) => console.log(item.title));
};

task15(posts);
// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
const task16 = function (data) {
  data.map((item) => console.log(item.body));
};

task16(posts);
// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
const task17 = function (data) {
  data.map((item) =>
    console.log(`Title: ${item.title}. Content: ${item.body}.`)
  );
};

task17(posts);
// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
const task18 = function (data) {
  const first4Num = data.slice(0, 4);
  first4Num.map((item) =>
    console.log(
      `The first fourth - Title: ${item.title}. Content: ${item.body}.`
    )
  );
};

task18(posts);
// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
const task19 = function (data) {
  const last7Num = data.slice(-7, 25);
  console.log(last7Num);
  last7Num.map((item) =>
    console.log(`The last seven - Title: ${item.title}. Content: ${item.body}.`)
  );
};

task19(posts);

// 7.22. Išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".
const task22 = function (data) {
  const filteredData = data.filter((item) => item.title[0] === "s");
  console.log(filteredData);
};

task22(posts);
// 7.23. Išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".
const task23 = function (data) {
  const filteredData = data.filter(
    (item) => item.title.endsWith("t") || item.title.endsWith("m")
  );
  console.log(filteredData);
};

task23(posts);
//only titles---
// const task23 = function (data) {
//   const filteredData = data.filter((item) => {
//     const titles = item.title;
//     if (titles.endsWith("t") || titles.endsWith("m")) {
//       return titles;
//     }
//     console.log(titles);
//   });
// };

// task23(posts);

// 7.24. Išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.
const task24 = function (data) {
  const filteredData = data.filter((item) => item.title.length > 15);
  console.log(filteredData);
};

task24(posts);
// 7.25. Išvesti tik tuos masyvo narius, kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.
const task25 = function (data) {
  const filteredData = data.filter(
    (item) => item.title.length < 20 && item.body.length > 50
  );
  console.log(filteredData);
};

task25(posts);
// 7.26. Išvesti tik tuos masyvo narius, kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.
const task26 = function (data) {
  const filteredData = data.filter(
    (item) =>
      item.title.length > 20 &&
      item.title.length < 30 &&
      item.body.length > 50 &&
      item.body.length < 130
  );
  console.log(filteredData);
};

task26(posts);
// 7.27. Išvesti tik tuos masyvo narius, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".
const task27 = function (data) {
  const filteredData = data.filter(
    (item) => item.title.includes("it") && item.body.includes("quo")
  );
  console.log(filteredData);
};

task27(posts);
// 7.28. Išvesti tik tuos masyvo narius, kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.
const task28 = function (data) {
  const filteredData = data.filter((item) => item.body.includes(" sit "));
  console.log(filteredData);
};

task28(posts);
// 7.29. Išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.
// ------------------------------
const task29 = function (data) {
  // 1 step - Inside the filter callback function, we define two conditions using the && (logical AND) operator. Both conditions must be true for a item to be included in the filtered array.
  const filteredData = data.filter((item) => {
    // 2 step splitting the title string into an array of letters
    // 3 step filtering that array to count how many times the letter 'a' appears.
    const titleHasA =
      item.title &&
      item.title.split("").filter((letter) => letter === "a").length > 3;

    const bodyHasO =
      item.body &&
      item.body.split("").filter((letter) => letter === "o").length < 7;

    return titleHasA && bodyHasO;
  });
  console.log(filteredData);
};

task29(posts);
// 7.30. Išvesti visų masyvo narių pavadinimus surūšiuotus nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.

const task30 = function (data) {
  // Step 1: Calculate Body Lengths and Create New Array
  const newDataArray = data.map((item) => ({
    // Step 1a - For each item in the original array, a new object is created using the spread (...) operator to include all properties of the original item.
    ...item,
    // Step 1b - An additional property, bodyLength, is added to each item object. This property represents the length of the "body" property. If the "body" property is null or undefined, bodyLength is set to 0.
    bodyLength: item.body ? item.body.length : 0,
  }));

  // Step 2: Sort data Based on Body Length
  const sortedDataInArray = newDataArray.sort(
    (a, b) => b.bodyLength - a.bodyLength
  );
  console.log(sortedDataInArray);

  // Step 3: Output Sorted data with Body Length
  sortedDataInArray.forEach((item) => {
    console.log(
      `Object ID Number - (${item.id}), with - body text: ${item.body} and - body Length: ${item.bodyLength}`
    );
  });
};

task30(posts);
