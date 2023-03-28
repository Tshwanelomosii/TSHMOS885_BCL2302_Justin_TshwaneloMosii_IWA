const MAX_NUMBER =10
const MIN_NUMBER=4
const number = document.querySelector('[data-key=number]')
const add =document.querySelector('[data-key=subtract]')
const subtract =document.querySelector('[data-key=add]')

const subtracthandler = () =>{
    const newValue = parseInt(number.value) -1
    number.value= newValue
    if(number.value<= MIN_NUMBER){ 
        subtract.disabled=true
    } else{
        subtract.disabled=false
    }
}
const addhandler = () =>{
    const newValue = parseInt(number.value) +1
    number.value= newValue

    if(number.value>= MAX_NUMBER){ 
        add.disabled=true
    } else{
        add.disabled=false
    }
}
subtract.addEventListener('click',subtracthandler);
add.addEventListener('click',addhandler);


