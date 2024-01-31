let inputTemp;
function convert(){
if(document.getElementById('far').checked){
    inputTemp=document.getElementById('tempvalue').value 
    farenheit()
    }
    else{
        inputTemp=document.getElementById('tempvalue').value 
    celsius()
    }
} 

function farenheit(){
   document.getElementById('f').innerHTML= ((Number(inputTemp) - 32)*(5/9)).toLocaleString(
    undefined,{style:"unit",unit:"fahrenheit"} );
}
function celsius(){
    document.getElementById('f').innerHTML=(Number(inputTemp*(9/5))+32).toLocaleString(
        undefined,{style:"unit",unit:"celsius"} );;
}
