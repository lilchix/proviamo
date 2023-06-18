function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

function aggiungiAlCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.textContent);
  numero++;
  carrello.textContent = numero;
}

function rimuoviDalCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.textContent);
  numero--;
  carrello.textContent = numero;
}

function svuotaCarrello() {
  var carrello = document.getElementById("carrello");
  carrello.textContent = 0;
}


