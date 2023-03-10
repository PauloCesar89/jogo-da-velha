const cel = document.querySelectorAll('.cel');
const gamerX = 'X';
const gamerO = 'O';
const victorySeq =[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
let finishedGame = false;

document.addEventListener('click', (e) =>{
    if(e.target.matches('.cel')){
        game(e.target.id, gamerX);
        setTimeout(() => bot(), 400);
    }
});

function bot(){
    const move = [];
    for(index in cel){
        if(!isNaN(index)){
            if (
            !cel[index].classList.contains("X") && 
            !cel[index].classList.contains("O")
            ){
                move.push(index);
            }
        }

    }

    const moveRandom = Math.floor(
        Math.random() * move.length       //gera um numero randomico dentro das celulas disponiveis
    );
        if(!finishedGame){
            game(move[moveRandom], gamerO);
}

}
 
function game(id,turn){
    const cel = document.getElementById(id);
        cel.textContent = turn;
        cel.classList.add(turn);
        checkGame(turn);
};

function checkGame(turn){
    const gamerWinner = victorySeq.some((seq) =>{
        return seq.every((index) =>{
            return cel[index].classList.contains(turn);
        });
    });
    if(gamerWinner){
        endGame(turn);
    }
    else if(gameTied()){
        endGame();
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
    finishedGame = true;
    const popUp = document.getElementById('popUp');
    const container = document.querySelector('.container');
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");

    popUp.style.display = "block";
    container.style.display = "none";
    


    if(gamerWinner){
        popUp.appendChild(h2);
        h2.innerHTML = `Vencedor é ${gamerWinner}!`;
    }
    else{
        popUp.appendChild(h3);
        h3.innerHTML = "EMPATOU!!!";
    }

    setTimeout(() => location.reload(), 3000)
}