function mostrar()
{
//tomo la edad  

	var edadIngresada;

	edadIngresada= edad.value;
	edadIngresada= parseInt(edadIngresada);

	if(!(edadIngresada>12 && edadIngresada<18))
	{
		alert("usted  no es adolescente");
	}

}//FIN DE LA FUNCIÓN