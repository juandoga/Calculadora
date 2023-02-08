var cifra = "";
var valor = "";
var acumulado = 0;
var p_operacion = true;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;

function display_numeros(numero) {
    document.getElementById("display").value = cifra + numero;
    cifra = document.getElementById("display").value;
}

function operacion(operador) {
    if (operador == "+") {
        if (p_operacion == false) {
            if (restar) {
                acumulado = acumulado - parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else if (multiplicar) {
                acumulado = acumulado * parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else if (dividir) {
                acumulado = acumulado / parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else {
                acumulado = acumulado + parseInt(cifra);
                document.getElementById("display").value = acumulado;
            }
            document.getElementById("display2").value = acumulado + operador;
        } else {
            acumulado = parseInt(cifra);
            p_operacion = false;
            document.getElementById("display2").value = acumulado + operador;
        }

        cifra = "";
        sumar = true;
        multiplicar = false;
        dividir = false;
        restar = false;

    } else if (operador == "-") {
        if (p_operacion == false) {
            if (sumar) {
                acumulado = acumulado + parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else if (multiplicar) {
                acumulado = acumulado * parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else if (dividir) {
                acumulado = acumulado / parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else {
                acumulado = acumulado - parseInt(cifra);
                document.getElementById("display").value = acumulado;
            }
            document.getElementById("display2").value = acumulado + operador;
        } else {
            acumulado = parseInt(cifra);
            p_operacion = false;
            document.getElementById("display2").value = acumulado + operador;
        }
        cifra = "";
        sumar = false;
        multiplicar = false;
        dividir = false;
        restar = true;
    } else if (operador == "*") {
        if (p_operacion == false) {
            if (sumar) {
                acumulado = acumulado + parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else if (restar) {
                acumulado = acumulado - parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else if (dividir) {
                acumulado = acumulado / parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else {
                acumulado = acumulado * parseInt(cifra);
                document.getElementById("display").value = acumulado;
            }
            document.getElementById("display2").value = acumulado + operador;
        } else {
            acumulado = parseInt(cifra);
            p_operacion = false;
            document.getElementById("display2").value = acumulado + operador;
        }

        cifra = "";
        sumar = false;
        restar = false;
        dividir = false;
        multiplicar = true;
    } else if (operador == "/") {
        if (p_operacion == false) {
            if (sumar) {
                acumulado = acumulado + parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else if (multiplicar) {
                acumulado = acumulado * parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else if (restar) {
                acumulado = acumulado - parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else {
                acumulado = acumulado / parseInt(cifra);
                document.getElementById("display").value = acumulado;
            }
            document.getElementById("display2").value = acumulado + operador;
        } else {
            acumulado = parseInt(cifra);
            p_operacion = false;
            document.getElementById("display2").value = acumulado + operador;
        }

        cifra = "";
        sumar = false;
        restar = false;
        dividir = true;
        multiplicar = false;
    }
}

function resultado() {
    if (sumar) {
        document.getElementById("display").value = acumulado + parseInt(cifra);
        document.getElementById("display2").value += +cifra;
    } else if (restar) {
        document.getElementById("display").value = acumulado - parseInt(cifra);
        document.getElementById("display2").value += +cifra;
    } else if (multiplicar) {
        document.getElementById("display").value = acumulado * parseInt(cifra);
        document.getElementById("display2").value += +cifra;
    } else if (dividir) {
        document.getElementById("display").value = acumulado / parseInt(cifra);
        document.getElementById("display2").value += +cifra;
    }

    acumulado = document.getElementById("display").value;
    cifra = 0;
}

function ac() {
    document.getElementById("display").value = "";
    document.getElementById("display2").value = "";
    numero = "";
    cifra = "";
    acumulado = 0;
}