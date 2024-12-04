let num1 = "";
let num2 = "";
let operacion = "";
let tipo = "";
let orden = 0;
let historial = "";

function valor(boton) {
    if (orden == 0) {
        num1 = num1 + boton;
    } else {
        num2 = num2 + boton;
    }
    operacion = operacion + boton;
    mostrarVariableEnLugarEspecifico(operacion, 'resultados');
}

function operador(boton) {
    orden++;
    switch (boton) {
        case '=':
            realizarOperacion(tipo);
            break;
        case 'AC':
            num1 = "";
            num2 = "";
            operacion = "";
            orden = 0;
            mostrarVariableEnLugarEspecifico(operacion, 'resultados');
            break;
        default:
            if (orden == 1) {
                operacion = operacion + " " + boton + " ";
                mostrarVariableEnLugarEspecifico(operacion, 'resultados');
            } else if (orden >= 2) {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                operacion = operacion + " " + boton + " ";
                switch (tipo) {
                    case "/":
                        if (num2 == 0) {
                            operacion = "Error";
                            mostrarVariableEnLugarEspecifico(operacion, 'resultados');
                        } else {
                            num1 = num1 / num2;
                            num2 = "";
                        }
                        break;
                    case "x":
                        num1 = num1 * num2;
                        num2 = "";
                        break;
                    case "-":
                        num1 = num1 - num2;
                        num2 = "";
                        break;
                    case "+":
                        num1 = num1 + num2;
                        num2 = "";
                        break;
                    default:
                        operacion = "Error Como mierda presionas un boton que no existe ?";
                        mostrarVariableEnLugarEspecifico(operacion, 'resultados');
                        break;
                }
                mostrarVariableEnLugarEspecifico(operacion, 'resultados');
            }

            break;
    }
    tipo = boton;
}

function mostrarVariableEnLugarEspecifico(variable, elementoId) {
    var elemento = document.getElementById(elementoId);
    elemento.innerHTML = variable;
}

function realizarOperacion(tipo) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (tipo) {
        case "/":
            if (num2 == 0) {
                operacion = "Error";
                mostrarVariableEnLugarEspecifico(operacion, 'resultados');
            } else {
                operacion = operacion + " = " + (num1 / num2) + " ";
                mostrarVariableEnLugarEspecifico(operacion, 'resultados');
                num1 = num1 / num2;
                num2 = "";
                historial = historial + operacion + "<br>";
                mostrarVariableEnLugarEspecifico(historial, 'texto')
                operacion = num1;
            }
            break;
        case "x":
            operacion = operacion + " = " + (num1 * num2);
            mostrarVariableEnLugarEspecifico(operacion, 'resultados');
            num1 = num1 * num2;
            num2 = "";
            historial = historial + operacion + "<br>";
            mostrarVariableEnLugarEspecifico(historial, 'texto')
            operacion = num1;
            break;
        case "-":
            operacion = operacion + " = " + (num1 - num2);
            mostrarVariableEnLugarEspecifico(operacion, 'resultados');
            num1 = num1 - num2;
            num2 = "";
            historial = historial + operacion + "<br>";
            mostrarVariableEnLugarEspecifico(historial, 'texto')
            operacion = num1;
            break;
        case "+":
            operacion = operacion + " = " + (num1 + num2);
            mostrarVariableEnLugarEspecifico(operacion, 'resultados');
            num1 = num1 + num2;
            num2 = "";
            historial = historial + operacion + "<br>";
            mostrarVariableEnLugarEspecifico(historial, 'texto')
            operacion = num1;
            break;
        default:
            operacion = "Error al momento de igualar";
            mostrarVariableEnLugarEspecifico(operacion, 'resultados');
            break;
    }
    orden = 0;
}