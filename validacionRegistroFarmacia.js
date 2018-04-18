function validarFormularioRegistroArticulo() {

	var enviarForm = true;

	var campoNombre = document.getElementsByName("campoNombre")[0];
	var nombre = campoNombre.value;

	var campoContrase�a = document
			.getElementsByName("campoContrase�a")[0];
	var contrase�a = campoContrase�a.value;

	var campoDireccion = document.getElementsByName("campoDireccion")[0];
	var direccion = campoDireccion.value;

	var campoTelefono = document.getElementsByName("campoTelefono")[0];
	var telefono = campoTelefono.value;
	
	var campoEmail = document.getElementsByName("campoEmail")[0];
	var email = campoEmail.value;
	
	var campoCodigoPostal = document.getElementsByName("campoCodigoPostal")[0];
	var codigoPostal = campoCodigoPostal.value;
	
	var campoImagenSubida = document.getElementsByName("campoImagenSubida")[0];
	var imagenSubida = campoImagenSubida.value;

	var expresionCampoNombre = /^[\w�������()/\s]{1,300}$/i;
	if (expresionCampoNombre.test(nombre)) {

	} else {
		alert("nombre incorrecto");
		enviarForm = false;
	}

	var expresionCampoContrase�a = /^[0-9]{1,10}$/;

	if (expresionCampoContrase�a.test(contrase�a)) {

	} else {
		alert("contrase�a incorrecta");
		enviarForm = false;

	}

	var expresionCampoDireccion = /^\d{0,M}(\.\d{1})?\d{0,N}$/;
	if (expresionCampoDireccion.test(direccion)) {

	} else {
		alert("direccion incorrecta");
		enviarForm = false;

	}

	var expresionCampoTelefono = /^[0-9]{1,3}$/;

	if (expresionCampoTelefono.test(telefono)) {

	} else {
		alert("telefono incorrecto");
		enviarForm = false;

	}

	return enviarForm;

}// end function
