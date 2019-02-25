function mostrar()
{
/*
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
*/



	var clave = prompt("ingrese el número clave.");

	while(clave != "utn750")
	{
		alert("contraseña incorrecta");

		clave = prompt("ingrese el número clave.");

	}

	alert("contreaseña correcta");
}//FIN DE LA FUNCIÓN
