/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	
	nombreIngresado= prompt("su edad es ?", "ingrese su edad aqui.");
	
	while(isNaN(nombreIngresado)==false)
	{
		nombreIngresado = prompt("error");
	}


	alert("su nombre es " + nombreIngresado);


}

