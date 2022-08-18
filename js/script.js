let btn_encriptar =  document.getElementById("btn-encriptar");
let btn_desencriptar =  document.getElementById("btn-desencriptar");
let btn_copiar = document.getElementById("btn-copiar");
let msg_encriptar = document.getElementById("inputTexto");
let msg_desencriptar = document.getElementById("mensaje2");


function encriptar(){
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    let txtCifrado = texto.replace(/e/igm, "enter");
    txtCifrado = txtCifrado.replace(/o/igm, "ober");
    txtCifrado = txtCifrado.replace(/i/igm, "imes");
    txtCifrado = txtCifrado.replace(/a/igm, "ai");
    txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("right-img").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("mensaje2").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
    document.getElementById("mensaje2").style.display = "show";
    document.getElementById("mensaje2").style.display = "inherit";
}

function desencriptar(){
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    let txtCifrado = texto.replace(/enter/igm, "e");
    txtCifrado = txtCifrado.replace(/ober/igm, "o");
    txtCifrado = txtCifrado.replace(/imes/igm, "i");
    txtCifrado = txtCifrado.replace(/ai/igm, "a");
    txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("right-img").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("mensaje2").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
    document.getElementById("mensaje2").style.display = "show";
    document.getElementById("mensaje2").style.display = "inherit";
}

function copiar(){
    navigator.clipboard.writeText(msg_desencriptar.textContent);
    alert("Copiado en portapapeles");
}


btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;
btn_copiar.onclick = copiar;

