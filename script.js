var button = document.getElementById("submit");

button.addEventListener("click", calculateAge);

function calculateAge() {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth() + 1;
  var currentDay = currentDate.getDate();
  var currentYear = currentDate.getFullYear();

  //   input
  var day = parseInt(document.getElementById("day").value, 10);
  var month = parseInt(document.getElementById("month").value, 10);
  var year = parseInt(document.getElementById("year").value, 10);

  var ageInYears = currentYear - year;

  var birthdateThisYear = new Date(currentYear, month - 1, day);
  if (birthdateThisYear > currentDate) {
    ageInYears--;
  }

  var ageInMonths = currentMonth - month;
  var ageInDays = currentDay - day;

  if (ageInDays < 0) {
    ageInMonths--;
    var daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    ageInDays += daysInLastMonth;
  }
  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  //   for error handling
  var errors = [];
  var errors1 = [];

  if (day < 1 || day > 31) {
    errors.push("day");
  }
  if (month < 1 || month > 12) {
    errors.push("month");
  }
  if (year < 1960 || year > 2023) {
    errors.push("year");
  }

  if (!day) {
    errors1.push("day");
  }
  if (!month) {
    errors1.push("month");
  }
  if (!year) {
    errors1.push("year");
  }

  // Handle leap year
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // Number of days in each month
  var daysInMonth = [
    31, // January
    isLeapYear(year) ? 29 : 28, // February (accounting for leap years)
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
  ];

  if (day > daysInMonth[month - 1]) {
    errors.push("day");
  }

  var errorDay = document.getElementById("error-day");
  var errorMonth = document.getElementById("error-month");
  var errorYear = document.getElementById("error-year");
  var reqDay = document.getElementById("error-req-day");
  var reqMonth = document.getElementById("error-req-month");
  var reqYear = document.getElementById("error-req-year");

  if (errors.includes("day")) {
    errorDay.style.display = "block";
  } else {
    errorDay.style.display = "none";
  }
  if (errors.includes("month")) {
    errorMonth.style.display = "block";
  } else {
    errorMonth.style.display = "none";
  }
  if (errors.includes("year")) {
    errorYear.style.display = "block";
  } else {
    errorYear.style.display = "none";
  }
  if (errors1.includes("day")) {
    reqDay.style.display = "block";
  } else {
    reqDay.style.display = "none";
  }
  if (errors1.includes("month")) {
    reqMonth.style.display = "block";
  } else {
    reqMonth.style.display = "none";
  }
  if (errors1.includes("year")) {
    reqYear.style.display = "block";
  } else {
    reqYear.style.display = "none";
  }

  if (errors.length > 0 || errors1.length > 0) {
    document.getElementById("years").textContent = "";
    document.getElementById("months").textContent = "";
    document.getElementById("days").textContent = "";
    return;
  }
  document.getElementById("years").textContent = ageInYears;
  document.getElementById("months").textContent = ageInMonths;
  document.getElementById("days").textContent = ageInDays;
}
