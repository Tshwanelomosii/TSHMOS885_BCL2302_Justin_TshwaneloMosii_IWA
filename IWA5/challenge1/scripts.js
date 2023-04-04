const FREE_WARNING = 'Free shipping only applies to single customer orders' // added const  to  define variables 
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence' //added G in warning typo error and added const  to  define variables 
const 	NONE_SELECTED = '0' // added const to  define variables 
let location = 'RSA'
let shipping = 0 
let currency = '$' || 'R'
const customers = '1'
let  calcShipping = null 




if (location) {
	shipping === 400 && currency === 'R' 
	

location = 'NAM' //declared location as NUM
if (location) {
	 shipping = 600 && currency === '$' //added currency value and equal sign 
}

else {
	shipping = 800 && currency === '$' //added currency value and equal sign 
}
}

let shoes = 300 * 1
let toys = 100 * 5  //added equal sign
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2  //added equal sign
let pens = 5 * NONE_SELECTED 


if (shoes + batteries + pens + shirts >= 1000 && currency === 'R' || 60 && currency === '$' ) {
	location = 'NAM'
	if (location && customers < 2) {

		location = 'RSA' // declared RSA 
		if (location)
		shipping = 0
		}
}


if (shipping == 0 && customers !== 1) {
	console.log(FREE_WARNING)

	location = 'NK' //declared NK
	if(location){
		currency = null
		console.log(BANNED_WARNING)
	}

}


    console.log('price', currency, shoes + batteries + pens + shirts + shipping)


