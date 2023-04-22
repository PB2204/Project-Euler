let yearid = 1900;
let monthid = 1;
let dayofmonth = 7;
let sunonfirst = 0;

function daysinmonth(year, month) {
  if ([4, 6, 9, 11].includes(month)) return 30;
  if (month == 2) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) return 29;
    else return 28;
  }
  return 31;
}

while (yearid <= 2000 && monthid <= 12 && dayofmonth <= 31) {
  const dim = daysinmonth(yearid, monthid);
  if (dayofmonth == 1 && yearid > 1900) sunonfirst += 1;
  dayofmonth += 7;
  if (dayofmonth > dim) {
    dayofmonth -= dim;
    monthid += 1;
    if (monthid == 13) {
      monthid = 1;
      yearid += 1;
    }
    
  }
  
}
console.log(sunonfirst);
