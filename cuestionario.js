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
	alert("Has valorado con " + document.getElementById("valoracion").value +" puntos")
}

function mostrarCuenta(){
	var cuenta = document.getElementById("Pais").value+document.getElementById("CIban").value+"-"+document.getElementById("entidad").value+"-"
	+document.getElementById("sucursal").value+"-"+document.getElementById("Dc").value+"-"
	+document.getElementById("cuenta").value;
	alert("Le informamos que su cuenta bancaria es: " + cuenta );
}

function mostrarDia(){
var diaSemana = new Date(document.getElementById("fecha").value).getDay();
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

	var nombre = document.getElementById("nombre");
	if (nombre.value.length == 0) {
		if (!document.getElementById("errorNombre")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorNombre";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO");
			error.appendChild(contenido);
			document.getElementById("DatosPers").insertBefore(error, nombre.nextElementSibling);
		}
		nombre.focus();
		errores = true;
	}

	var apellidos = document.getElementById("apellidos");
	if (apellidos.value.length == 0) {
		if (!document.getElementById("errorApellidos")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorApellidos";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO");
			error.appendChild(contenido);
			document.getElementById("DatosPers").insertBefore(error, apellidos.nextElementSibling);
		}
		apellidos.focus();
		errores = true;
	}

	var direccion = document.getElementById("direccion");
	if (direccion.value.length == 0) {
		if (!document.getElementById("errorDireccion")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorDireccion";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO");
			error.appendChild(contenido);
			document.getElementById("DatosPers").insertBefore(error, direccion.nextElementSibling);
		}
		direccion.focus();
		errores = true;
	}

	var cp = document.getElementById("cp");
	if (cp.value.length != 5 || isNaN(cp.value)) {
		if (!document.getElementById("errorCp")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorCp";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("LONGITUD REQUERIDA 5 DIGITOS");
			error.appendChild(contenido);
			document.getElementById("DatosPers").insertBefore(error, cp.nextElementSibling);
		}
		cp.value = "";
		cp.focus();
		errores = true;
	}

	var provincia = document.getElementById("provincia");
	if (provincia.value.length == 0) {
		if (!document.getElementById("errorProvincia")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorProvincia";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO");
			error.appendChild(contenido);
			document.getElementById("DatosPers").insertBefore(error, provincia.nextElementSibling);
		}
		provincia.focus();
		errores = true;
	}


	var CIban = document.getElementById("CIban");
	if (CIban.value.length != 2 || isNaN(CIban.value)) {
		if (!document.getElementById("errorCIban")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorCIban";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			document.getElementById("DatosBancarios").insertBefore(error, CIban.nextElementSibling);
		}
		CIban.value = "";
		CIban.focus();
		errores = true;
	}


	var entidad = document.getElementById("entidad");
	if (entidad.value.length != 4 || isNaN(entidad.value)) {
		if (!document.getElementById("errorEntidad")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorEntidad";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			document.getElementById("DatosBancarios").insertBefore(error, entidad.nextElementSibling);
		}
		entidad.value = "";
		entidad.focus();
		errores = true;
	}


	var sucursal = document.getElementById("sucursal");
	if (sucursal.value.length != 4 || isNaN(sucursal.value)) {
		if (!document.getElementById("errorSucursal")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorSucursal";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			document.getElementById("DatosBancarios").insertBefore(error, sucursal.nextElementSibling);
		}
		sucursal.value = "";
		sucursal.focus();
		errores = true;
	}


	var Dc = document.getElementById("Dc");
	if (Dc.value.length != 2 || isNaN(Dc.value)) {
		if (!document.getElementById("errorDc")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorDc";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			document.getElementById("DatosBancarios").insertBefore(error, Dc.nextElementSibling);
		}
		Dc.value = "";
		Dc.focus();
		errores = true;
	}

	var cuenta = document.getElementById("cuenta");
	if (cuenta.value.length != 10 || isNaN(cuenta.value)) {
		if (!document.getElementById("errorCuenta")) {
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorCuenta";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("CAMPO REQUERIDO ");
			error.appendChild(contenido);
			document.getElementById("DatosBancarios").insertBefore(error, cuenta.nextElementSibling);
		}
		cuenta.value = "";
		cuenta.focus();
		errores = true;
	}

	//-----Validaciones provincia codigo postal----------//
  
  //Comprobamos que el CP es valido
	if(!comprobarCPvalido()){
	//Si el codigo postal no es valido	
		if(!document.getElementById("errorCp")){
		//Si no existe error previo indicando que el campo esta vacio, ponemos error que indica que el CP no existe.	
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorCp";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("EL CODIGO POSTAL "+ document.getElementById("cp").value +" NO EXISTE");
			error.appendChild(contenido);
			document.getElementById("DatosPers").insertBefore(error, cp.nextElementSibling);
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
		document.getElementById("DatosPers").insertBefore(error, provincia.nextElementSibling);
	} else { 
	//provincia no existe, comprobamos si hay error que lo habria generado la validacion de campo en blanco
	//y si lo hay lo respetamos, sino es que la provincia escrita no existe
		if (!document.getElementById("errorProvincia")){
			var error = document.createElement("label");
			error.style.color = "red";
			error.id = "errorProvincia";
			error.classList.add("etiquetasError");
			var contenido = document.createTextNode("LA PROVINCIA " + document.getElementById("provincia").value + " NO EXISTE");
			error.appendChild(contenido);
			document.getElementById("DatosPers").insertBefore(error, provincia.nextElementSibling);
			document.getElementById("provincia").focus();
			errores = true;
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
			document.getElementById("DatosPers").insertBefore(error2, document.getElementById("errorProvincia").nextElementSibling);
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
	var provincia = document.getElementById("provincia").value.toUpperCase();
	var provinciaEncontrada = false;
	codigospostales.forEach((valores, claves) => {
		if(valores == provincia){
				provinciaEncontrada = true;
		}
	});
	return provinciaEncontrada;
}

//funcion que retorna true si provincia y codigo posta existen o false en caso contrario
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
	if(parseInt(document.getElementById("cp").value.substring(0,2)) < 1 || parseInt(document.getElementById("cp").value.substring(0,2)) > 52){
		return false;
	}else{
		return true;
	}
}

function obtenerProvinciaCorrecta(){
	var dosDigitos = parseInt(document.getElementById("cp").value.substring(0,2));
	return codigospostales.get(dosDigitos);
}