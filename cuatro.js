function mostrar()
/*-ingresar cuatro importes 
-mostrar el mayor
-despues motrar cual es el total 
-si supera 100p hacer el descuento del 10%
-si supera los 50p el descuento es de 5%
-en el caso de ser menos de 50 descontar 15%
*/
{
	var importeUno;
	var importeDos;
	var imporTres;
	var imporCuatro;
	var suma;
	var resultadoFinal;
	var mensaje;
	var importeMayor;
	

	importeUno= prompt("ingrese un importe","aqui");
	importeUno= parseInt(importeUno);
	importeDos= prompt("ingrese su segundo importe","aqui");
	importeDos= parseInt(importeDos);
	importeTres= prompt("ingrese su tercer importe", "aqui");
	importeTres= parseInt(importeTres);
	importeCuatro= prompt("ingrese su cuarto importe","aqui");
	importeCuatro= parseInt(importeCuatro);

	importes=importeUno
	importes=importeDos
	importes=importeTres
	importes=imporCuatro

	if(iporete>importeUno && importe<imporCuatro)
	{
		alert("bien");
	}


	

/*suma= importeUno + importeDos + importeTres + importeCuatro
		
		console.log(suma);

	if(suma>=100)
	{
		descuento=suma*10/100
		resultadoFinal= suma - descuento
		mensaje= "resultadoFinal"
	}else{

		if(suma>=50 && suma<100)
		{
			descuento= suma*5/100
			resultadoFinal= suma - descuento
			mensaje= "resultadoFinal"
		}else{
			if(suma<50)
			{
				descuento=suma*15/100
				resultadoFinal= suma - descuento
				mensaje= "resultadoFinal"
			}//if(suma<50)
		}//if(suma>=50 && suma<100)
	}//if(suma>=100)
	
	alert(resultadoFinal);
*/

}
