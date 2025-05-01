var map;

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

window.onload = function() {
    visualizar_mapa();
}