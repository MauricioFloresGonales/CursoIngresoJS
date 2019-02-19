function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	var mensaje;
	
	switch(mesDelAño)
	{
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
			mensaje= "tiene 30 días."
			break;
		case"Febrero":
			mensaje= "tiene 28 días."
			break;
		default:
			mensaje= "tiene 31 días."
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN