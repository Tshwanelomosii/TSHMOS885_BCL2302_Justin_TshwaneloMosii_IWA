let state = 'idle'               
let user = null
let calculated = '1'

// Only allowed to change below


//This function converts the calculated variable from a string to a number (if it is currently a string)
// and then increments it by 1. It does this by first checking if 
//calculated is a string using the typeof operator. If it is a string,
// it converts it to a number using parseFloat(). If it is already a number, it just keeps it as-is.
// It then increments the resulting value by 1 and sets calculated to the new value.
const  logCalc = () => { 
    const isString = typeof calculated === 'string' //changed number-string
    const calculatedAsNumber = isString ? parseFloat(calculated)  : calculated //changed parsenumber to parsefloat
    calculated = calculatedAsNumber + 1 
}

//This function calls logCalc() to update the calculated variable, and then checks the value of calculated.
// If it is greater than 2, it sets the user variable to the string 'John'.
// If it is greater than 2, it also sets the state variable to 'requesting'. If it is greater than 3,
// it sets the state variable back to 'idle'.


const calcUser = () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}



//This function checks if user is truthy (i.e. not null, undefined, 0, '', false, or NaN)
// and if state is 'requesting'. If both of these conditions are true, 
//it logs a message to the console containing the value of user and calculated
const  checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()