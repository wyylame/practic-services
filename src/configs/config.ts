import { IBenefitsItem, ICardItem, ISocialItem, ITeamPerson } from "../interfaces/components";

export type TCategories = "haircuts" | "beards" | "care" | "staining";

export interface IConfig {
  url: string;
  title: string;
  companyName: string;
  information: {
    address: string;
    phone: string;
    coord: [number, number];
    timeWork: string;
    socials: ISocialItem[];
  };
  colors: {
    primary: string;
    secondary: string;
    teriary: string;
    blackText: string;
    whiteText: string;
  };
  navigation: { title: string; path: string }[];
  categories: { title: string; key: TCategories }[];
  mainSection: {
    description: string;
    btnText: string;
  };
  aboutUs: {
    title: string;
    description: string;
    btnText: string;
  };
  services: {
    title: string;
    itemTimeTitle: string;
    itemPriceTitle: string;
  };
  registration: {
    title: string;
    description: string;
  };
  team: {
    title: string;
    list: ITeamPerson[];
  };
  cards: {
    title: string;
    items: ICardItem[];
  };
  benefits: {
    title: string;
    items: IBenefitsItem[];
  };
}

export const config: IConfig = {
  // Название сайта (название вкладки в браузере)
  url: "https://wyylame.github.io/services-barbershop",
  // url: "./",
  title: "Leader - парикмахерская для лучших",
  // Название фирмы для лого и некоторых мест
  companyName: "Leader",
  information: {
    address: "г. Ростов-на-Дону, пр. Ленина, 105",
    phone: "+7 900 123-61-61",
    coord: [47.2492254, 39.7137271],
    timeWork: "пн-вс: 10:00 – 22:00",
    socials: [
      { title: "Вконтакте", link: "https://vk.com" },
      { title: "Телеграм", link: "https://web.telegram.org/k/" },
    ],
  },
  // цвета
  colors: {
    primary: "#111518",
    secondary: "#ffffff",
    teriary: "#000000",
    blackText: "#111518",
    whiteText: "#ffffff",
  },
  navigation: [
    {
      title: "О нас",
      path: "/about-us",
    },
    {
      title: "Услуги",
      path: "/services",
    },
    {
      title: "Запись",
      path: "/registration",
    },
    {
      title: "Барберы",
      path: "/team",
    },
    {
      title: "Контакты",
      path: "/contacts",
    },
  ],
  categories: [
    { title: "Стрижки", key: "haircuts" },
    { title: "Борода и бритьё", key: "beards" },
    { title: "Уход", key: "care" },
    { title: "Окрашивание", key: "staining" },
  ],
  mainSection: {
    description: "Барбершоп в самом центре Ростова-на-Дону. Именно то, что нужно настоящим лидерам",
    btnText: "Наши услуги",
  },
  aboutUs: {
    title: "О нас",
    description:
      "Барбешоп Leader - мужской клуб нового формата. Мы объединили классическую цирюльню и концептуальное пространство для общения и досуга умных, успешных и уверенных в себе людей. Наша цель — стать для Вас «своим местом», приходя в которое, Вы попадаете в уютное сообщество друзей и товарищей близких по духу, где Вам всегда рады.",
    btnText: "Записаться",
  },
  services: {
    title: "Наши услуги",
    itemTimeTitle: "Длительность работы:",
    itemPriceTitle: "Стоимость услуги:",
  },
  registration: {
    title: "Запишитесь к нам прямо сейчас",
    description:
      "Оставьте заявку, и в течение 10 минут наш сотрудник перезвонит Вам, чтобы согласовать день, время и мастера для записи.",
  },
  team: {
    title: "Наши барберы",
    list: [
      {
        name: "Борис",
        description:
          "Борис рекордсмен, ведь он имеет абсолютное первое место по количеству постоянных клиентов и рабочих часов во всей сети. Обладатель лучшего времени по скоростному фэйду. Это Риал Бэд Гангстэ. Его руки точны, его движения безошибочны. На пути к совершенству этот талантливый парень не знает преград, оставляя за собой тонны волос и горы изумленных клиентов. Продолжая учиться работе после самой работы он проводит на линии огня все свое время.",
        img: "1.jpg",
      },
      {
        name: "Роман",
        description:
          "Роман - твой барбер с Мамина-Сибиряка, 102 Юмор, харизма, профессионализм, чувство стиля - это только капля из всего описания. С того момента как начал делать первые шаги, решил, что его призвание дарить стиль! Слово - Барбер, было одним из первых 5 слов в его жизни. Судьба! Поистине, душа компании! Безграничное чувство юмора не оставит вас равнодушным. Последовательность в действиях, видя результат наперед - Дмитрий создает по-настоящему качественные стрижки, и четкие бороды своим клиентам.",
        img: "2.jpg",
      },
      {
        name: "Антонио",
        description:
          "Я художник-стилист потому что, я люблю искусство жить, эстетик. Искусство изобретение на уровне механизма мысленные и воображений, от оригинальной идея до эстетического содержание - не путать искусство и изобразительное искусство. В короче, Когда мы слушаем о России, сразу думать самая большая страна в Мире, где очень холодно и снег идёт, и там медведь есть, и может видеть жёсткий водку. Когда приехал в Россию был рад что пережал , собой носил холодный одежда, но её не помогли потому что не было специально для Зимой. Первый раз увидел снег в свою жизнь так было очень клево, Русский кухни, люблю особенно их супы и пельмени».",
        img: "3.jpg",
      },
      {
        name: "Алексей",
        description:
          "Любитель походов, запаха костра, и плавных переходов. Отличный мастер, преданный член семьи с Маршала Жукова, знающий цену времени. Рассказывать про Евгения можно довольно долго, историй хватит, поверьте. Опыта много. В подтверждение - это тысячи идеально подстриженных голов, тонны лишних волос, и бесконечная преданность к мастеру.",
        img: "4.jpg",
      },
    ],
  },
  cards: {
    title: "Почему стоит выбрать нас?",
    items: [
      {
        title: "Качественная косметика",
        descr:
          "Перечень средств для укладки волос на голове и ухода за бородой в нашем барбершопе поражает воображение. Наши мастера используют самые лучшие разработки ведущих компаний, поскольку от качества расходных материалов во многом зависит лояльность клиента.",
        img: "icon1.png",
      },
      {
        title: "Подберём имидж",
        descr:
          "У посетителя нашего барбершопа есть уникальная возможность подобрать свой лучший образ. Мастера знают всё об антропометрии мужского черепа и всех существующих тенденциях в мире причесок, а потому могут разработать имидж, по сути, с нуля. Мужественная форма бороды, элегантная прорисовка усов - всё это позволяет вам чувствовать себя намного увереннее в жизни.",
        img: "icon2.png",
      },
      {
        title: "Профессионализм сотрудников",
        descr:
          "Суть мастерства наших барберов заключается не столько в отказе от женской аудитории, сколько в осознанном выборе в пользу совершенствования мужской стрижки. Они стремятся повысить свою квалификацию при каждом удобном случае. Подтвердить ее множеством законченных курсов и мастер-классов.",
        img: "icon3.png",
      },
    ],
  },
  benefits: {
    title: "Отдыхай в уютной атмосфере нашего барбершопа",
    items: [
      {
        icon: "icon_1.svg",
        descr: "Бесплатный кофе и другие напитки до, во время и после процедур",
      },
      {
        icon: "icon_2.svg",
        descr: "Просмотр любимых шоу или кино",
      },
      {
        icon: "icon_3.svg",
        descr: "Индивидуальный подход и подсказки по уходу от наших барберов",
      },
      {
        icon: "icon_4.svg",
        descr: "Бесплатный wi-fi",
      },
      {
        icon: "icon_5.svg",
        descr: "Скидки на дни рождения",
      },
    ],
  },
};
