var img_usuario_logado  = document.getElementById('img_usuario_logado');
var lbl_usuario_logado = document.getElementById('lbl_usuario_logado');
var nome = document.getElementById("nome");
var sobrenome = document.getElementById("sobrenome");
var cep = document.getElementById("cep");
var endereco = document.getElementById("endereco");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var municipio = document.getElementById("municipio");
var uf = document.getElementById("uf");
var masculino = document.getElementById("radio_masculino");

function exibir_opcoes () {
    var aside  = document.getElementById('menu_opcoes');
    if (aside.style.display==='none') {
        aside.style.display='block';
    } else {
        aside.style.display='none'; 
 }
}

function sair() {
}

function drop_opcoes_menu() {
    var div_drop_down = document.getElementById('div_drop_down');
    if (div_drop_down.style.display==='none'){div_drop_down.style.display='block';
    } else {div_drop_down.style.display='none';}
}

window.onload = function() {
    nome.value="Ulisses";
    sobrenome.value="Antônio";
    cep.value = "30535-490";
    endereco.value = "Rua Padre Evangelista";
    municipio.value = "Belo Horizonte";
    uf.value = "MG";
    bairro.value = "Coração Eucarístico";
    numero.value = "115";
    complemento.value = "Apartamento 202";
    masculino.checked = true;
}