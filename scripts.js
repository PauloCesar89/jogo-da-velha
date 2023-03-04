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
    turn = gameTurn = gamerX , gamerO;
    cel.textContent = turn;
}
