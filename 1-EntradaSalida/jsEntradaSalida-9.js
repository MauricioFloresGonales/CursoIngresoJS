/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoIngresado; 
	var aumento;
	var sueldoFinaL;

	sueldoIngresado= sueldo.value;
	sueldoIngresado= parseInt(sueldoIngresado);

	aumento=sueldoIngresado*10/100;
	console.log(aumento);

	sueldoFinaL=sueldoIngresado+aumento;

	sueldoFinaL="el sueldo es de " + sueldoFinaL;
	resultado.value= sueldoFinaL;
	

	
}
