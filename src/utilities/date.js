/* Gets week days given that currentDate is of Moment js type */
export function getMomentWeek (currentDate) {
  const dates = [];
  for (let i = 1; i <= 7; i += 1) dates.push(currentDate.clone().day(i));
  return dates;
}

/* Gets different range days given that currentDate is of Moment js type */
export function getDateRange (currentDate, rangeType) {
  const start = currentDate.clone().startOf(rangeType);
  const end = currentDate.clone().endOf(rangeType);
  const day = start;
  const days = [];

  while (day <= end) {
    days.push(day.clone());
    day.add(1, 'd');
  }
  return days;
}

/* Gets week days */
export function getWeekDays (currentDate) {
  const clone = new Date(currentDate);
  const start = new Date(clone.setDate(clone.getDate() - clone.getDay() + 1));
  const end = new Date(clone.setDate(clone.getDate() + 6));
  const days = [];

  while (start <= end) {
    days.push(new Date(start.setHours(0, 0, 0, 0)));
    start.setDate(start.getDate() + 1);
  }

  return days;
}

/* Gets current year value */
export function getCurrentYear () {
  return (new Date()).getFullYear();
}

export const birthYear = 1988;
