function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while(numero > 10 )
	{
		alert("intente otra vez");

		numero = prompt("ingrese un número entre 0 y 10.");

	}

	alert("usted ingreso un numero entre el 0 y el 9");
}//FIN DE LA FUNCIÓN