document.getElementById('betForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const betTitle = document.getElementById('betTitle').value;
    const bet = { title: betTitle, description: betDescription };
    const betAmount = document.getElementById('betAmount').value;
   
    if(betTitle && bet && betAmount) {
        const betDetails = {title: betTitle, bet: bet, amount: betAmount};
        localStorage.setItem('newBet', JSON.stringify(bet));
        window.location.href = 'index.html';
    }
    else{
        alert('Please fill in all fields.');
    }

});