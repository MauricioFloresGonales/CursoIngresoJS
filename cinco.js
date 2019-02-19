function mostrar()
{
	var planetaSistemaSolar;
	var mensaje;
	planetaSistemaSolar= prompt("ingrese el nombre de un planeta dentros del sistema solar","escribe el planeta aqui");


	switch(planetaSistemaSolar)
	{
		case"mercurio":
		case"venus":
			mensaje="acá hace más calor"
			break;
		case"tierra":
			mensaje="acá vivimos"
			break;
		default:
			mensaje="acá hace más frio"	
	}

	alert(mensaje);
}
