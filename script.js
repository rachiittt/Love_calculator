function calculateLove() {
    var yourName = document.getElementById('your-name').value;
    var crushName = document.getElementById('crush-name').value;

    if (yourName === '' || crushName === '') {
        alert('Please enter both your name and your crush\'s name!');
        return;
    }

    let key = yourName + '_' + crushName;
    let storedPercentage = localStorage.getItem(key);
    
    if (!storedPercentage) {
        let newPercentage = Math.floor(Math.random() * 51) + 50;
        localStorage.setItem(key, newPercentage);
        storedPercentage = newPercentage;
    }

    var resultMessage = `💖 ${yourName} and ${crushName} have a love compatibility of💖`
    var resultPercentage = `❤️ ${storedPercentage}% ❤️`;

    document.getElementById('result-message').innerText = resultMessage;
    document.getElementById('result-percentage').innerText = resultPercentage;
}

document.getElementById('calculate').addEventListener('click', calculateLove);
