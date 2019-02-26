/*Al presionar el botón pedir números hasta que
el USUARIO QUIERA e informar
la suma acumulada y el promedio.*/
function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;
     //hile(respuesta== "si")
	while(respuesta)
	{
		numeroIngresado=prompt("ingre su numero");
		numeroIngresado= parseInt(numeroIngresado);
		acumulador= numeroIngresado + acumulador;
		promedio= contador / acumulador;
		contador= contador + 1 ;
		respuesta= confirm("desea continuar")
	//espuesta= prompt("queire continuar?");
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN