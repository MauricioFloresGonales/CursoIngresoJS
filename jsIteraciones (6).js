function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numerosIngresados;
	
	//numerosIngresados= prompt("ingrese cualqueir numero.");
	
	while(contador < 5)
	{	
		numerosIngresados= prompt("ingrese cualqueir numero.");
		numerosIngresados= parseInt(numerosIngresados);	
		acumulador= acumulador + numerosIngresados;
		contador = contador + 1;
		promedio= contador / acumulador
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN