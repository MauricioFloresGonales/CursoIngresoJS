/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var suma;
	numero1= numeroUno.value;
	numero1=parseInt(numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);
	suma= (numero1 + numero2);
	alert("el resultado es "+ suma);

}

function restar()
{
	var numero1;
	var numero2;
	var restar;
	numero1= numeroUno.value;
	numero1= parseInt(numero1);
	numero2= numeroDos.value;
	numero2= parseInt(numero2);
	resta= (numero1 - numero2)
	alert("la resta es "+ resta)

}

function multiplicar()
{ 
	var numero1
	var numero2
	var multiplicar
	numero1= numeroUno.value
	numero1= parseInt(numero1)
	numero2= numeroDos.value
	numero2= parseInt(numero2)
	multiplicar= (numero1 * numero2)
	alert("la multiplicacion es "+ multiplicar)
	
}

function dividir()
{
	var numero1
	var numero2
	var dividir
	numero1= numeroUno.value
	numero1=parseInt(numero1)
	numero2=numeroDos.value
	numero2=parseInt(numero2)
	dividir=(numero1 / numero2)
	alert("la division es "+ dividir)
	
}

