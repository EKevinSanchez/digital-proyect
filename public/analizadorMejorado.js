function analizador() {
    var expresion = document.getElementById("expresion").value;
    var resultado = document.getElementById("resultado");
    limpiarResultado();
    var array = expresion.split(/\s+/);
    /* var array = expresion.innerHTML.split(/\s+/); */

    for (var i in array) {
        for (let [key, value] of expresiones) {
            if (value.test(array[i])) {
                resultado.innerHTML =
                resultado.innerHTML + array[i] + " es " + key + "\n";
                //para que no siga buscando
                break;
            }
        }
    }
}

function limpiarResultado() { document.getElementById("resultado").innerHTML = ""; }

let expresiones = new Map();
expresiones.set("palabraReservada", /(for|while|if|true|false|else|case|break)/);
expresiones.set("comparacion", /(==|<|>|>=|<=|!=)/);
expresiones.set("parentesisApertura", /^[(]$/);
expresiones.set("parentesisCierre", /^[)]$/);
expresiones.set("constante", /^[a-z]$/);
expresiones.set("numero", /^[1-9]|[0-9]$/);
expresiones.set("binario", /^[bin][0-1]+$/);
expresiones.set("multiplicacion", /^[*]$/);
expresiones.set("suma", /^[+]$/);
expresiones.set("resta", /^[-]$/);
expresiones.set("division", /^[/]$/);
expresiones.set("asignacion", /^[=]$/);
expresiones.set("variable", /^[a-z][a-z0-9]*$/);
