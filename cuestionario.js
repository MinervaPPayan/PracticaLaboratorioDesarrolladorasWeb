'use strict';

const codigospostales = new Map ([
	[1,"ALAVA"],
	[2,"ALBACETE"],
	[3,"ALICANTE"],
	[4,"ALMERIA"],
	[5,"AVILA"],
	[6,"BADAJOZ"],
	[7,"ISLAS BALEARES"], 
	[8,"BARCELONA"],
	[9,"BURGOS"],
	[10,"CACERES"],
	[11,"CADIZ"],
	[12,"CASTELLON"],
	[13,"CIUDAD REAL"],
	[14,"CORDOBA"],
	[15,"LA CORUÑA"],
	[16,"CUENCA"], 
	[17,"GERONA"],
	[18,"GRANADA"],
	[19,"GUADALAJARA"],
	[20,"GUIPUZCOA"],
	[21,"HUELVA"],
	[22,"HUESCA"],
	[23,"JAEN"],
	[24,"LEON"],
	[25,"LERIDA"],
	[26,"LA RIOJA"],
	[27,"LUGO"],
	[28,"MADRID"],
	[29,"MALAGA"],
	[30,"MURCIA"],
	[31,"NAVARRA"],
	[32,"ORENSE"],
	[33,"ASTURIAS"],
	[34,"PALENCIA"],
	[35,"LAS PALMAS"],
	[36,"PONTEVEDRA"],
	[37,"SALAMANCA"],
	[38,"SANTA CRUZ DE TENERIFE"],
	[39,"CANTABRIA"],
	[40,"SEGOVIA"],
	[41,"SEVILLA"],
	[42,"SORIA"],
	[43,"TARRAGONA"],
	[44,"TERUEL"],
	[45,"TOLEDO"],
	[46,"VALENCIA"],
	[47,"VALLADOLID"],
	[48,"VIZCAYA"],
	[49,"ZAMORA"],
	[50,"ZARAGOZA"],
	[51,"CEUTA"],
	[52,"MELILLA"]]);

function mostrarValoracion(){
	var valoracion = document.getElementById("valoracion").value;
	alert("Has valorado con " + valoracion +" puntos");
}

function mostrarCuenta(){
	var pais = document.getElementById("Pais").value;
	var CIban = document.getElementById("CIban").value;
	var entidad = document.getElementById("entidad").value;
	var sucursal = document.getElementById("sucursal").value;
	var Dc = document.getElementById("Dc").value;
	var Ncuenta = document.getElementById("cuenta").value;
	var cuenta = pais+CIban+"-"+entidad+"-"+sucursal+"-"+Dc+"-"
	+Ncuenta;
	alert("Le informamos que su cuenta bancaria es: " + cuenta );
}

function mostrarDia(){
	var fecha = document.getElementById("fecha").value;
	var diaSemana = new Date(fecha).getDay();
	switch (diaSemana){
	 case 1:
	   alert("La fecha seleccionada en el elemento fecha es un Lunes");
	   break;
	 case 2:
	   alert("La fecha seleccionada en el elemento fecha es un Martes");
	   break;
	 case 3:
	   alert("La fecha seleccionada en el elemento fecha es un Miercoles");
	   break;
	 case 4:
	   alert("La fecha seleccionada en el elemento fecha es un Jueves");
	   break;
	 case 5:
	   alert("La fecha seleccionada en el elemento fecha es un Viernes");
	   break;
	 case 6:
	   alert("La fecha seleccionada en el elemento fecha es un Sabado");
	   break;
	 case 0:
	   alert("La fecha seleccionada en el elemento fecha es un Domingo"); 
	   break;
   }   
}

