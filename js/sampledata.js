//TODO - add sample users to localstorage
//TODO - add sample animals to localstorage
let users = [
  {
    username: "lazar",
    email: "lazar@gmail.com",
    password: "Lazar_1",
  },
  {
    username: "marko",
    email: "marko@gmail.com",
    password: "Marko_1",
  },
  {
    username: "andrijana",
    email: "andrijana@hotmail.com",
    password: "Andrijana_1",
  },
];

let lostAnimals = [
    {
      petName: "Бигл",
      phone: "+381651234567",
      opis: "Пас нестао 17. 5 у насељу Борча. Стар је 8 година, имао је на себи црвени оковратник и огрлицу против крпеља и бува(сиву). Кућни пас, негован, члан породице. Одазива се на име Биги.",
      user: "lazar",
    },
    {
        petName: "Меда",
        phone: "+381651234568",
        opis: "Нестала је јапанска акита из улице Породице Праизовић у Сремчици. Одазива се на име Меда и има плабу огрлицу. Молим све који имаји било каке информације да се јаве.",
        user: "marko",
    },
    {
        petName: "Беба",
        phone: "+381651234569",
        opis: "Нестала женка у Борчи. Зове се Беба, има 4 месеца и личи на Вучјака, ако је видите, јавите се. Следи награда.",
        user: "andrijana",
    },
  ];

function initializeData() {
  initializeUsers();
  initializeLostAnimals();
}

function initializeUsers() {

  let usersLocalStorage = localStorage.getItem("users");
  if (usersLocalStorage != null) users = JSON.parse(usersLocalStorage);
  else localStorage.setItem("users", JSON.stringify(users));
}

function initializeLostAnimals() {
let lostAnimalsLocalStorage = localStorage.getItem("lostAnimals");
  if (lostAnimalsLocalStorage != null) users = JSON.parse(lostAnimalsLocalStorage);
  else localStorage.setItem("lostAnimals", JSON.stringify(lostAnimals));
}
