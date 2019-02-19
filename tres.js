function mostrar()
{
	var precio;
	var porcentaje;
	var resultadoFinal;
	var descuento;

	precio= prompt("Ingrese el precio", "Ingrese precio aquí");
	precio=parseInt(precio);
	porcentaje= prompt("ingrese su descuento", "ingrese descuento aquí");
	porcentaje= parseInt(porcentaje);

	descuento= *porcentaje/100
	resultadoFinal= precio - descuento

	document.getElementById('elPrecioFinal').value =resultadoFinal 





}
