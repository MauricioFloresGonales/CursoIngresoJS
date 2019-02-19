function mostrar()
/*Bienvenidos (SWITCH +IF). 
Se ingresa una hora. 
Si está entre las 6 y las 11 mostrar:"es de mañana", 
si es desde las 12 a las 19: "es de tarde", 
de lo contrario informar que es de noche. 
Informar si la hora no es válida. 
Si es de noche y la hora es menor a 24 mostrar se debe
agregar el mensaje : "a dormir". */
{
	var hora;
	var mensaje;

	hora= document.getElementById('laHora').value;

	switch(hora)
	{
		case"6":
		case"7":
		case"8":
		case"9":
		case"10":
		case"11":
			mensaje="es de mañana"
		if(hora>=12 && hora<=19)
		{
			mensaje="es de tarde"
		}else{
			mensaje="es de noche"

			if(hora<24)
			{
				mensaje= "a dormir"
			}
		}//if(hora>=12 && hora<=19)

		if(hora>24)
		{
			mensaje="no existe"
		}
	}	

	alert(mensaje);
}
