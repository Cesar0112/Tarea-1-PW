function validateNumber(){
    var inputNum = document.getElementById("numero"); //obtener el numero del grupo
    var valueNum = inputNum.value;
    if(isNaN(valueNum) || valueNum < 1){ //validacion
       inputNum.value= " ";
    }
    
}