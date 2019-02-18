function mostrar()
{
//tomo la edad  

	var edadIngresada;

	edadIngresada= document.getElementById('edad').value;

	if(edadIngresada>=18)
	{
		alert("Usted es mayor de edad.");
	
	}
	else
	{
		if(edadIngresada<13)
		{
			alert("Usted es menor de edad.");
		}
		else
		{
			alert("Usted es adolescente.");
		}
	}
		
	



}//FIN DE LA FUNCIÓN