let img = ['dado1.png', 'dado2.png',
'dado3.png', 'dado4.png', 'dado5.png', 'dado6.png'];

let dadi = document.querySelectorAll('img');

function roll() {
    dadi.forEach(function(die) {
        die.classList.add('shakerando');
    });
    
    setTimeout(function(){
        dadi.forEach(function(die){
            die.classList.remove('shakerando');
        });
    
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);
    console.log(dieOneValue,dieTwoValue);
    document.querySelector('#dado-1').setAttribute('src', img[dieOneValue]);
    document.querySelector('#dado-2').setAttribute('src', img[dieTwoValue]);
    document.querySelector('#total').innerHTML = 'Il tuo punteggio: ' + ((dieOneValue +1) + (dieTwoValue + 1));
    },
    
    1000
    );
}

let lanciaButton = document.getElementById("lancia-button");
lanciaButton.addEventListener("click", function() {
  
    roll(); 
  
});
    
    


