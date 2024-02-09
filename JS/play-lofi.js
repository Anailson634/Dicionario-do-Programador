var Musica=document.getElementById("lofi")
var Imagem=document.getElementById("play")
var ture_or_false=1

function Pausar(){
    Musica.pause()
}
function Retomar(){
    Musica.play()
}

function click_bt(){

    if (ture_or_false) {
        Pausar()
        ture_or_false=0
        Imagem.src="./Imagens/Play-PNG.png"
    }
    else {
        Retomar()
        ture_or_false=1
        Imagem.src="./Imagens/Pause-PNG.png"
    }
    
}