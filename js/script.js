var Week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var Month = ["Янв.", "Фев.", "Мрт.", "Фпр.", "Мая", "Июн.", "Июл.", "Авг.", "Сен.", "Окт.", "Нбр.", "Дек."]
var DayName = Week[new Date().getDay()];
var Month = Month[new Date().getMonth()];
var Day = new Date().getDate();
var Year = new Date().getFullYear();
var Hour = new Date().getHours();
var Minutes = new Date().getMinutes();

if (Minutes < 10) {
    temp = Minutes;
    Minutes = "0" + Minutes;
}