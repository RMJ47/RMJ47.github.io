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


let currentDay = weekDayNumber;

for (let i = 1; i < 6; i++) {
    // add one day to current day
    currentDay++;

    // if current day is greater than 6 (Saturday), reset it to 0 (Sunday)
    if (currentDay > 6) {
        currentDay = 0;
    }

    // assing value to placeholder in HTML
    const element = document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];

    // show/hide pancake
    if (weekDayNumber == 5){
        document.getElementById("pancake").removeAttribute("class", "hidden");
    }
    
}

