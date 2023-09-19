function validacionNombreApellido() {
  validacionNombre();
  validacionApellido();
}

function validacionNombre() {
  var input = document.getElementById("nombre"); //obtengo el valor del input
  var regex = /^[a-zA-Z\sáéíóúñ]+$/;
  if (!regex.test(input.value)) {
    var nuevaCadena = input.value.replace(/[^a-zA-Z\sáéíóúñ]/g, "");
    input.value = nuevaCadena;
  }
}
function validacionApellido() {
  var input = document.getElementById("apellidos"); //obtengo el valor del input
  var regex = /^[a-zA-Z\sáéíóúñ]+$/;
  if (!regex.test(input.value)) {
    var nuevaCadena = input.value.replace(/[^a-zA-Z\sáéíóúñ]/g, "");
    input.value = nuevaCadena;
  }
}
