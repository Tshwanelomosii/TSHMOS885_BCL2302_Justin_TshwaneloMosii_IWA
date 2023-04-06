const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
const FREE_WARNING = 'Free shipping only applies to single customer orders'

const customers = 1
let location = 'RSA'
let currency = null
let shipping = null

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED 




if (location === 'RSA' ) { 
	shipping = 400 
	 currency === 'R' }

else if  (location === 'NAM'){
	shipping = 600 
	currency == '$' 
}
	
else if (location === 'NK'){
	shipping = null
	currency = null
	console.log(BANNED_WARNING)
}
		
else  {
	currency === '$'
	shipping = 800
}
 



if (shoes + toys + batteries + pens + shirts >= 1000  ) {
	
	if (customers === 1 && (location === 'RSA' || location === 'NAM') )
	console.log(FREE_WARNING)
	shipping = 0 

}

console.log('price', 'R', shoes + batteries + pens + shipping + shirts + toys)































































