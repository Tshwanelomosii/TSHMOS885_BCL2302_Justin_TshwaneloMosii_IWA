const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo ={
	name : leoName,                                            //removed equal sign and added semi- colons
	balance : leoBalance,                                     //removed equal sign and added semi- colons
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',       //removed equal sign and added semi- colons
	age : 24,                                                //removed equal sign and added semi- colons
	address : {                                             //removed equal sign and added semi- colons
		number : leoNumber,                                  //removed equal sign and added semi- colons
		street : leoStreet,                                  //removed equal sign and added semi- colons
		postalCode : leoPostal,                                //removed equal sign and added semi- colons
	}
}

const sarah ={
	name : sarahName + sarahSurname,
	age : 62,
	accessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8',                //added Capital ID and added string
	balance : sarahBalance,
	address : {
		number : sarahNumber,
		street : sarahStreet,
		postalCode : sarahPostal,
	}
}                                                                         //added curley brackets

console.log(leo,leoNumber,leoStreet,leoPostal)
console.log(sarah,sarahNumber,sarahStreet,sarahPostal)
//console.log(leo, leo[address][postal-code])
//console.log(sarah, sarah[address][postal-code])