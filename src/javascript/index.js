var map;
var img_usuario_logado  = document.getElementById('img_usuario_logado');
var lbl_usuario_logado = document.getElementById('lbl_usuario_logado');
var imagem_usuario  = document.getElementById('imagem_usuario');
var label_login  = document.getElementById('label_login');


function exibir_opcoes () {
    var aside  = document.getElementById('menu_opcoes');
    var mapa = document.getElementById('mapa')
    if (aside.style.display==='none') {
        aside.style.display='block';
        mapa.style.left='105px';        
        map.invalidateSize();
    } else {
        aside.style.display='none'; 
        mapa.style.left='5px';
        map.invalidateSize();
    }
}

function visualizar_mapa(){
    map = L.map('mapa').setView([-19.9191, -43.9386], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

function drop_opcoes_menu() {
    var div_drop_down = document.getElementById('div_drop_down');
    if (div_drop_down.style.display==='none'){div_drop_down.style.display='block';
    } else {div_drop_down.style.display='none';}
}

function sair() {document.cookie = "login=Ulisses_Antonio; path=/; max-age=0";
     img_usuario_logado.style.display='none';
        lbl_usuario_logado.style.display='none';
        imagem_usuario.style.display='block';
        label_login.style.display='block';
}

window.onload = function() {
    visualizar_mapa();
    if (document.cookie==='login=Ulisses_Antonio') {img_usuario_logado.style.display='block';
        lbl_usuario_logado.style.display='block';
        imagem_usuario.style.display='none';
        label_login.style.display='none';
        console.log(document.cookie);
    } else {img_usuario_logado.style.display='none';
        lbl_usuario_logado.style.display='none';
        imagem_usuario.style.display='block';
        label_login.style.display='block';
        console.log(document.cookie);
    }
}