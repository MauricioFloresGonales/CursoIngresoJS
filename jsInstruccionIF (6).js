function mostrar()
{
//tomo la edad  
var años;
	años= edad.value;
	años=parseInt(años);

	if(años>18)
		{
			alert("usted es mayor de edad");

			if(años>13 && años<17)
				{
					alert("usted es adolescente");
					
					if(años<12)
					{
						alert("usted es un niño");
					}



				}




		}

	



}//FIN DE LA FUNCIÓN