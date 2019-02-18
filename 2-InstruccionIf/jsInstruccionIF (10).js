function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom;

	numeroRandom= Math.floor((Math.random() * 10) + 1);

	console.log(numeroRandom);

	if(numeroRandom>=9)
	{
		alert("EXELENTE");
	}
		else
		{
			if(numeroRandom<=4)
			{
				alert("Vamos, la proxima se puede");
			}
				else
				{
					alert("APROBÓ");
				}
		}


}//FIN DE LA FUNCIÓN