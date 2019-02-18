function mostrar()

/*
Al ingresar una edad debemos informar si la 
persona es adolescente, edad entre 13 y 17 años 
(inclusive) .
*/

{
//tomo la edad  
	var edadIngresada;

	edadIngresada= document.getElementById('edad').value;

	if(edadIngresada>=13 && edadIngresada<=17)
	{
		alert("Usted es adolescente.");
	}



}//FIN DE LA FUNCIÓN