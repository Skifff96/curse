var Week = ["�����������", "�����������", "�������", "�����", "�������", "�������", "�������"];
var Month = ["���.", "���.", "���.", "���.", "���", "���.", "���.", "���.", "���.", "���.", "���.", "���."]
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