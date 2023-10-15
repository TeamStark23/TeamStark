function validarFormulario() {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const celular = document.getElementById('celular').value;
  const titulo = document.getElementById('titulo').value;
  const texto = document.getElementById('texto').value;

  if (nome && sobrenome && email && celular && titulo && texto) {
    document.getElementById('mensagem-sucesso').style.display = 'block';
  } else {
    document.getElementById('mensagem-sucesso').style.display = 'none';
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
}