function mostrar()
{
//tomo la edad  
	var laHora = document.getElementById('hora').value;

	var mensaje;


switch(laHora)
	{
		case"7":
		case"8":
		case"9":
		case"10":
		case"11":
			mensaje="es de mañana"
			break;
		case"12":
		case"13":
		case"15":
		case"16":
		case"17":
		case"18":
		case"19":
			mensaje="Es de tarde."
			break
		case"0":
		case"1":
		case"2":
		case"3":
		case"4":
		case"5":
		case"6":
		case"20":
		case"21":
		case"22":
		case"23":
		case"24":
			mensaje="Es de noche."
			break;
		default:
			mensaje="la hora no existe."
	}

	alert(mensaje);
	
//preguntar en clase como hacer funcionar sin errores lo siguiente.
/*	switch(laHora)
	{
		case"7":
		case"8":
		case"9":
		case"10":
		case"11":
			alert("es de mañana");
		break;
		
		default:
			alert("Es de tarde.");

		if(laHora>=20 && laHora<=24)
		{
			alert("Es de noche.");

		}else{

			if(laHora>=0 && laHora<=6)
			{
				alert("Es de noche.");
			}else{
				if(laHora>=24)
				{
					alert("la hora no existe.");
				}
			}//if(laHora>=0 && laHora<=6)
		}//if(laHora>=20 && laHora<=24)
	}
*/


}//FIN DE LA FUNCIÓN
