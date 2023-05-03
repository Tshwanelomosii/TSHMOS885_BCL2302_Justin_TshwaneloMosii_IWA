const MONTHS = [   // First, an array of month names is defined as MONTHS.
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
]
const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
// Only edit below  // A function getDaysInMonth is defined that takes a date object and returns the number of days in the month of that date.
const createArray = (length) => { // A function createArray is defined that takes a length parameter and returns an array of that length
    const result = [];   //, filled with incremental numbers starting from 0.
    for (let i = 0; i < length; i++) {
        result.push(i);
    }
    return result;
};
const createData = function(){ // A function createData is defined that generates an array of weeks and days for the current month.
    const current = new Date();// It sets the current date to the first day of the month, determines the starting day of the month,
    current.setDate(1);// and calculates the number of days in the month. It then generates an array of weeks with an array of days in each week,
    const startDay = current.getDay();//populating each day with the day of the month, and adding appropriate CSS classes to highlight today, weekends, and alternate weeks 
    const daysInMonth = getDaysInMonth(current);
    const weeks = createArray(6);
    const days = createArray(7);
     let result = [] //value = null
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        let value = {
            week: weekIndex + 1,
            days: []
        };
        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            const day = (weekIndex * 7) + dayIndex - startDay + 1;
            const isValid = day > 0 && day <= daysInMonth;
            let classString = 'table__cell';
            if (dayIndex === 0 || dayIndex === 6) {
                classString += 'table__cell_weekend';
            }
             value.days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
                class: classString,
             });
            }
            weeks[weekIndex] = value;
        }
        return weeks;
};
const addCell = function(existing, classString, value) {// A function addCell is defined that takes an existing HTML string, a CSS class,
    return `${existing}<td class="${classString}">${value}</td>`;
};//and a value, and returns the string with a new HTML table cell added with the specified class and value.
const createHtml = function(data) {// A function createHtml is defined that takes the data generated by createData and generates an HTML table to display the calendar.
    let result = '';//It loops through each week and day, adding appropriate classes to highlight today, weekends, and alternate weeks, and generating an HTML table cell for each day using addCell.
    for (let i = 0; i < data.length; i++) {
      const week = data[i];
      let inner = '';
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);
      for (let j = 0; j < week.days.length; j++) {
        const day = week.days[j];
        let classString = 'table__cell';
        const currentDate = new Date();
        const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
        const isAlternate = week.week % 2 === 0;
        if (isToday) {
          classString = `${classString} table__cell_today`;
        }
        if (isWeekend) {
          classString = `${classString} table__cell_weekend`;
        }
        if (isAlternate) {
          classString = `${classString} table__cell_alternate`;
        }
        inner = addCell(inner, classString, day.value || '');
      }
      result += `<tr>${inner}</tr>`;
    }
    return result;
  };
// Only edit above
const current = new Date()// The current date is set to a variable current, and the month and year are displayed in the page title using MONTHS and current.
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`
const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
// The data is generated using createData, and the HTML table is generated using createHtml, and inserted into the page using querySelector.





 
 
