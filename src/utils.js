export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getDiffDate = (date) => {
  const nowDate = new Date().getTime();
  const lastDate = new Date(date).getTime();

  const diff = nowDate - lastDate;

  const minutes = Math.round(diff / 60000);

  if (!minutes) {
    return `меньше минуты`;
  }

  if (minutes < 60) {
    return minutes + ` ` + timeToString(minutes, `минута`, `минуты`, `минут`);
  }

  const hours = Math.round(minutes / 60);

  if (hours < 24) {
    return hours + ` ` + timeToString(hours, `час`, `часа`, `часов`);
  }

  const days = Math.round(hours / 24);

  return days + ` ` + timeToString(days, `день`, `дня`, `дней`);

};

const timeToString = (value, str1, str2, str5) => {
  if (!value) {
    return 0;
  }
  const mod = value % 10;
  if ((value % 100) >= 10 && (value % 100) <= 19) {
    return str5;
  }
  if (mod === 1) {
    return str1;
  }
  if (mod >= 2 && mod <= 4) {
    return str2;
  }
  return str5;
};
