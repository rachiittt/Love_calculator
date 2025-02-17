function calculateLove() {
    var yourName = document.getElementById('your-name').value;
    var crushName = document.getElementById('crush-name').value;

    if (yourName === '' || crushName === '') {
        alert('Please enter both your name and your crush\'s name!');
        return;
    }

    let percentage = Math.floor(Math.random() * 101);

    var resultMessage = `💖 Your love compatibility with ${crushName} is 💖`;
    var resultPercentage = `❤️ ${percentage}% ❤️`;

    document.getElementById('result-message').innerText = resultMessage;
    document.getElementById('result-percentage').innerText = resultPercentage;
}

document.getElementById('calculate').addEventListener('click', calculateLove);
