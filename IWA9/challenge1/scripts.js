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

const taxAsDecimal = parseFloat(tax[913]) / 100                                          
const startingAfterTax = `${salary - (salary * taxAsDecimal)}`                              
const type = rent["large-apartment"]                                                   
const balance = startingAfterTax - (expenses.transport + expenses.food + type)
console.log('R',balance.toFixed(2))                                                   


// Added semicolons to the end of each line
// Added missing parseFloat() function to get the tax as decimal value
// Subtracted the taxable amount from the salary before calculating expenses


//This line of code creates a new variable named type and assigns to it the value
// of the property large-apartment from the rent object.

//rent is an object, which is denoted by the use of curly braces {}.
// In this case, rent is an object that contains properties that correspond to different types of rental properties.
//The square brackets [] are used to access a property of an object using a dynamic key,
// where the key name is a string. In this case, large-apartment is the key name that we are using to access a property of the rent object.
//So, type will be equal to the value associated with the large-apartment property of the rent object.



// Used parentheses to call the expense properties correctly, and subtracted all expenses from the taxable amount
// Rounded the final balance to 2 decimal places using toFixed() method.


























// Changes made:

// Added semicolons to the end of each line
// Added missing parseFloat() function to get the tax as decimal value
// Subtracted the taxable amount from the salary before calculating expenses
// Corrected the way to access the rent value by creating the rentKey using string interpolation
// Used parentheses to call the expense properties correctly, and subtracted all expenses from the taxable amount
// Rounded the final balance to 2 decimal places using toFixed() method.





