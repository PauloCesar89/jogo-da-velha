const cel = document.querySelectorAll('.cel');
var gamerX = 'X';
var gamerO = 'O';
let gameTurn = true;

document.addEventListener('click', (e) =>{
    if(e.target.matches('.cel')){
        game(e.target.id);
    }
});
 
function game(id){
    var cel = document.getElementById(id);
        turn = gameTurn ? gamerX : gamerO;    //operador condicional ternario: se a condição(gameTurn) for true retorna o (gamerX) se for false retorna (gamerO)
        gameTurn = !gameTurn;                 //passa para a vez do jogador gamerO
        cel.textContent = turn;

};
