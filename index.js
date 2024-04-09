document.addEventListener('DOMContentLoaded', () => {
  const agreementCheckbox = document.getElementById('agreement');
  const submitButton = document.getElementById('submit-btn');
  const loginForm = document.querySelector('.trybewarts-login');

  // Desabilita o botão inicialmente
  submitButton.disabled = true;

  // Event listener para o checkbox de concordância
  agreementCheckbox.addEventListener('change', () => {
    submitButton.disabled = !agreementCheckbox.checked;
  });

  // Função de validação do formulário de login
  function validarLogin(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Verifica se o email e a senha são válidos
    const mensagem = (email === 'tryber@teste.com' && password === '123456')
      ? 'Olá, Tryber!' : 'Email ou senha inválidos.';
    alert(mensagem);
  }

  // Event listener para o formulário de login
  loginForm.addEventListener('submit', validarLogin);
});

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('comment');
  const counter = document.getElementById('counter');

  // Configura o valor inicial do contador
  counter.textContent = 500;

  // Adiciona um evento de entrada para detectar mudanças no textarea
  textarea.addEventListener('input', () => {
    // Atualiza o contador com o número de caracteres restantes
    const remainingCharacters = 500 - textarea.value.length;
    counter.textContent = remainingCharacters >= 0 ? remainingCharacters : 0;
  });
});
