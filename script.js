function validarCPF(cpf) {
  valido = false;
  let total = 0;

  for (i = 0; i < 9; i++) {
    total = total + ((10 - i) * cpf[i]);
  }

  let resto = total % 11;

  pDigito = 11 - resto;

  total = 0;

  for (i = 0; i < 10; i++) {
    total = total + ((11 - i) * cpf[i]);
  }

  resto = total % 11;

  sDigito = 11 - resto;

  valido = (String(cpf[9]) + String(cpf[10]) == String(pDigito) + String(sDigito));

  return valido;
}

$("#ClickBtn").click(
  function () {

    let cpfDigitado = document.getElementById("inputA").value;
    

    if (validarCPF (cpfDigitado)) {

      document.getElementById("validarcpf").append;
      window.alert('Valido')
      
    } else {
      document.getElementById("validarcpf").append;
      window.alert('Invalido')
      
    }
  }
)