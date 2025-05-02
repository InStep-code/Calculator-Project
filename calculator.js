function valueDisplay(value){
    let displayBox = document.getElementsById('display');


    if (displayBox.value.length < 10){
        displayBox.value += value;
    }
}

//Function to clear the display

function clearAllDisplay(){
    document.getElementById('display').value = '';
}

//functiont deletedisplay 
function deleteDisplay() {
    display.value = display.value.toString().slice(0. -1);
}

// Equation button
const calculateBtn = document.getElementById('display');
function calculateBtn(){
    try{
        if(display.value.trim() === ''){
            display.value = '0';
        } else {
            display.value = eval(display.value);
        }
    } catch(error){
        display.value   = 'Syntax Error';
    }
}

// calculateBtn.addEventListener('click', function(){
  
// })