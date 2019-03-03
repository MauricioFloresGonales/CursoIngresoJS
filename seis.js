function mostrar()
{
	var hora;

	hora = document.getElementById('laHora').value;

	while(isNaN(hora)==true && hora<24)
	{
		alert("error");
		hora = document.getElementById('laHora').value;

		switch(hora)
	{
		case"6":
		case"7":
		case"8":
		case"9":
		case"10":
		case"11":
			mensaje=("es de mañana");
			break;
		case"12":
		case"13":
		case"14":
		case"15":
		case"16":
		case"17":
		case"18":
		case"19":
			mensaje= ("es de tarde");
			break;
		default:
			mensaje= ("es de noche");

		if(hora>19 && hora<24)
		{
			mensaje= ("a dormir");
		}
	}

	alert(mensaje);
	}

/*	switch(hora)
	{
		case"6":
		case"7":
		case"8":
		case"9":
		case"10":
		case"11":
			mensaje=("es de mañana");
			break;
		case"12":
		case"13":
		case"14":
		case"15":
		case"16":
		case"17":
		case"18":
		case"19":
			mensaje= ("es de tarde");
			break;
		default:
			mensaje= ("es de noche");

		if(hora>19 && hora<24)
		{
			mensaje= ("a dormir");
		}
	}

	alert(mensaje);
*/



 //	EL EJER ESTA MAL

}
