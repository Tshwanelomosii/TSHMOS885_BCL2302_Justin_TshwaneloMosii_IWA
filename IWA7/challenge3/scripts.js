const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line



const owed = parseFloat(-1* leoBalance) + parseFloat( -1* sarahBalance)                          //changed parseint to  parsefloat and sdded interplation
const leo = `${leoName } ${(leoSurname).trim()} (Owed :R ${parseFloat (-1* leoBalance).toFixed(2)})\n` //used interpolation and trim to cut spaces
const sarah = `${(sarahName).trim()}  ${sarahSurname} (Owed  :R ${parseFloat(-1* sarahBalance).toFixed(2)})\n \n`     // \n newline 
const total = `\nTotal amount owed: R ${(owed).toFixed(2)}`
const result = leo + sarah + divider + total  + ` \n${divider}`

console.log(result)