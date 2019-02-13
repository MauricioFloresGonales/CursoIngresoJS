
function mostrar()
{
	var nombre1;
	var nombre2;
	var edad1;
	var edad2;
	var suma;
	
	nombre1= prompt("escriba su nombre y su apellido","nombre y apellido");
	edad1= prompt("su edad es...","escriba su edad");
	edad1= parseInt(edad1);

	nombre2= prompt("esccriba su nombre y su apellido","nobre y apellido");
	edad2= prompt("su edad es...","escriba su edad");
	edad2= parseInt(edad2);

	suma= (edad1 + edad2);

	alert("ustedes son " + nombre1 + " , " + nombre2 + " y sus edades son " + edad1 + " , " edad2);

//el alert no me da lo que pidio



}
