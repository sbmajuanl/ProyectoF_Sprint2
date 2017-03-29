window.onload=function(){//Muestra el paciente en otra pagina
  var nombre=document.getElementById("nombre_coder");
  var apellido=document.getElementById("apellido_coder");
  var correo=document.getElementById("correo_coder");
  var contrasena=document.getElementById("contrasena_coder");
  var objCoder=JSON.parse(localStorage.getItem("nuevoRegistro"))

  nombre.innerText=objCoder.nombre;
  apellido.innerText=objCoder.apellido;
  correo.innerText=objCoder.correo;
  contrasena.innerText=objCoder.contrasena;

//Editar coder
function Paciente(nombreCoder, apellidoCoder, correoCoder, contrasenaCoder) {
		this.nombre = nombreCoder;
		this.apellido = apellidoCoder;
		this.correo =correoCoder;
		this.contrasena = contrasenaCoder;
	}
	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"
	});
}
