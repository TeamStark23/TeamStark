//Botao para voltar ao topo da pagina
let btnTop = document.getElementById('btn-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}