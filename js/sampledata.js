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

let comments = [
  {
    author: "аutor",
    message: "poruka",
    add: "oglas",
  },
];

let dogs = [
  {
    species: "labrador",
    author: "Марко Јовановић",
    date: "1-јул-2022",
    description: "Лабрадор",
  },
  {
    species: "vucijak",
    author: "Марко Јовановић",
    date: "1-јул-2022",
    description: "Вучијак",
  },
  {
    species: "akitainu",
    author: "Марко Јовановић",
    date: "1-јул-2022",
    description: "Акита ину",
  },
];

let cats = [
  {
    author: "Марко Јовановић",
    date: "1-јул-2022",
    description: "Мачка 1",
  },
  {
    author: "Марко Јовановић",
    date: "1-јул-2022",
    description: "Мачка 2",
  },
  {
    author: "Марко Јовановић",
    date: "1-јул-2022",
    description: "Мачка 3",
  },
];

let birds = [
  {
    author: "Марко Јовановић",
    date: "1-јул-2022",
    description: "Птица 1",
  },
  {
    author: "Марко Јовановић",
    date: "1-јул-2022",
    description: "Птица 2",
  },
  {
    author: "Марко Јовановић",
    date: "1-јул-2022",
    description: "Птица 3",
  },
];

function initializeData() {
  initializeUsers();
  initializeLostAnimals();
  initializeComments();
  initializeDogs();
  initializeBirds();
  initializeCats();
}

function initializeDogs() {
  let dogsLocalStorage = localStorage.getItem("dogs");
  if (dogsLocalStorage != null) dogs = JSON.parse(dogsLocalStorage);
  else localStorage.setItem("dogs", JSON.stringify(dogs));
}

function initializeCats() {
  let catsLocalStorage = localStorage.getItem("cats");
  if (catsLocalStorage != null) cats = JSON.parse(catsLocalStorage);
  else localStorage.setItem("cats", JSON.stringify(cats));
}

function initializeBirds() {
  let birdsLocalStorage = localStorage.getItem("birds");
  if (birdsLocalStorage != null) birds = JSON.parse(birdsLocalStorage);
  else localStorage.setItem("birds", JSON.stringify(birds));
}

function initializeUsers() {
  let usersLocalStorage = localStorage.getItem("users");
  if (usersLocalStorage != null) users = JSON.parse(usersLocalStorage);
  else localStorage.setItem("users", JSON.stringify(users));
}

function initializeLostAnimals() {
  let lostAnimalsLocalStorage = localStorage.getItem("lostAnimals");
  if (lostAnimalsLocalStorage != null)
    users = JSON.parse(lostAnimalsLocalStorage);
  else localStorage.setItem("lostAnimals", JSON.stringify(lostAnimals));
}

function initializeComments() {
  let commentsLocalStorage = localStorage.getItem("comments");
  if (commentsLocalStorage != null) comments = JSON.parse(commentsLocalStorage);
  else localStorage.setItem("comments", JSON.stringify(comments));
}
