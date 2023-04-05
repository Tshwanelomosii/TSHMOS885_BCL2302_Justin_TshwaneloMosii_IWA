const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay === 0 && minuteOfDay === 0 ) { //removed null
	const taxAsDecimal = parseFloat(tax) / 100 //used parsefloat to include decimals
    const startingAfterTax = salary - (salary * taxAsDecimal)
	let balance = startingAfterTax - transport - food - rent //typo error and startingaftertax

    console.log('R',balance.toFixed(2))
}
	
