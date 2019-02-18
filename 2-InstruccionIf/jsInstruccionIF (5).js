function mostrar()
/*Al ingresar una edad solo
debemos informar si la persona 
NO es adolescente.*/
{
//tomo la edad  

	var edadIngresada;

	edadIngresada= document.getElementById('edad').value;

	if(!(edadIngresada>=13 && edadIngresada<=17))
	{
		alert("Usted no es adolescente.");
	}


}//FIN DE LA FUNCIÓN