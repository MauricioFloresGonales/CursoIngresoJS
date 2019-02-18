function mostrar()

/*Al ingresar una edad menor a 18 años 
y un estado civil distinto a "Soltero", mostrar 
el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'*/

{
//tomo la edad  
	/*var edad1;
	var estadocivil1;
	edad1=edad.value;
	estadocivil1=estadoCivil.value;

	if (edad1<18&&estadocivil1!=("Soltero"))
	{
		alert("usted es muy joven para no estar soltero")
	}*/


	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada= document.getElementById('edad').value;
	estadoCivilIngresado= document.getElementById("estadoCivil").value; 
	

	if(edadIngresada<18 && estadoCivilIngresado!=("Soltero"))
	{
		alert("Es muy pequeño pa NO ser slotero.");
	}

	


}//FIN DE LA FUNCIÓN