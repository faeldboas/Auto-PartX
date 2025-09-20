let slideIndex = 0;
let timeoutId;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].classList.add("fade"); 
  dots[slideIndex-1].className += " active";

  timeoutId = setTimeout(showSlides, 4000); // 4s para fluidez
}

function plusSlides(n) {
  clearTimeout(timeoutId);
  showManualSlides(slideIndex += n);
}

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
  slides[slideIndex-1].classList.add("fade");
  dots[slideIndex-1].className += " active";

  timeoutId = setTimeout(showSlides, 4000);
}

// BOTÃO CONTRASTE
const contrasteBtn = document.getElementById('contrasteBtn');
const contrasteIcone = contrasteBtn.querySelector('.icone');

contrasteBtn.addEventListener('click', () => {
  document.body.classList.add('fade-transition');

  setTimeout(() => {
    document.body.classList.toggle('alto-contraste');
    document.body.classList.remove('fade-transition');

    contrasteIcone.textContent = document.body.classList.contains('alto-contraste') ? "🌙" : "🌓";
  }, 150);
});

// BOTÃO LEITOR DE TEXTO
const lerBtn = document.getElementById('lerBtn');
const conteudo = document.getElementById('conteudo');

lerBtn.addEventListener('click', () => {
  const texto = conteudo.innerText;
  const speech = new SpeechSynthesisUtterance(texto);
  speech.lang = 'pt-BR';
  window.speechSynthesis.speak(speech);
});






