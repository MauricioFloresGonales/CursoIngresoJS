/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var suma;
	numero1= numeroUno.value;
	numero1=parseInt(numero1);
	numero2= numeroDos.value;
	numero2=psrseInt(numero2);
	suma= (numero1 + numero2);
	alert("la suma es "+ suma);
}

