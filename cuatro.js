function mostrar()
{
	var compra;
	var precio;
	var descuento10;
	var descuento15;
	var recargo10;
	var pago;
	var precioFinal1;
	var precioFinal2;
	var precioFinalTarjeta;
	var precioFinal;

	compra= prompt("cuatos productos compró?");
	precio= prompt("de cuanto fue su compra","ingrese el precio")
	precio= parseInt(precio);

	if(compra>2)
		{
			descuento10= precio*10/100
			precioFinal1= precio - descuento10
			
			if(precio>2000)
			{
				descuento15= precioFinal1*15/100
				precioFinal2= precioFinal1 - descuento15
				
			}
		}

	pago= prompt("su opcion de pago es con...  1= tarjeta 2=efectivo","ingrese el numero de su forma de pago");

	if (pago==1)
		{
			recargo10= precio*10/100
			precioFinalTarjeta= precio + recargo10
			alert("precio final con tarjeta es de " + precioFinalTarjeta)
		}

		precioFinal= precioFinalTarjeta - precioFinal2
			alert("precio a pagar" + precioFinal)

	



		

}
