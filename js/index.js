function currentBets() {
  window.location.href = "index.js";
}

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
  const newBet = JSON.parse(localStorage.getItem('newBet'));
  if (newBet) {
      const betsContainer = document.getElementById('betsContainer');
      const betCard = document.createElement('div');
      betCard.className = 'card ms-3 mt-3';
      betCard.style.width = '18rem';
      betCard.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">${newBet.title}</h5>
              <p class="card-text">${newBet.description}</p>
              <a href="new_bets.html" class="btn btn-primary">Bet</a>
          </div>
      `;
      betsContainer.appendChild(betCard);
      localStorage.removeItem('newBet');
  }
});
=======
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
>>>>>>> 272b15aace0fbad4c20bd6c0d35ad32597605ea2
