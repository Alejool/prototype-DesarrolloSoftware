document.addEventListener('DOMContentLoaded', function() {


 
let form =  document.querySelector('#form_sesion');


form.addEventListener('submit', function(e) {
  
  e.preventDefault();
  let inputs = document.querySelector('#form_sesion input');


    if(!validarCampos(inputs)){
      let password = document.querySelector('#form_sesion #password').value;
      let email = document.querySelector('#form_sesion #email').value;
      console.log(email.value)

      email= email.toLowerCase();
      if(email=='prueba@gmail.com' )
      {
        if( password!=='123'){
        alert('contraseña incorrecta')
        return;
        }
      window.location.href = 'panel.html';
        // Redirecciona a una nueva página

      }
      else{
        alert('usuario no existe')
      }
    }
    else{
      alert('campos vacios')
    }
  
  
});

});


function validarCampos(inputs){
  let algunInputVacio = Array.from(inputs).some(function(input) {
    return input.value.trim() === ''; // Verifica si el valor está vacío después de quitar espacios en blanco
  });

  return algunInputVacio;
}
