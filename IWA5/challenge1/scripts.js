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
	
	if (customers !== 1 && (location === 'RSA' || location === 'NAM') )
	console.log(FREE_WARNING)
	shipping = 0 

}

console.log('price', 'R', shoes + batteries + pens + shipping + shirts + toys)































































/*const FREE_WARNING = 'Free shipping only applies to single customer orders' // added const  to  define variables 
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence' //added G in warning typo error and added const  to  define variables 
const 	NONE_SELECTED = '0' // added const to  define variables 
let location = 'hello'// declared RSA 
let shipping = 400; 
let calcShipping = undefined; //added undefined to skip at parts where customers get free shippin
let currency = 'R';
let customers = '1'; 
let shoes = 300 * 1;
let toys = 100 * 5;  //added equal sign
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2 ; //added equal sign
let pens = 5 * NONE_SELECTED; 
let price = ('R', shoes+toys+batteries+pens+shirts+shipping); //COMBINED all aspects and declared it as price

if (location) {
	shipping === 400 && currency === 'R' 
}

//declared location as NUM
if (location = 'NAM') {
	 shipping = 600 && currency === '$' //added currency value and equal sign 
}else  {                                //location !== 'NUM' || 'RSA'
	shipping = 800                      //added currency value and equal sign 
};



if ( price > 1000 && location === 'NAM' && customers < 2 ) {
	if(location === 'RSA'){
		shipping = 0
	}else{
		shipping = calcShipping;
	}
}
	



if (shipping === 0 && customers !== 1) {
	console.log(FREE_WARNING)
}else if ( location === 'NK') {
		console.log(BANNED_WARNING)
		}else{console.log('price', currency, price)} */



