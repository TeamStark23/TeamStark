function validarFormulario() {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const celular = document.getElementById('celular').value;
  const titulo = document.getElementById('titulo').value;
  const texto = document.getElementById('texto').value;

  const data = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    celular: celular,
    titulo: titulo,
    texto: texto
  };

  function fetchData(data) {
    const url = '';

    try {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .catch(error => {
          console.error('Erro:', error);
        });
    } catch (error) {
      console.error('Erro na tentativa de enviar os dados:', error);
    }
  }
  fetchData(data);

  if (nome && sobrenome && email && celular && titulo && texto) {
    document.getElementById('mensagem-sucesso').style.display = 'block';
    alert('Agradecemos pelo seu comentário.');
    document.getElementById('nome').value = "";
    document.getElementById('sobrenome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('celular').value = "";
    document.getElementById('titulo').value = "";
    document.getElementById('texto').value = "";
  } else {
    document.getElementById('mensagem-sucesso').style.display = 'none';
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
}