function validarFormulario(){

	eliminarErrores();

	var errores = false;

	//-----Validaciones que comprueban que los campos venga informados----------//
	var datosPers = document.getElementById("DatosPers");

	var nombre = document.getElementById("nombre");
	var errorNombre = document.getElementById("errorNombre");
	if (nombre.value.length == 0) {
		if (!errorNombre) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorNombre";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO");
			error.appendChild(contenido);
			datosPers.insertBefore(error, nombre.nextElementSibling);
			errorNombre = document.getElementById("errorNombre");
		}
		nombre.focus();
		errores = true;
	}

	var apellidos = document.getElementById("apellidos");
	var errorApellidos = document.getElementById("errorApellidos");
	if (apellidos.value.length == 0) {
		if (!errorApellidos) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorApellidos";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO");
			error.appendChild(contenido);
			datosPers.insertBefore(error, apellidos.nextElementSibling);
			errorApellidos = document.getElementById("errorApellidos");
		}
		apellidos.focus();
		errores = true;
	}

	var direccion = document.getElementById("direccion");
	var errorDireccion = document.getElementById("errorDireccion");
	if (direccion.value.length == 0) {
		if (!errorDireccion) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorDireccion";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO");
			error.appendChild(contenido);
			datosPers.insertBefore(error, direccion.nextElementSibling);
			errorDireccion = document.getElementById("errorDireccion");
		}
		direccion.focus();
		errores = true;
	}

	var cp = document.getElementById("cp");
	var errorCp = document.getElementById("errorCp");
	if (cp.value.length != 5 || isNaN(cp.value)) {
		if (!errorCp) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorCp";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("LONGITUD REQUERIDA 5 DIGITOS");
			error.appendChild(contenido);
			datosPers.insertBefore(error, cp.nextElementSibling);
			errorCp = document.getElementById("errorCp");
		}
		cp.value = "";
		cp.focus();
		errores = true;
	}

	var provincia = document.getElementById("provincia");
	var errorProvincia = document.getElementById("errorProvincia");
	if (provincia.value.length == 0) {
		if (!errorProvincia) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorProvincia";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO");
			error.appendChild(contenido);
			datosPers.insertBefore(error, provincia.nextElementSibling);
			errorProvincia = document.getElementById("errorProvincia");
		}
		provincia.focus();
		errores = true;
	}

	var datosBancarios = document.getElementById("DatosBancarios");

	var CIban = document.getElementById("CIban");
	var errorCIban = document.getElementById("errorCIban");
	if (CIban.value.length != 2 || isNaN(CIban.value)) {
		if (!errorCIban) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorCIban";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			datosBancarios.insertBefore(error, CIban.nextElementSibling);
			errorCIban = document.getElementById("errorCIban");
		}
		CIban.value = "";
		CIban.focus();
		errores = true;
	}


	var entidad = document.getElementById("entidad");
	var errorEntidad = document.getElementById("errorEntidad");
	if (entidad.value.length != 4 || isNaN(entidad.value)) {
		if (!errorEntidad) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorEntidad";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			datosBancarios.insertBefore(error, entidad.nextElementSibling);
			errorEntidad = document.getElementById("errorEntidad");
		}
		entidad.value = "";
		entidad.focus();
		errores = true;
	}


	var sucursal = document.getElementById("sucursal");
	var errorSucursal = document.getElementById("errorSucursal");
	if (sucursal.value.length != 4 || isNaN(sucursal.value)) {
		if (!errorSucursal) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorSucursal";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			datosBancarios.insertBefore(error, sucursal.nextElementSibling);
			errorSucursal = document.getElementById("errorSucursal");
		}
		sucursal.value = "";
		sucursal.focus();
		errores = true;
	}


	var Dc = document.getElementById("Dc");
	var errorDc = document.getElementById("errorDc");
	if (Dc.value.length != 2 || isNaN(Dc.value)) {
		if (!errorDc) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorDc";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			datosBancarios.insertBefore(error, Dc.nextElementSibling);
			errorDc = document.getElementById("errorDc");
		}
		Dc.value = "";
		Dc.focus();
		errores = true;
	}

	var cuenta = document.getElementById("cuenta");
	var errorCuenta = document.getElementById("errorCuenta");
	if (cuenta.value.length != 10 || isNaN(cuenta.value)) {
		if (!errorCuenta) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorCuenta";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			datosBancarios.insertBefore(error, cuenta.nextElementSibling);
			errorCuenta = document.getElementById("errorCuenta");
		}
		cuenta.value = "";
		cuenta.focus();
		errores = true;
	}

	//-----Validaciones provincia codigo postal----------//
  
  //Comprobamos que el CP es valido
	if(!comprobarCPvalido()){
	//Si el codigo postal no es valido	
		if(!errorCp){
		//Si no existe error previo indicando que el campo esta vacio, ponemos error que indica que el CP no existe.	
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorCp";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("EL CODIGO POSTAL "+ cp.value +" NO EXISTE");
			error.appendChild(contenido);
			datosPers.insertBefore(error, cp.nextElementSibling);
			errorCp = document.getElementById("errorCp");
		}
	}

	//Indicar si provincia correcta o no existe
	if(comprobarExisteProvincia()){
	//provincia existe indicamos que es correcta
		var error = document.createElement("label");
		error.style.color = "green";
		error.id = "errorProvincia";
		error.classList.add("etiquetasError");
		var contenido = document.createTextNode("PROVINCIA CORRECTA");
		error.appendChild(contenido);
		datosPers.insertBefore(error, provincia.nextElementSibling);
		errorProvincia = document.getElementById("errorProvincia");
	} else { 
	//provincia no existe, comprobamos si hay error que lo habria generado la validacion de campo en blanco
	//y si lo hay lo respetamos, sino es que la provincia escrita no existe
		if (!errorProvincia){
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorProvincia";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("LA PROVINCIA " + provincia.value + " NO EXISTE");
			error.appendChild(contenido);
			datosPers.insertBefore(error, provincia.nextElementSibling);
			provincia.focus();
			errores = true;
			errorProvincia = document.getElementById("errorProvincia");
		}
	}

	//Comprobar si el codigo postal corresponde con la provincia
	if(comprobarExisteProvincia()){ 
	//Si la provincia existe	
		if (!comprobarCoincidenProvYCp()){
		//Si no coinciden, añadimos el error de que no coinciden cp y prov. y la provincia con la que coincide
		  var provinciaCorrecta = obtenerProvinciaCorrecta();
			var error2 = document.createElement("label");
			error2.style.color = "red";
			error2.id = "errorProvincia2";
			error2.classList.add("etiquetasError");
			if(typeof provinciaCorrecta === 'undefined') {
				var contenido2 = document.createTextNode(" PERO NO CORRESPONDE CON EL CODIGO POSTAL EL CUAL NO EXISTE");
			}else{
				var contenido2 = document.createTextNode(" PERO NO CORRESPONDE CON EL CODIGO POSTAL INTRODUCIDO. LA PROVINCIA CORRECTA ES: " + provinciaCorrecta);
			}
			error2.appendChild(contenido2);
			datosPers.insertBefore(error2, errorProvincia.nextElementSibling);
			errores = true;
		}
	}

	//si se ha producido algun error, se retorna falso para no hacer el submit
	if (errores) {
		return false;
	}
}	

