function menuOnClick() {
  // Aggiunge o rimuove la classe "change" per gli elementi corrispondenti
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

function aggiungiAlCarrello() {
  // Incrementa il numero nel carrello
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.textContent);
  numero++;
  carrello.textContent = numero;
}

function rimuoviDalCarrello() {
  // Decrementa il numero nel carrello
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.textContent);
  numero--;
  carrello.textContent = numero;
}

function svuotaCarrello() {
  // Resetta il numero nel carrello a zero
  var carrello = document.getElementById("carrello");
  carrello.textContent = 0;
}

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });



