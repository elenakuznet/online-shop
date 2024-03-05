let pizza = [
  {
    id: "1",
    name: "Жюльен",
    description:
      "Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо",
    price: 469,
    category: "пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/f8bcc0d18f5a4817a720a159f0f8c37c_366x366.webp",
  },
  {
    id: "2",
    name: "Сырная",
    description: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
    price: 289,
    category: "пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_366x366.webp",
  },
  {
    id: "3",
    name: "Двойной цыпленок",
    description: "Цыпленок, моцарелла, фирменный соус альфредо",
    price: 369,
    category: "пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_366x366.webp",
  },
  {
    id: "4",
    name: "Чоризо фреш",
    description:
      "Фирменный томатный соус, моцарелла, острая чоризо, сладкий перец",
    price: 289,
    category: "пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/02ca2561953b488993878d1f70e359de_366x366.webp",
  },
  {
    id: "5",
    name: "Омлет с ветчиной и грибами",
    description:
      "Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла",
    price: 179,
    category: "завтраки",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/56d8f8a01e8743a0a5fcedb99aafcc1e_366x366.webp",
  },
  {
    id: "6",
    name: "Омлет с ветчиной и грибами в пите",
    description:
      "Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла в пшеничной пите. Удобно взять с собой",
    price: 199,
    category: "завтраки",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/e62d387386984ad1ac46309e372c1b9a_366x366.webp",
  },
  {
    id: "7",
    name: "Омлет с беконом",
    description:
      "Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак",
    price: 179,
    category: "завтраки",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/667b94d3b0604d30965e5b0ca057c964_366x366.webp",
  },
  {
    id: "8",
    name: "Омлет сырный в пите",
    description:
      "Вариант завтрака в пшеничной пите с омлетом с поджаристой корочкой, моцареллой, кубиками брынзы, сырами чеддер и пармезан. Удобно взять с собой",
    price: 199,
    category: "завтраки",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/b990b6a4313e434a924bdaafea9e9a98_366x366.webp",
  },
  {
    id: "9",
    name: "Банановый молочный коктейль",
    description:
      "По-настоящему солнечный! Молочный коктейль с добавлением бананового пюре",
    price: 215,
    category: "коктейли",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/b37a2fc8d9ac4636957fdd71f62d1725_366x366.webp",
  },
  {
    id: "10",
    name: "Карамельное яблоко молочный коктейль",
    description:
      "Уютное сочетание яблочного вкуса, теплой карамели, молока и мороженого в вашем стакане",
    price: 215,
    category: "коктейли",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/7d8acee0f9984844bdeb3e22d359a4fc_366x366.webp",
  },
  {
    id: "11",
    name: "Шоколадный молочный коктейль",
    description:
      "Очаровательная шоколадная нежность. Попробуйте молочный коктейль с какао и мороженым",
    price: 199,
    category: "коктейли",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/8f463da299934c02be98098809ceb885_366x366.webp",
  },
  {
    id: "12",
    name: "Молочный коктейль с печеньем Орео",
    description:
      "Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»",
    price: 215,
    category: "коктейли",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/de7a12c1a960434cadc309df31da75ed_366x366.webp",
  },
  {
    id: "13",
    name: "Слоеные палочки с соусом манго и ананасами",
    description:
      "Это что-то на тропическом! Ананас и манговый соус на воздушном слоеном тесте",
    price: 249,
    category: "десерты",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/45260444366141e09484d43397821382_366x366.webp",
  },
  {
    id: "14",
    name: "Слоеные палочки с ананасами и брусникой",
    description:
      "Здесь все сразу — брусника и ананас со сгущенкой на слоеном тесте",
    price: 229,
    category: "десерты",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/b61244b188fa4bcaa5c751f970954ffb_366x366.webp",
  },
  {
    id: "15",
    name: "Брауни",
    description:
      "Умножили какао на шоколад и получили изумительный десерт. Вот такая сладкая арифметика",
    price: 139,
    category: "десерты",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/33bbe8803b6a41268c6cc3980db0be3a_366x366.webp",
  },
  {
    id: "16",
    name: "Чизкейк Нью-Йорк",
    description:
      "Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк",
    price: 159,
    category: "десерты",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/5a06bd533bb846f59cfb4b8c4e062f86_366x366.webp",
  },
];
