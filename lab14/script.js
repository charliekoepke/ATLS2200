var twelveHourTime = true;

function clock() {
    var today;
    var year;
    var month;
    var monthOfYear;
    var date;
    var day;
    var dayOfWeek;
    var hour;
    var minute;
    var second;

    today = new Date();
    year = today.getFullYear();
    month = today.getMonth();
    monthOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    date = today.getDate();
    day = today.getDay();
    dayOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();

    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = monthOfYear[month];
    document.getElementById("day").innerHTML = day;

    if (twelveHourTime == true) {
        if (hour >= 12) {
            document.getElementById("meridiem").innerHTML = "PM";
        }
        else if (hour < 12) {
            document.getElementById("meridiem").innerHTML = "AM";
        }

        if (hour > 12) {
            hour = hour - 12;
        }
    }
    else {
        document.getElementById("meridiem").innerHTML = "MIL";
    }

    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

    // Display the clock in a creative fashion

    var hourColour = Math.round(hour * 11.086);
    var minuteColour = Math.round(minute * 4.322);
    var secondColour = Math.round(second * 4.322);

    console.log(hourColour);

    document.body.style.color = "rgb(" + hourColour + ", " + minuteColour + ", " + secondColour + ")";
}

function toggleTwelve() {
    if (twelveHourTime == true) {
        twelveHourTime = false;
    }
    if (twelveHourTime == false) {
        twelveHourTime = true;
    }
}

clock();
setInterval(clock, 10);