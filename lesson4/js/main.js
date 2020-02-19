let currentDate = new Date();

let currentDateString;


// get day of week
let weekDayNumber = currentDate.getDay();
let daysOfWeek =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
let weekDay = daysOfWeek[weekDayNumber];
currentDateString = weekDay + ', ';
currentDateString  = currentDateString + currentDate.getDate();
let months =[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
let monthNumber = currentDate.getMonth();
let month = months[monthNumber];
currentDateString += ' ' + month;
currentDateString += ' ' + currentDate.getFullYear();
document.getElementById('currentDate').innerHTML = currentDateString;
console.log(currentDateString);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
