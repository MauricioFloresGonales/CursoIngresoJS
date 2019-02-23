function mostrar()
{

var clave = prompt("ingrese el número clave.");
	var intentos = 0;
	var flag = false;
	while(clave != "UTN750")
	{

		alert("Clave incorrecta. Reintentar.");
		clave = prompt("ingrese el número clave.");
		intentos= intentos+ 1 ;
		if(intentos == 3)
		{
			break;
		}
	}
	if(flag == false)
	{
		alert("Bienvenido al sistema");
	}

	



}//FIN DE LA FUNCIÓN
