export function getWeek_ForLoop (currentDate) {
  const dates = [];
  for (let i = 1; i <= 7; i++) dates.push(currentDate.clone().day(i))
  return dates;
}

function getWeek_Moment (currentDate, rangeType) {
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

export function getCurrentYear () {
  return (new Date()).getFullYear();
}

export const birthYear = 1988;
