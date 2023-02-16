function analizador() {
    var expresion = document.getElementById("expresion").value;
    var resulLet = document.getElementById("restLet");
    var resulDes = document.getElementById("restDes");


    limpiarResultado();


    var data = expresion.toLowerCase()
    var array = data.split(/\s+/);
    /* var array = expresion.innerHTML.split(/\s+/); */

    if (expresion == "") {
        alert("Oye... si tu, no se si sepas, pero ... debes escribir una funcion :^)");
    } else {
        for (var i in array) {
            for (let [key, value] of expresiones) {
                if (value.test(array[i])) {
                    resulLet.innerHTML = resulLet.innerHTML + array[i] + "<br>";
                    resulDes.innerHTML = resulDes.innerHTML + " Es " + key + "<br>";

                    //para que no siga buscando
                    break;
                }
            }
        }
    }
}

function limpiarResultado() {
    //document.getElementById("resultado").innerHTML = "";  
    document.getElementById("restLet").innerHTML = "";
    document.getElementById("restDes").innerHTML = "";
}
function limpiarTodo() {
    var expresion = document.getElementById("expresion").value;
    if (expresion == "") {
        alert("Oye pero... si no hay nada que limpiar, que quieres que limpie!?");
    } else {
        document.getElementById("expresion").value = "";
        document.getElementById("restLet").innerHTML = "...";
        document.getElementById("restDes").innerHTML = "...";
    }
}

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
