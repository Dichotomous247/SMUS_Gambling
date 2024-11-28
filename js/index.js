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
              <p class="card-text">Bet: ${newBet.bet}</p>
              <p class="card-text">Amount: ${newBet.amount} ETH</p>
              <a href="bet.html" class="btn btn-primary">Bet</a>
          </div>
      `;
      betsContainer.appendChild(betCard);

      // Store the bet in currentBets in localStorage
      let currentBets = JSON.parse(localStorage.getItem('currentBets')) || [];
      currentBets.push(newBet);
      localStorage.setItem('currentBets', JSON.stringify(currentBets));

      // Remove newBet from localStorage
      localStorage.removeItem('newBet');
  }

  // Load all current bets from localStorage
  const currentBets = JSON.parse(localStorage.getItem('currentBets')) || [];
  currentBets.forEach(bet => {
      const betsContainer = document.getElementById('betsContainer');
      const betCard = document.createElement('div');
      betCard.className = 'card ms-3 mt-3';
      betCard.style.width = '18rem';
      betCard.innerHTML = `
          <div class="card-body">
              <h5 class="card-title">${bet.title}</h5>
              <p class="card-text">Bet: ${bet.bet}</p>
              <p class="card-text">Amount: ${bet.amount} ETH</p>
              <a href="bet.html" class="btn btn-primary">Bet</a>
          </div>
      `;
      betsContainer.appendChild(betCard);
  });
});