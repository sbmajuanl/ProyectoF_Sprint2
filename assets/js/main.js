window.addEventListener('load',function() {
  var listado=[];// Guarda los datos del formulario
  boton.addEventListener('click',function(evento) {// Evento del boton al hacerle click
    evento.preventDefault();

		var nombre=document.getElementById("nombre").value;
		var apellido=document.getElementById("apellido").value;
		var correo=document.getElementById("correo").value;
		var contrasena=document.getElementById("contrasena").value;

    function enviardatos(nombre,apellido,correo,contrasena){
			this.nombre=nombre;
			this.apellido=apellido;
			this.correo=correo;
			this.contrasena=contrasena;
			this.formulario=function(){
				var div=document.createElement("div");
				div.classList.add("div-contenedor");
				var p=document.createElement("p");
				p.innerHTML="Nombre:"+this.nombre+"</br>"+
										"Apellido"+this.apellido+"</br>"+
										"Correo"+this.correo+"</br>"+
										"contrasena"+this.contrasena+"</br>";
				div.appendChild(p);
				return div;
			}
		}
			/*var enviardatos=new enviardatos(nombre,apellido,correo,contrasena);
			listado.push(enviardatos);

			enviar.appendChild(enviardatos.formulario());
			document.getElementById("formula").reset();*/


			if(nombre.length !==0 && apellido.length !==0 && correo.length !==0 && contrasena.length !=0){
				//var enviardatos=new enviardatos(nombre,apellido,edad,pais);
				console.log(new enviardatos(nombre,apellido,correo,contrasena));
				localStorage.setItem("nuevoRegistro",JSON.stringify(new enviardatos(nombre,apellido,correo,contrasena)));
				//listado.push(enviardatos);
				//enviar.appendChild(enviardatos.formulario());
				document.getElementById("formula").reset();
				window.location="coder.html";
			}
			else {
				var indicacion=document.getElementsByClassName("indicacion_sl");
				for(var i = 0 ; i<indicacion.length;i++){
					indicacion[i].innerText="Este campo es obligatorios"
				}
			}
	});
});
/*var regemail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function validarEmail(regemail) {
if(!(regemail.test(correo))
  alert("Error: La dirección de correo es incorrecta.");
}*/

var soloLetras=function(e){
  var codigoTecla=e.keyCode;//document.write(codigoTecla);
  if ((codigoTecla>=97 && codigoTecla<=122)|| (codigoTecla>=65 && codigoTecla<=90)||(codigoTecla==32 || codigoTecla==39 )){
    return true;
  }else{
    return false;
  }
}
nombre.onkeypress=soloLetras;
apellido.onkeypress=soloLetras;

var input=document.getElementsByClassName("input-registro");//console.log(input);
var validacionInput=function(){
	if(this.getAttribute("type")=="text"){
			var arrDato = this.value.split(" ");//split division
			var datoConMayusculas = "";
			for(var i = 0; i<arrDato.length;i++){
				datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
			}
			this.value=datoConMayusculas;
		}
	}

	for(var i = 0; i<input.length;i++){
		input[i].onblur=validacionInput;
	}
