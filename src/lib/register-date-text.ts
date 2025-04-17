const mounthGenitive = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export const registerDateText = (createdAt: number) => {
  dayjs.locale('ru');
  const date = dayjs(createdAt);

  const currentYear = dayjs().year();

  if (date.year() === currentYear) {
    const monthIndex = date.month();
    return `${mounthGenitive[monthIndex]} года`;
  } else {
    return `${date.year()} года`;
  }
};
