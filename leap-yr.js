function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const year1 = isLeapYear(2400);
const year2 = isLeapYear(2130);
const year3 = isLeapYear(2025);

console.log(year1,year2,year3)