//funcion para eliminar todas las etiquetas de errores que comparten la clase etiquetasError
function eliminarErrores(){
	var elementosError = document.getElementsByClassName("etiquetasError");
	var totalABorrar = elementosError.length;
	for (var i=0; i < totalABorrar; i++ ) {
		elementosError[0].parentNode.removeChild(elementosError[0]);
	}
}

//funcion que retorna true si la provincia introducida existe o false en caso contrario
function comprobarExisteProvincia(){
	var provinciaMayusculas = document.getElementById("provincia").value.toUpperCase();
	var provinciaEncontrada = false;
	codigospostales.forEach((valores, claves) => {
		if(valores == provinciaMayusculas){
				provinciaEncontrada = true;
		}
	});
	return provinciaEncontrada;
}

//funcion que retorna true si provincia y codigo postal existen o false en caso contrario
function comprobarCoincidenProvYCp(){
	var dosDigitos = parseInt(document.getElementById("cp").value.substring(0,2));
	var dosDigitosCP = codigospostales.get(dosDigitos);
	if (dosDigitosCP != document.getElementById("provincia").value.toUpperCase()) {
		return false;
	} else {
		return true;
	}
}

//funcion que comprueba si el rango de los dos primeros digitos del codigo postal estan en los esperados y devuelve true si es asi o false
//en caso contrario
function comprobarCPvalido(){
	var cp = document.getElementById("cp");
	if(parseInt(cp.value.substring(0,2)) < 1 || parseInt(cp.value.substring(0,2)) > 52){
		return false;
	}else{
		return true;
	}
}

function obtenerProvinciaCorrecta(){
	var dosDigitos = parseInt(document.getElementById("cp").value.substring(0,2));
	return codigospostales.get(dosDigitos);
}