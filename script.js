/*Funcion para obtener el valor ingresado en un input*/
function getOperand(id) {
    
    if ((document.querySelector(id).value) === ``) {
        alert("ERROR: Los operandos ingresados no son válidos");
        return;
    }
    else {
        return Number(document.querySelector(id).value); 
    } 
   
}
/*Funcion para obtener el valor elegido en select*/
function getOperator() {
    return document.querySelector("#operators").value;
}
/*Funcion para cualcular, validar e imprimir el resultado en pantalla*/
function calculate() {
    let operand1 = (getOperand("#operand_1"));
    let operand2 = (getOperand("#operand_2"));
    let operator = getOperator();
    let result;

    if (isNaN(operand1) || isNaN(operand2)) {
        alert("ERROR: Los operandos ingresados no son válidos");
       return;
    }

    switch (operator) {
        case "addition":
            result = operand1 + operand2;
            break;
        case "subtraction":
            result = operand1 - operand2;
            break;
        case "multiplication":
            result = operand1 * operand2;
            break;
        case "division":
            if (operand2 === 0) {
                alert("ERROR: No es posible dividir por 0");
                return;
            }
            result = operand1 / operand2;
            break;
        default:
            alert("ERROR: Debes elegir una operacion para realizar");
            return;
    }
    document.querySelector("#result_text").innerHTML = `El resultado es:`;
    document.querySelector("#show_result").innerHTML = `${result}`; 

}