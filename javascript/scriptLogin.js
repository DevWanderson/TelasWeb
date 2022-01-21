function mudaFoto(foto) {
	document.getElementById("icone").src = foto;
}

var quebrada = false;
		function mudaLampada(tipo){
			if(!quebrada){
				document.getElementById("luz").src= "_imagens/" +tipo+ ".jpg";
				if(tipo == 'lampada-quebrada'){
					quebrada= true;
				}
			}
		}

<img src="_imagens/lampada-apagada.jpg" id="luz" onmousemove="mudaLampada('lampada-acesa')" onmouseout="mudaLampada('lampada-apagada')" onclick="mudaLampada('lampada-quebrada')" />


function acendeLampada(){
    document.getElementById("luz").src="_imagens/lampada-acesa.jpg";
}
function apagaLampada(){
    document.getElementById("luz").src="_imagens/lampada-apagada.jpg";
}
function quebraLampada(){
    document.getElementById("luz").src="_imagens/lampada-quebrada.jpg";
}

<img src="_imagens/lampada-apagada.jpg" id="luz" onmousemove="acendeLampada()" onmouseout="apagaLampada()" onclick="quebraLampada()"/>
