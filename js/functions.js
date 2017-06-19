var options = ['Barba', 'Corte', 'Peinado'];
var errores= [];  

$(document).ready(function() {

	var select = $('#sel'); 

	for (i=0; i<options.length; i++) {
		value= i + 1; 
		var option = '<option value="'+ value + '">' + options[i] + '</options>'; 
		select.append(option); 
	} 

$('.img_peque').on('click', function() { 
	imagen=$(this).data('img');  
	console.log(imagen); 
	$('#grande').attr('src', imagen); 
});

$('.menu').on('click', function(e) {
	e.preventDefault(); 
	link=$(this).attr('href'); 
	$('html, body').animate({
		scrollTop:$(link).offset().top 
		 
	}, 2000); 

}); //fin event menu

$('.primera').on('mouseenter', function() {
		url=$(this).data('img');
		url_actual=$('#segunda').attr('src'); 
		console.log(url); 
		$('#segunda').fadeTo("ease", 0.2, function(){	
			$('#segunda').attr('src', url);
			$('#segunda').fadeTo("ease", 1, function() {
			});
	}); //fin fade to. 
		$('#segunda').on('mouseleave', function() {
				$('#segunda').attr('src', url_actual); 
		}); // fin mouseleave 
}); //fin mouseenter.

/*$('.primera').on('mouseleave', function() {
		$('#segunda').fadeOut ("slow", function () {
			url=$(this).data('url');
			console.log(url); 
			$('#segunda').attr('src', url);
		}); 

		$('#segunda').fadeIn(3000, function() {

		}); 
}); */

}); //fin document ready



/*
	function soloLetras(x) {
	   	var expr= /^[a-zA-Z]*$/;

	   	if (expr.test(x)) {
	   		return true; 
	   	}
	   	return false; 
	}

	function validarNombre() { 

		nombre = $('#nombre').val();

		if(nombre.value == '' || nombre.value == null) {
			 errores.push('<li>Por favor complete el nombre</li>')
		}

		else { 

			if (!soloLetras(nombre)) { 

				errores.push('<li>Solo puede ingresar letras en el nombre</li>'); 

			} else { return true; }

		} 

		return false; 

	}


	function validarAp() { 

		ap = $('#apellido').val();

		if(ap.value == '' || ap.value == null) {
			 errores.push('<li>Por favor complete el apellido</li>')
		}

		else { 

			if (!soloLetras(ap)) { 

				errores.push('<li>Solo puede ingresar letras en el apellido</li>'); 

			} else { return true; }

		} 

		return false; 

	}

	function validarCampo() { 

		campo = $('#campo').val();

			if (!soloLetras(campo)) { 

				errores.push('<li>Solo puede ingresar letras en el campo</li>'); 

			} else { return true; }

		} 

		return false; 

	}

	function validarForm {

		var form = $('#form').val(); 
		if (validarNombre() && validarAp() && validarCampo()) 
				{ 
					form.submit; 
				} 
	} */

	