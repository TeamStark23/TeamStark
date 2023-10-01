   // Seleciona o formulário
   const form = document.querySelector('.needs-validation');

   // Adiciona um listener para o evento de submit
   form.addEventListener('submit', function(event) {
     // Verifica se o formulário é válido
     if (!form.checkValidity()) {
       event.preventDefault(); // Impede o envio do formulário
       event.stopPropagation(); // Evita a propagação do evento
     }

     form.classList.add('was-validated'); // Adiciona a classe para exibir o feedback de validação
   }, false);