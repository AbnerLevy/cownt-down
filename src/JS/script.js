const countdown = document.querySelector('.countdown');
const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

const endDate = new Date('Apr 03, 2023 09:50:59').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    daysEl.textContent = days;
    hoursEl.textContent = hours < 10 ? '0' + hours : hours;
    minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
  
  setInterval(updateCountdown, 1000);

  function avancarImagem() {
    var carrossel = document.getElementById("carrossel-img");
    var imagens = carrossel.getElementsByTagName("img");
    var indiceAtual = 0;
    for (var i = 0; i < imagens.length; i++) {
      if (imagens[i].classList.contains("ativo")) {
        indiceAtual = i;
        break;
      }
    }
    imagens[indiceAtual].classList.remove("ativo");
    if (indiceAtual == imagens.length - 1) {
      imagens[0].classList.add("ativo");
    } else {
      imagens[indiceAtual + 1].classList.add("ativo");
    }
  }
  
  setInterval(avancarImagem, 3500);
  
