const currentYear = new Date().getFullYear() // Create a constant variable "currentYear" and assign the
                                             // current year to it using the  "Date()" method.

const holidays = {// Create an object "holidays" which contains several holiday dates with their corresponding names and ids.
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
}


const christmas = 6; // Create a constant variable "christmas" and assign the value "6" to it.
const futureId = 9;  // Create a constant variable "futureId" and assign the value "9" to it.


// check if item has been assigned to 9 key
if (holidays[futureId]) { // Use an "if...else" statement to check if the "futureId" key exists in the "holidays" object. If it exists,
  console.log(holidays[futureId].name); // log the corresponding holiday name to the console. If it doesn't exist, 
} else {
  console.log(`ID ${futureId} not created yet`);//log "ID 9 not created yet" to the console.
}
//create a new date for the 6th object
let copied = { ...holidays[christmas] };  // Use the spread syntax to copy the "holidays[christmas]" object into a new "copied" object.
const copiedDate = copied.date.getTime();  // Create a constant variable "copiedDate" and assign the timestamp of the date in the "copied" object "getTime()" method
const christmasDate = holidays[christmas].date.getTime(); // Create a constant variable "christmasDate" and assign the timestamp of the date in the "holidays[christmas]" object 
copied.name = "x-mas"
copied.date = new Date(`25 December ${currentYear} 00:00`)

//check if the date copied is earlier then the old date
let isEarlier;
if (copiedDate < christmasDate) {// Use an "if...else" statement to check if the "copiedDate" is earlier than the "christmasDate". If it is, assign 
  isEarlier = true;              //the boolean value "true" to the variable "isEarlier". Otherwise, assign the boolean value "false" to "isEarlier"
} else {
  isEarlier = false;
}
// log the changes made to copied object
console.log(`ID change: false`);// Log three lines to the console showing the changes made to the "copied" object: "ID change: false", "Name change: [copied name]", 
console.log(`Name change: ${copied.name}`);  //and "Date change: [copied date]".
console.log(`Date change: ${copied.date}`);



// output first and last holiday of the year in DD/MM/YYYY format
const firstHolidayTimestamp = Math.min( //create a const value firstholidaytimestamp"Math.min()" method to find the minimum timestamp value among all the holiday dates in the "holidays" object.
new Date(holidays[0].date).getTime(),   // Assign this value to a constant variable "firstHolidayTimestamp".
new Date(holidays[1].date).getTime(),
new Date(holidays[2].date).getTime(),
new Date(holidays[3].date).getTime(),
new Date(holidays[4].date).getTime(),
new Date(holidays[5].date).getTime(),
new Date(holidays[6].date).getTime(),
new Date(holidays[7].date).getTime(),
new Date(holidays[8].date).getTime(),
)
const lastHolidayTimestamp = Math.max( //create a const value lastholidaytimestamp "Math.max()" method to find the maximum timestamp value among all the holiday dates 
  new Date(holidays[0].date).getTime(), //in the "holidays" object. Assign this value to a constant variable "lastHolidayTimestamp"
  new Date(holidays[1].date).getTime(),
  new Date(holidays[2].date).getTime(),
  new Date(holidays[3].date).getTime(),
  new Date(holidays[4].date).getTime(),
  new Date(holidays[5].date).getTime(),
  new Date(holidays[6].date).getTime(),
  new Date(holidays[7].date).getTime(),
  new Date(holidays[8].date).getTime(),
  )

const firstHoliday = new Date(firstHolidayTimestamp)  //"Date()" method to convert "firstHolidayTimestamp" to a human-readable date format.Assign this value to a constant variable "firstHoliday"
const firstDay = firstHoliday.getDate().toString().padStart(2, 0) // Use the JavaScript built-in "padStart()" method to add leading zeros to the day and month values of "firstHoliday".Assign these values to constant variables "firstDay" and "firstMonth", respectively.
const firstMonth = (firstHoliday.getMonth() + 1).toString().padStart(2, 0)
console.log(`${firstDay}/${firstMonth}/${currentYear}`) // Log a line to the console showing the first holiday date of the year in DD/MM/YYYY format.

const lastHoliday = new Date(lastHolidayTimestamp)
const lastDay = lastHoliday.getDate().toString().padStart(2, 0)
const lastMonth = (lastHoliday.getMonth() + 1).toString().padStart(2, 0)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

// output a random holiday date in DD/MM/YYYY format
const randomHolidayIndex = Math.floor(Math.random() * Object.keys(holidays).length);// Create a constant variable "randomHolidayIndex" and assign a random integer value between 0 and the length of the "holidays".object using the JavaScript built-in "Math.random()" and "Object.keys()" methods. 
const randomHoliday = Object.values(holidays)[randomHolidayIndex];// Use the "randomHolidayIndex" variable to select a random holiday object from the "holidays" object using the "Object.values()" method. Assign this value to a constant variable "randomHoliday".
console.log(randomHoliday) // Log the "randomHoliday" object to the console.







































