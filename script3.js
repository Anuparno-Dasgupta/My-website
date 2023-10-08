function play(userChoice) {
        let choices = ['Rock', 'Paper', 'Scissors'];
        let i = Math.floor(Math.random() * 3); // randomly pick a choice
        let computerChoice = choices[i];
        let result = '';
        if(userChoice === computerChoice) {
            result = 'Tied!';
        } else if((userChoice === 'Rock' && computerChoice === 'Scissors') || 
                  (userChoice === 'Paper' && computerChoice === 'Rock') || 
                  (userChoice === 'Scissors' && computerChoice === 'Paper')) {
            result = 'You win!';
        } else {
            result = 'You lose!';
        }
        document.getElementById('result').innerHTML = `Player chose ${userChoice}.<br>Computer chose ${computerChoice}.<br>${result}`;
    }