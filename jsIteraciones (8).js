function mostrar()
{

	var contador=0;
	var positivo=0;
	var numNegativo=1;
	var respuesta='si';
	var numeroPositivo;
	var numeroNegativo;
	var numeroIngresado;

/*	do
	{
		numeroPositivo= prompt("igrese un numero positivo");
		numeroPositivo=parseInt(numeroPositivo);
		positivo= positivo + numeroPositivo;
		numeroNegativo= prompt("ingrese un numero negativo");
		numeroNegativo= parseInt(numeroNegativo);
		negativo= negativo + numeroNegativo;
		negativo= numeroNegativo * contador;
		respuesta= prompt("desea ingresar otro numero");
		contador= contador + 1 ;
	}while(respuesta != "no");
*/


/*	while(respuesta)
	{
		respuesta= confirm("desea continuar?")
	}do
	{
		numero= prompt("ingrese un numero");
		numero= parseInt(numero);

	}while(isnan(numero));
*/

while(respuesta)
{
	numeroPositivo= prompt("igrese un numero positivo");
	numeroPositivo=parseInt(numeroPositivo);
	numeroNegativo= prompt("ingrese un numero negativo");
	numeroNegativo= parseInt(numeroNegativo);
	
	if(numeroPositivo >=0)
	{
		positivo= positivo + numeroPositivo;
	}
	if(numeroNegativo < 0)
	{
		numNegativo= numNegativo + numeroNegativo;
		negativo= numNegativo * contador;
	}

	contador= contador + 1 ;
	

	respuesta= confirm("desea continuar?");
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN