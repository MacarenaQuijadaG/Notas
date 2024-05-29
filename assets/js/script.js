// CREANDO VARIABLE EN HTML
var nota1HTML = document.getElementById("HTML1");
var nota2HTML = document.getElementById("HTML2");
var nota3HTML = document.getElementById("HTML3");

//CREANDO VARIABLE CSS

var nota1CSS = document.getElementById("CSS1");
var nota2CSS = document.getElementById("CSS2");
var nota3CSS = document.getElementById("CSS3");

//CREANDO VARIABLE EN JS

var nota1JS = document.getElementById("JS1");
var nota2JS = document.getElementById("JS2");
var nota3JS = document.getElementById("JS3");

// CREANDO VARIABLES DE PROMEDIOS

var HTMLPromedio = document.getElementById("HTMLPromedio");
var CSSPromedio = document.getElementById("CSSPromedio");
var JSPromedio = document.getElementById("JSPromedio");

//INGRESO DE NOTA HTML

nota1HTML = Number(prompt("Ingrese nota 1 HTML"));
nota2HTML = Number(prompt("Ingrese nota 2 HTML"));
nota3HTML = Number(prompt("Ingrese nota 3 HTML"));

//INGRESO DE NOTA EN CSS

nota1CSS = Number(prompt("Ingrese nota 1 CSS"));
nota2CSS = Number(prompt("Ingrese nota 2 CSS"));
nota3CSS = Number(prompt("Ingrese nota 3 CSS"));

//INGRESO DE NOTAS EN JS

nota1JS = parseFloat(prompt("Ingrese nota 1 JS"));
nota2JS = parseFloat(prompt("Ingrese nota 2 JS"));
nota3JS = parseFloat(prompt("Ingrese nota 3 JS"));

//OPERACION DE OBTENCION DEL PROMEDIO

HTMLPromedio = ((nota1HTML + nota2HTML + nota3HTML) / 3).toFixed(2);
CSSPromedio = ((nota1CSS + nota2CSS + nota3CSS) / 3).toFixed(2);
JSPromedio = ((nota1JS + nota2JS + nota3JS) / 3).toFixed(2);

//IMPRIMIR POR PANTALLA EL RESULTADO

console.log("Promedio HTML: ", HTMLPromedio);
console.log("Promedio CSS: ", CSSPromedio);
console.log("Pomedio JS: ", JSPromedio);

//CONVERCION A MOSTRAR EN LA TABLA EN COLUMNA HTML

HTML1.innerHTML = nota1HTML;
HTML2.innerHTML = nota2HTML;
HTML3.innerHTML = nota3HTML;

//CONVERCION A MOSTRAR EN LA TABLA EN LA COLUMNA CSS

CSS1.innerHTML = nota1CSS;
CSS2.innerHTML = nota2CSS;
CSS3.innerHTML = nota3CSS;

//CONVERCION A MOSTRAR EN LA TABLA EN LA COLUMNA JS

JS1.innerHTML = nota1JS;
JS2.innerHTML = nota2JS;
JS3.innerHTML = nota3JS;

//CONECTAR LA COLUMNA CON LAS NOTAS INGRESADAS

HTMLx.innerHTML = HTMLPromedio;
CSSx.innerHTML = CSSPromedio;
JSPx.innerHTML = JSPromedio;