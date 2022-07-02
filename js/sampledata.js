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
    name: "Бони",
    description: "Лабрадор",
    weight: "8kg",
    years: 5,
    img1: "lab1.jfif",
    img2: "lab2.jfif",
    img3: "lab3.jfif",
    video: "lab1.mp4"
  },
  {
    name: "Бети",
    description: "Вучијак",
    weight: "10kg",
    years: 3,
    img1: "shepard1.jpg",
    img2: "shepard2.jpg",
    img3: "shepard3.jpg",
  },
  {
    name: "Дона",
    description: "Акита Ино ",
    weight: "9кг",
    years: 7,
    img1: "akitu1.webp",
    img2: "akitu2.jpg",
    img3: "akitu3.jpg",
  },
];

let cats = [
  {
    name: "Keти",
    description: "Домаћа дугодлака мачка",
    weight: "7kg",
    years: 2,
    img1: "cat11.jfif",
    img2: "cat12.jfif",
    img3: "cat13.jfif",
  },
  {
    name: "Џокер",
    description: "Домаћа краткодлака црна мачка",
    weight: "6kg",
    years: 5,
    img1: "cat21.jfif",
    img2: "cat22.jfif",
    img3: "cat23.jfif",
  },
  {
    name: "Олуја",
    description: "Тиха и мирна домаћа мачка",
    weight: "9kg",
    years: 3,
    img1: "cat31.jfif",
    img2: "cat32.jfif",
    img3: "cat33.jfif",
  },
];

let birds = [
  {
  name: "Киви",
  description: "Папагај",
  weight: "0.5kg",
  years: 1,
  img1: "bird11.jfif",
  img2: "bird12.jfif",
  img3: "bird13.jfif",
  },
  {
  name: "Уна",
  description: "Бели питоми голуб",
  weight: "0.7kg",
  years: 1.5,
  img1: "bird21.jfif",
  img2: "bird22.jfif",
  img3: "bird23.jfif",
  },
  {
  name: "Мирко и Славко",
  description: "Два рођена брата",
  weight: "0.1kg",
  years: 0.5,
  img1: "bird31.jfif",
  img2: "bird32.jfif",
  img3: "bird33.jfif",
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
