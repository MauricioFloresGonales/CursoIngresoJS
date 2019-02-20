function mostrar()

{
	var paquetesPaypal;
	var paqueteEfectvo;
	var formaDePago;
	var descuento;
	var aumento;
	var valorHabitacion
	var precioFinal;

	valorHabitacion= prompt("ingrese el valor que tiene su habitacion");
	formaDePago= prompt("ingrese su forma de pago","ejemplo: efectivo");

	switch(formaDePago)
	{
		case"trajeta Visa":
			descuento=10
			break;
		case"paypal":
			descuento=15
			break;

			switch(paquetesPaypal)
			{
				case"todoIncluido":
					descuento=10
					break;
			}

		case"mercado Pago":
			descuento=10
		case"efectivo":
			descuento=20
			break;

			switch(paqueteEfectvo)
			{
				case"solo desayuno":
					aumento=10
					
					break;
				case"todo Incluido":
					descuento=15
					break;
			}	

		case"otro":
			*5/100
			break;

	}

	precioFinal= valorHabitacion*descuento/100
	precioFinal valorHabitacion

	precioFinal= valorHabitacion*aumento/100
	precioFinal= valorHabitacion + aumento


}
