/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreingresado;
	var edaIngresada;

	nombreingresado = document.getElementById('elNombre').value;

	edaIngresada = document.getElementById('laEdad').value;

	alert("Usted se llama " + nombreingresado + " y tiene " + edaIngresada + " años.");

}

