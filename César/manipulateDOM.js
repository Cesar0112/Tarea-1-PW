function validarSoloTexto() {
  const inputs = document.querySelectorAll('input[type="text"]');

  inputs.forEach((input) => {
    input.addEventListener("keypress", function (event) {
      const charCode = event.charCode;
      const regex = /[^a-zA-Z\sáéíóúñ]/gi;
      const key = String.fromCharCode(charCode);

      if (regex.test(key)) {
        event.preventDefault();
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  validarSoloTexto();
});
