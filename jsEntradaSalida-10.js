/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado;
	var resultado;
	var descuento;

	importeIngresado = document.getElementById('importe').value;
	importeIngresado = parseInt(importeIngresado);

	descuento = importeIngresado *0.25;

	resultado = importeIngresado - descuento;

	document.getElementById('resultado').value = resultado;
}
