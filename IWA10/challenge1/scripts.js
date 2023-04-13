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
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = holidays[6];
const futureId = 9;

// Do not change code above this comment

if (holidays[futureId]){
    console.log(holidays[futureId].name)
}else {
    console.log(`ID ${futureId} not created yet`)
} ;
    


const copied = { ...christmas };
copied.name = 'X-mas Day';
copied.date.setHours(0, 0, 0, 0);
const isEarlier = copied.date.getTime() < christmas.date.getTime();
console.log('New date is earlier:', isEarlier);

if (isEarlier) {
  console.log('ID change:', false);
  console.log('Name change:', copied.name);
  console.log('Date change:', copied.date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }));
  holidays[christmas.id] = copied;
} else {
  console.log('ID change:', false);
  console.log('Name change:', false);
  console.log('Date change:', false);
}

// Output the first holiday in the year
const firstHoliday = Object.values(holidays).reduce((a, b) => a.date < b.date ? a : b);
console.log(`First holiday: ${firstHoliday.date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}`);

// Output the last holiday in the year
const lastHoliday = Object.values(holidays).reduce((a, b) => a.date > b.date ? a : b);
console.log(`Last holiday: ${lastHoliday.date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}`);

// Output a randomly selected holiday
const randomHoliday = Object.values(holidays)[Math.floor(Math.random() * Object.keys(holidays).length)];
console.log(`Random holiday: ${randomHoliday.date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}`);
