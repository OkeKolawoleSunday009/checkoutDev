var buttonPlus  = document.querySelectorAll('.plus_btn');
var buttonMinus = document.querySelectorAll('.minus_btn');
var tp = document.querySelector('.total');
var tip=  document.querySelector('.quantity');
tip.textContent = "$20.0";


function increaseBtn(e){
    let input = e.target.nextElementSibling;
    console.log(input);
    let value = parseInt(input.value);
    value++;
    input.value = value;
    let shipping = 20;
    tp.textContent = `$${value *= shipping}`;


}

function decreaseBtn(e){
    let input = e.target.previousElementSibling;
    console.log(input);
    let value = parseInt(input.value);
    
    if( value == 0){
        tp.textContent = "$0";
    } else{
        value--;
        input.value = value;
        let shipping = 20;
        tp.textContent = `$${value *= shipping}`;
    }
    
   
    
}
buttonPlus.forEach(btn => btn.addEventListener('click', increaseBtn));
buttonMinus.forEach(btn => btn.addEventListener('click', decreaseBtn));