
const timer = document.getElementById('timer');

const displayPointA = document.getElementById('displayPointA')
const displayPointB = document.getElementById('displayPointB')

const displaySetA = document.getElementById('setA')
const displaySetB = document.getElementById('setB')

const pointsButtons = document.querySelectorAll('.botones-puntajes')

let pointsTeamA = 0;
let pointsTeamB = 0;

let setA = 0;
let setB = 0;

let seg = 0;
let min = 0;
let hora = 0;

function iniciarTiempo() {

    seg++;

    if (seg >= 60) {
        min++;
        seg = 0;
    }

    if (min >= 60) {
        hora++;
        min = 0;
    }

    // console.log(`${hora}  : ${min} : ${seg}`)

    timer.innerText = `${hora} : ${min} : ${seg}`

}


function start() {
    setInterval(iniciarTiempo, 1000);
    //Visibibilidad a botones
    pointsButtons.forEach(element => {
        element.style.visibility = 'visible';
    });
    
    // console.log('seg ' + seg ,'min',min, 'hora',hora)
}

//Botones de Puntajes

function sumarA() {
    pointsTeamA++;
    console.log('TeamA: ', pointsTeamA)
    verificarGanador()
    displayPointA.innerText = `${pointsTeamA}` 
}

function restarA() {
    if (pointsTeamA >= 1) {
        pointsTeamA--;
        console.log('TeamA: ', pointsTeamA)
    }
    displayPointA.innerText = `${pointsTeamA}`
}

function sumarB() {
    pointsTeamB++
    console.log('TeamB: ', pointsTeamB)
    verificarGanador()
    displayPointB.innerText = `${pointsTeamB}`
}

function restarB() {
    if (pointsTeamB >= 1) {
        pointsTeamB--;
        console.log('TeamB: ', pointsTeamB)
    }
    
    displayPointB.innerText = `${pointsTeamB}`
}

//Funcion evaluacion de puntaje 
function verificarGanador(){

    if (pointsTeamA >=5 && pointsTeamB <= (pointsTeamA - 2)){ 
        //Variable para realizar push dentro de arreglo de puntaje ganadao
        console.log('team1 Gano el Set puntaje' + pointsTeamA)
        pointsTeamA = 0;
        pointsTeamB = 0;
        setA++;
        displaySetA.innerText = (`Set: ${setA}`)
        if(setA == 3){
            console.log('Team1 gano el juego');
            setA = 0;
            displaySetA.innerText = (`Set: ${setA}`)
        }
    }

    if (pointsTeamB >=5 && pointsTeamA <= (pointsTeamB - 2)){ 
        console.log('team2 Gano el Set')
        pointsTeamB = 0;
        pointsTeamA = 0;
        setB++;
        displaySetB.innerText = (`Set: ${setB}`)
        if(setB == 3){
            setB = 0;
            displaySetB.innerText = (`Set: ${setB}`)
            console.log('Team2 gano el juego');
        }
    }

}

