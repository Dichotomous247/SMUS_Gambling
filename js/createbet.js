document.getElementById('betForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const betTitle = document.getElementById('betTitle').value;
    const betDescription = document.getElementById('betDescription').value;
    const bet = { title: betTitle, description: betDescription };
    localStorage.setItem('newBet', JSON.stringify(bet));
    window.location.href = 'index.html';
});