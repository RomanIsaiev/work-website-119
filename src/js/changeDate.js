// change day

var currentDate = new Date();
// Увеличение значения дня на 1
currentDate.setDate(currentDate.getDate() + 1);
// Получение отдельных составляющих даты
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
var year = currentDate.getFullYear();
// Форматирование даты в нужном формате (например, "дд.мм.гггг")

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

var formattedDate = addLeadingZero(day);
// Обновление значения на вашем сайте
document.getElementById('dateElement').innerHTML = day;

// **************************************************************************

// change month
var current_date = new Date();
current_date.setDate(current_date.getDate() + 1);

var month = new Array(
  'ЯНВАРЯ',
  'ФЕВРАЛЯ',
  'МАРТА',
  'АПРЕЛЯ',
  'МАЯ',
  'ИЮНЯ',
  'ИЮЛЯ',
  'АВГУСТА',
  'СЕНТЯБРЯ',
  'ОКТЯБРЯ',
  'НОЯБРЯ',
  'ДЕКАБРЯ'
);

// var month = new Array(
//   'СІЧНЯ',
//   'ЛЮТОГО',
//   'БЕРЕЗНЯ',
//   'КВІТНЯ',
//   'ТРАВНЯ',
//   'ЧЕРВНЯ',
//   'ЛИПНЯ',
//   'СЕРПНЯ',
//   'ВЕРЕСНЯ',
//   'ЖОВТНЯ',
//   'ЛИСТОПАДА',
//   'ГРУДНЯ'
// );

// var month = new Array(
//   '01',
//   '02',
//   '03',
//   '04',
//   '05',
//   '06',
//   '07',
//   '08',
//   '09',
//   '10',
//   '11',
//   '12'
// );

document.getElementById('monthElement').innerHTML =
  month[current_date.getMonth()];
