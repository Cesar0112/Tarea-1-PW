function validarInputNumero() {
  const inputs = document.querySelectorAll('input[type="number"]');

  inputs.forEach((input) => {
    input.addEventListener("keypress", function (event) {
      const charCode = event.charCode;
      if (charCode < 48 || charCode > 57) {
        event.preventDefault();
      }
    });
  });
}
function validarAsignatura() {
  const inputs = document.querySelectorAll('input[type="text"]');

  inputs.forEach((input) => {
    input.addEventListener("keypress", function (event) {
      const charCode = event.charCode;
      const regex = /[^\w\s]/gi;
      const key = String.fromCharCode(charCode);
      if (regex.test(key)) {
        event.preventDefault();
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  validarInputNumero();
  validarAsignatura();
});
