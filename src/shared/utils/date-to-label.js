export default function dateToLabel(date) {
  const labels = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  if (date.getDate() === new Date().getDate()) {
    return 'Сегодня';
  }

  return `${date.getDate()} ${labels[date.getMonth()]}`;
}
