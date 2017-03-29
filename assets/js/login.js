window.addEventListener("load", function () {
  document.getElementById("login").addEventListener("click",function (e) {
    e.preventDefault();
      var correo = document.getElementById("correo").value;
      var contrasena = document.getElementById("contrasena").value;
      var regEmail = /([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi;

      if (correo == "") {
        escribirMensaje("m1","Usuario no puede estar en blanco");
      } else if (!(regEmail.test(correo))) {
          escribirMensaje("m1","No es un correo válido");
      }
      else {
        escribirMensaje("m1","");
      }

      if (contrasena == "") {
        escribirMensaje("m2","Contraseña no puede estar en blanco");
      } else {
        escribirMensaje("m2","");
      }

      if(correo != "" && contrasena != "" && /([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(correo)){
        if (verificarUsuario(correo,contrasena)) {
          window.location = "coder.html";*
        }
      }

    });
  });
      function escribirMensaje(elemento,msj) {
        var e = document.getElementById(elemento);
        e.innerHTML = msj;
      }

          function verificarUsuario(email, password) {
            var validarUsuario = getItemFromStorage("users");
            if (validarUsuario != null) {
              var user = validarUsuario.filter(function(user) {
                return user.email == email;
              })[0];
              if (user != null) {
                return user.email == email && user.password == password;
              }
            }
            return false;
          }
