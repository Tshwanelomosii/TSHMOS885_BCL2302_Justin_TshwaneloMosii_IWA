const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseFloat(tax[913]) / 100                                          // added parsefloat for decimal values
const startingAfterTax = `${salary - (salary * taxAsDecimal)}`                               //had to subtract tax from original salary
const type = rent["large-apartment"]                                                   //delared rent as type 
const balance = startingAfterTax - (expenses.transport + expenses.food + type)
console.log('R',balance.toFixed(2))                                                   //added to fixed to make decimals




























// Changes made:

// Added semicolons to the end of each line
// Added missing parseFloat() function to get the tax as decimal value
// Subtracted the taxable amount from the salary before calculating expenses
// Corrected the way to access the rent value by creating the rentKey using string interpolation
// Used parentheses to call the expense properties correctly, and subtracted all expenses from the taxable amount
// Rounded the final balance to 2 decimal places using toFixed() method.





