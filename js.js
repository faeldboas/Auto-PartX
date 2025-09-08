let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Esconde todas as imagens
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Atualiza o índice para a próxima imagem
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  // Remove a classe 'active' de todas as bolinhas
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Mostra a imagem atual e ativa a bolinha correspondente
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // Troca de imagem a cada 3 segundos
  setTimeout(showSlides, 3000); 
}

// Controles para os botões "próximo" e "anterior"
function plusSlides(n) {
  clearTimeout(timeoutId); // Limpa o temporizador para não interferir na mudança manual
  showManualSlides(slideIndex += n);
}

// Controles para as bolinhas de navegação
function currentSlide(n) {
  clearTimeout(timeoutId);
  showManualSlides(slideIndex = n);
}

function showManualSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // Reinicia a mudança automática após a navegação manual
  timeoutId = setTimeout(showSlides, 3000); 
}