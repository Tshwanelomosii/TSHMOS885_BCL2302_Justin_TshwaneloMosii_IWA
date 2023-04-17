const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
};

const christmas = 6;
const futureId = 9;

// check if futureId has a holiday assigned to it, if not log the message
if (!holidays[futureId]) {
  console.log(`ID ${futureId} not created yet`);
} else {
  console.log(holidays[futureId].name);
}

// create a copy of the Christmas object with the name changed to 'X-mas Day' and the time changed to midnight
const copied = {...holidays[christmas]};
copied.name = 'X-mas Day';
copied.date.setHours(0, 0, 0, 0);

// check if the new date is earlier than the current Christmas date
const isEarlier = copied.date.getTime() < holidays[christmas].date.getTime();
console.log('New date is earlier:', isEarlier);

// log the changes made to the copied object
console.log('ID change:', false);
console.log('Name change:', copied.name);
console.log('Date change:', copied.date.toLocaleDateString('en-US'));

// get the first and last holiday of the year
const firstHoliday = Object.values(holidays)
  .sort((a, b) => a.date - b.date)
  .find(holiday => holiday.date.getFullYear() === currentYear);

const lastHoliday = Object.values(holidays)
  .sort((a, b) => b.date - a.date)
  .find(holiday => holiday.date.getFullYear() === currentYear);

// format the dates as DD/MM/YYYY and log them
const formatDate = date => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
};

console.log('First holiday:', formatDate(firstHoliday.date));
console.log('Last holiday:', formatDate(lastHoliday.date));

// get a random holiday date and format it
const randomHoliday = Object.values(holidays)[Math.floor(Math.random()) * Object.values(holidays)]























































































































































































