const cel = document.querySelectorAll('.cel');
var gamerX = 'X';
var gamerO = 'O';
let gameTurn = true;
const victorySeq =[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

document.addEventListener('click', (e) =>{
    if(e.target.matches('.cel')){
        game(e.target.id);
    }
});
 
function game(id){
    var cel = document.getElementById(id);
        turn = gameTurn ? gamerX : gamerO;    //operador condicional ternario: se a condição(gameTurn) for true retorna o (gamerX) se for false retorna (gamerO)
        gameTurn = !gameTurn;              //passa para a vez do jogador gamerO
        cel.textContent = turn;
        cel.classList.add(turn);
        checkGame(gameTurn);
};

function checkGame(){
    const gamerWinner = victorySeq.some((seq) =>{
        return seq.every((index) =>{
            return cel[index].classList.contains(turn);
        });
    });
    if(gamerWinner){
        endGame(turn)
    }
    else if(gameTied()){
        endGame();
    }
    else{

    }
}

function gameTied(){
    let X = 0;
    let O = 0;

    for(index in cel){
        if(!isNaN(index)){                              /*verifica se o elemento é um numero*/
            if(cel[index].classList.contains(gamerX)){
                X++
               }
           if(cel[index].classList.contains(gamerO)){
               O++
           }
        }

    }
    return X + O === 9 ? true : false;   //operador condicional ternario: define se todas as celulas foram preenchidas
}

function endGame(gamerWinner = null){
    const popUp = document.getElementById('popUp');
    const container = document.querySelector('.container');
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let msg = null;

    popUp.style.display = "block";
    container.style.display = "none";


    if(gamerWinner){
        popUp.appendChild(h2);
        h2.innerHTML = "VENCEDOR!!!";
    }
    else{
        popUp.appendChild(h3);
        h3.innerHTML = "EMPATOU!!!";
    }
}