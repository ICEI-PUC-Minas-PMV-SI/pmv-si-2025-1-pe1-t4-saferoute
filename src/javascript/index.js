var map;
var img_usuario_logado  = document.getElementById('img_usuario_logado');
var lbl_usuario_logado = document.getElementById('lbl_usuario_logado');
var imagem_usuario  = document.getElementById('imagem_usuario');
var label_login  = document.getElementById('label_login');
var lat;
var lon;
var rua;
var url;
var endereco;


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

function visualizar_mapa(lat,lon){
    if (window.map) {window.map.remove();
     }
    map = L.map('mapa').setView([lat,lon], 16);
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

function ver_coodenada(){
    rua = undefined;
    cep = undefined;
    endereco = undefined    
    rua=document.getElementById('input_endereco').value;
    cep=document.getElementById('input_cep').value;
    if (rua) {
        endereco =  rua + ', Belo Horizonte';
        url = 'https://nominatim.openstreetmap.org/search?q=${'+ endereco + '}&format=json&limit=1';
                fetch(url)
        .then(response => response.json())
        .then(data => {
        if (data.length > 0) {
          lat = data[0].lat;
          lon = data[0].lon;
          visualizar_mapa(lat,lon)
         } else {lat=undefined;
                  lon=undefined;
            Swal.fire({
  icon: 'error',
  text: 'Não foi possível localizar a rua pesquisada!',
  confirmButtonText: 'OK'
});}
		  })
} else if (cep) {
        var url_cep = 'https://viacep.com.br/ws/'+ cep +'/json/';
        fetch(url_cep)
        .then(response => {if (!response.ok){
            throw new Error('Erro na resposta da API');            
        } return response.json()})
        .then(data => {
        if (data.erro) {Swal.fire({
            icon: 'error',
            text: 'Não foi possível localizar o CEP pesquisado!',
            confirmButtonText: 'OK'});
        }
    rua = data.logradouro;
    endereco =  rua + ', Belo Horizonte';
    url = 'https://nominatim.openstreetmap.org/search?q=${'+ endereco + '}&format=json&limit=1';    
            fetch(url)
        .then(response => response.json())
        .then(data => {
        if (data.length > 0) {
          lat = data[0].lat;
          lon = data[0].lon;
          visualizar_mapa(lat,lon)
         } else {lat=undefined;
                  lon=undefined;
            Swal.fire({
  icon: 'error',
  text: 'Não foi possível localizar a rua pesquisada!',
  confirmButtonText: 'OK'
});}
		  })})
        .catch(error => {
      Swal.fire({
      icon: 'error',
      text: 'Não foi possível localizar o CEP pesquisado!',
      confirmButtonText: 'OK'
    });})        
        }};
        function buscarPrevisaoTempo(latitude = -19.92, longitude = -43.94) {
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=auto`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const horaAtual = new Date().toISOString().slice(0, 13); // exemplo: "2025-05-19T15"
			const index = data.hourly.time.findIndex(hora => hora.startsWith(horaAtual));

			if (index !== -1) {
				const temperatura = data.hourly.temperature_2m[index];
				const div = document.getElementById('previsao_tempo_texto');
				div.textContent = `Temperatura atual: ${temperatura}°C`;
			}
		})
		.catch(error => {
			console.error('Erro ao buscar previsão do tempo:', error);
		});
}


window.onload = function() {
    lat = -19.9191
    lon = -43.9386
    visualizar_mapa(lat,lon);
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
    buscarPrevisaoTempo();
}