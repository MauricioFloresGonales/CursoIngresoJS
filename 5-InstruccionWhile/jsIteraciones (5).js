function mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo != "f" || sexo != "m")
	{
		alert("incorrecto");

		sexo = prompt("ingrese f ó m .");

		sexo != "f" || sexo != "m"

	}



	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN