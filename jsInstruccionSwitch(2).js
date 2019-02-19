function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
//primera forma.
/*	switch(mesDelAño)
	{
		case"Enero":
			alert("Ya pasamos el frio, ahora calor!!!." );
			break;
		case"Febrero":
			alert("Ya pasamos el frio, ahora calor!!!." );
			break;
		case"Marzo":
			alert("Falta para el invierno." );
			break;
		case"Abril":
			alert("Falta para el invierno." );
			break;
		case"Mayo":
			alert("Falta para el invierno." );
			break;
		case"Junio":
			alert("Falta para el invierno." );
			break;
		case"Julio":
			alert("Abrigate que hace frio." );
			break;
		case"Agosto":
			alert("Abrigate que hace frio." );
			break;
		case"Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!." );
			break;
		case"Octubre":
			alert("Ya pasamos el frio, ahora calor!!!." );
			break;
		case"Nobiembre":
			alert("Ya pasamos el frio, ahora calor!!!." );
			break;
		case"Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!." );
			break;

	}
*///segunda forma.

/*	var mensaje;

switch(mesDelAño)
	{
		case"Enero":
			mensaje="Ya pasamos el frio, ahora calor!!!."
			break;
		case"Febrero":
			mensaje="Ya pasamos el frio, ahora calor!!!."
			break;
		case"Marzo":
			mensaje="Falta para el invierno." 
			break;
		case"Abril":
			mensaje="Falta para el invierno."
			break;
		case"Mayo":
			mensaje="Falta para el invierno." 
			break;
		case"Junio":
			mensaje="Falta para el invierno."
			break;
		case"Julio":
			mensaje="Abrigate que hace frio."
			break;
		case"Agosto":
			mensaje="Abrigate que hace frio." 
			break;
		case"Septiembre":
			mensaje="Ya pasamos el frio, ahora calor!!!." 
			break;
		case"Octubre":
			mensaje="Ya pasamos el frio, ahora calor!!!." 
			break;
		case"Nobiembre":
			mensaje="Ya pasamos el frio, ahora calor!!!." 
			break;
		case"Diciembre":
			mensaje="Ya pasamos el frio, ahora calor!!!."
			break;

	}

	alert(mensaje);
*/// tercera forma

/*var mensaje;

switch(mesDelAño)
	{
		
		case"Marzo":
			mensaje="Falta para el invierno." 
			break;
		case"Abril":
			mensaje="Falta para el invierno."
			break;
		case"Mayo":
			mensaje="Falta para el invierno." 
			break;
		case"Junio":
			mensaje="Falta para el invierno."
			break;
		case"Julio":
			mensaje="Abrigate que hace frio."
			break;
		case"Agosto":
			mensaje="Abrigate que hace frio." 
			break;
		default:
			mensaje="Ya pasamos el frio, ahora calor!!!."
			break;

	}

	alert(mensaje);

*///cuarta forma.

|switch

}//FIN DE LA FUNCIÓN