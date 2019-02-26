function mostrar()
{

	/*
	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;
	var cantidad;
	var 
	while(respuesta!='no')
	{
		numero= prompt("ungrese un numero");
		if(numero > maximo)
		{
			maximo = numero;
			minimo = numero;
		}elese{
			if(numero>maximo)
			{
				maximo=numero
			} 
			if(numero<minimo)
			{
				minimo=numero;
			}
		}
		
		cantidad++;
		resopuesta=prompt("dewsea ingresar otro numero?")
	}
	document.getElementById('minimo').value= maximo;
	document.getElementById('maximo').value= minimo;
	*/


/*
	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;
	var cantidad;
	var flag==false 


	while(respuesta!='no')
	{
		numero= prompt("ingrese un numero");

		if(flag==false || numero > maximo)
		{
			maximo = numero
		}
		if(flag==false || numero<minimo)
		{
			minimo = numero
			flag = true
		}
	}
	document.getElementById('minimo').value= maximo;
	document.getElementById('maximo').value= minimo;
*/

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var maximo = 0;
	var minimo = 0;
	var cantidad;
	var flag=true 

	while(respuesta != "no")
	{
		numero= prompt("ingrese un numero.");

		if(flag == true || numero > maximo)
		{
			maximo=numero;
		}else{
			if(flag == true || numero < minimo)
			{
				minimo=numero
				flag = false
			}//if(flag == false || numero < minimo)
		}//if(flag == false|| numero > maximo)
		respuesta=prompt("desea continuar?")
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN