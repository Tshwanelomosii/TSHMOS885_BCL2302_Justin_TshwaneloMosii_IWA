const primaryPhone = 'O748105141' // fixed typo by adding zero instead of letter O
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number !== secondaryPhone //added strictly equal sign

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )