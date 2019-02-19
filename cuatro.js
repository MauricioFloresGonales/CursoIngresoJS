function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numerosIngresados;

	numeroUno= prompt("Ingrese un numero", "numero aqui");
	numeroDos= prompt("Ingrese otro numero", "numero aqui");
	console.log(numeroUno + " y "+ numeroDos)
	numerosIngresados= numeroUno
	
	if(numeroDos == numeroUno)
	{
		alert("usted ingreso " + numeroUno " y " + numeroDos);
	}

}
