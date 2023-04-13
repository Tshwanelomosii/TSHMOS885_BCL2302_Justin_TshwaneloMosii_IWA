const primaryPhone = 'O748105141' 
const secondaryPhone = '0219131568'

// Only change below this line

// const primaryValid = typeof number == primaryPhone 
const primaryValid = parseInt(primaryPhone) ? true : false
const secondaryValid = parseInt(secondaryPhone) ? true : false

// const secondaryValid = typeof number !== secondaryPhone //added strictly equal sign

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )