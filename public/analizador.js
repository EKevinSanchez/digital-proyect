function analizador() {
    var expresion = document.getElementById("expresion").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    var array = expresion.split(/\s+/);
    /* var array = expresion.innerHTML.split(/\s+/); */

    for (var i in array) {
        if (/^[a-z]$/.test(array[i])) {
            resultado.innerHTML =
            resultado.innerHTML + array[i] + " es una constante\n";
        } else if (/^[1-9]|[0-9]$/.test(array[i])) {
            resultado.innerHTML = resultado.innerHTML + array[i] + " es un numero\n";
        } else if (/^[bin][0-1]+$/.test(array[i])) {
            resultado.innerHTML = resultado.innerHTML + array[i] + " Binario\n";
        } else if (/^[*]$/.test(array[i])) {
            resultado.innerHTML =
            resultado.innerHTML + array[i] + " es una multiplicacion\n";
        } else if (/^[+]$/.test(array[i])) {
            resultado.innerHTML = resultado.innerHTML + array[i] + " es una Suma\n";
        } else if (/^[-]$/.test(array[i])) {
            resultado.innerHTML = resultado.innerHTML + array[i] + " es una Resta\n";
        } else if (/^[/]$/.test(array[i])) {
            resultado.innerHTML =
            resultado.innerHTML + array[i] + " es una Division\n";
        } else if (/^[=]$/.test(array[i])) {
            resultado.innerHTML =
            resultado.innerHTML + array[i] + " es una Asignacion\n";
        } else if (/(==|<|>|>=|<=|!=)/.test(array[i])) {
            resultado.innerHTML =
            resultado.innerHTML + array[i] + " es una comparacion\n";
        } else if (/^[(]$/.test(array[i])) {
            resultado.innerHTML =
            resultado.innerHTML + array[i] + " es un parentesis de apertura\n";
        } else if (/^[)]$/.test(array[i])) {
            resultado.innerHTML =
            resultado.innerHTML + array[i] + " es un parentesis de cierre\n";
        } else if (/(for|while|if|true|false|else|case|break)/.test(array[i])) {
            resultado.innerHTML =
            resultado.innerHTML + array[i] + " es una palabra reservada\n";
        } else if (/^[a-z][a-z0-9]*$/.test(array[i])) {
            resultado.innerHTML =
            resultado.innerHTML + array[i] + " es una variable\n";
        }
    }
}

function limpiarResultado() { document.getElementById("resultado").innerHTML = ""; }
