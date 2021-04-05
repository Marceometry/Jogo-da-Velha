const player1 = "X";
const player2 = "O";

var playTime = player1;
var gameOver = false;
var gameStarted = false;


function play() {
    if (gameStarted == false) {
        start()
    } else {
        restart()
    }  
}

function start() {
    atualiza();
    inicializarEspaco();
    gameStarted = true

    const button = document.getElementById('play')
    button.innerHTML = 'Recomeçar'
    button.style.background = 'red'
    button.style.color = 'white'
}

function restart() {
    const espacos = document.getElementsByClassName("box");

    for (var i = 0; i < espacos.length; i++) {
        if (espacos[i].innerHTML != '') {
            espacos[i].innerHTML = '';
            espacos[i].setAttribute("jogada", '');

            playTime = player1;
            atualiza();
        }
    }
    gameOver = false
}

function atualiza() {
    if (gameOver == false) {
        if (playTime == player1) {
            var player = document.querySelectorAll("div#mostrador i")[0];
            player.setAttribute("class", "fas fa-times");
        } else {
            var player = document.querySelectorAll("div#mostrador i")[0];
            player.setAttribute("class", "far fa-circle");
        }
        return;
    }
}

function inicializarEspaco() {
    const espacos = document.getElementsByClassName("box");

    for (var i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function () {
            if (gameOver == false) {

                if (this.innerHTML == '') {
                    if (playTime == player1) {
                        this.innerHTML = "<i class='fas fa-times'></i>";
                        this.setAttribute("jogada", player1);

                        playTime = player2;

                    } else {
                        this.innerHTML = "<i class='far fa-circle'></i>"
                        this.setAttribute("jogada", player2);

                        playTime = player1;
                    }

                    atualiza();
                }

                verificarVencedor();
                return;
            }
        })
    }
}

function verificarVencedor() {
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "")
        || (a1 == b2 && a1 == c3 && a1 != "")) {
        vencedor = a1;
    } else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "")
        || (b2 == a3 && b2 == c1 && b2 != "")) {
        vencedor = b2;
    } else if (((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != "") {
        vencedor = c3;
    }

    if (vencedor != "") {
        gameOver = true;
        alert("O vencedor foi: " + vencedor);
    } if ((a1 != "" && a2 != "" && a3 != "" &&
        b1 != "" && b2 != "" && b3 != "" &&
        c1 != "" && c2 != "" && c3 != "") && vencedor == "") {
        gameOver = true;
        alert("Deu empate!");
    }
}