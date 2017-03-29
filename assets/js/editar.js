window.onload=function(){

var objCoder = JSON.parse(localStorage.getItem("nuevoRegistro"));
var inputsEditar = document.getElementsByClassName("input-editar");
inputsEditar[0].value = objCoder.nombre;
inputsEditar[1].value = objCoder.apellido;
inputsEditar[2].value = objCoder.correo;
inputsEditar[3].value = objCoder.contrasena;

document.getElementsByTagName("button")[0].addEventListener("click",function(){
  if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0){
    objCoder.nombre=inputsEditar[0].value;
    objCoder.apellido= inputsEditar[1].value
    objCoder.correo = inputsEditar[2].value;
    objCoder.contrasena = inputsEditar[3].value;
    localStorage.setItem("nuevoRegistro",JSON.stringify(objCoder));
    window.location="coder.html";
  }
  else{
    alert("Todos los campos son obligatorios");
  }
});
}
