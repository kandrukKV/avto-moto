export const REVIEWS = [
  {
    id: `1`,
    userName: `Борис Иванов`,
    worth: `мощность, внешний вид`,
    limitations: `Слабые тормозные колодки (пришлось заменить)`,
    rating: 3,
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
    dateTime: `2021-02-23T15:40:41.067Z`
  },
  {
    id: `2`,
    userName: `Марсель Исмагилов`,
    worth: `Cтиль, комфорт, управляемость`,
    limitations: `Дорогой ремонт и обслуживание`,
    rating: 4,
    comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`,
    dateTime: `2021-02-20T10:40:41.067Z`
  }
];

export const CAR = {
  id: 1,
  slides: [
    {
      id: 1,
      title: `Картинка 1`,
      src: `/img/slide_1.jpg`
    },
    {
      id: 2,
      title: `Картинка 2`,
      src: `/img/slide_2.jpg`
    },
    {
      id: 3,
      title: `Картинка 3`,
      src: `/img/slide_3.jpg`
    }
  ],
  name: `Морпех 11`,
  params: {
    fuel: `бензин`,
    transmission: `механика`,
    power: `100 л.с.`,
    volume: `1,4 л`
  },
  price: {
    current: `2 300 000`,
    old: `2 400 000`
  },
  features: [
    {name: `Трансмиссия`, value: `Роботизированная`},
    {name: `Мощность двигателя, л.с.`, value: `249`},
    {name: `Тип двигателя`, value: `Бензиновый`},
    {name: `Привод`, value: `Полный`},
    {name: `Объём двигателя, л`, value: `2.4`},
    {name: `Макс. крутящий момент`, value: `379/4500`},
    {name: `Количество цилиндров`, value: `4`},
  ],
  reviews: REVIEWS
};

