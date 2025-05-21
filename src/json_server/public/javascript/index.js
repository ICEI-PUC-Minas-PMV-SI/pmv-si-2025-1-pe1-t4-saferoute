var map;
const img_usuario_logado  = document.querySelector('#img_usuario_logado');
const lbl_usuario_logado = document.getElementById('lbl_usuario_logado');
const imagem_usuario  = document.getElementById('imagem_usuario');
const label_login  = document.getElementById('label_login');
let lat = 0.00;
let lon = 0.00;
let rua = "";
let url = "";
let endereco;
var rua_api;
var marcador;
var imagem_usuario_logado; 
var nome_usuario_logado;
var cookie_login;

function exibir_opcoes () {
    
    const aside  = document.getElementById('menu_opcoes');
    const mapa = document.getElementById('mapa')
    
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

function visualizar_mapa(lat,lon,marcador){
    if (window.map) {window.map.remove();
     }
    map = L.map('mapa').setView([lat,lon], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    if (marcador) {
    L.marker([lat,lon]).addTo(map);}
}

function drop_opcoes_menu() {
    var div_drop_down = document.getElementById('div_drop_down');
    if (div_drop_down.style.display==='none'){div_drop_down.style.display='block';
    } else {div_drop_down.style.display='none';}
}

function sair() {document.cookie = "login=usuario_logado; path=/; max-age=0";
    document.cookie = "nome=nome_usuario_logado; path=/; max-age=0";
    document.cookie = "imagem=imagem_usuario_logado; path=/; max-age=0";
    img_usuario_logado.style.display='none';
    lbl_usuario_logado.style.display='none';
    imagem_usuario.style.display='block';
    label_login.style.display='block';
    cookie_login=false;
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
        console.log(url)
                fetch(url)
        .then(response => response.json())
        .then(data => {
        if (data.length > 0) {
        rua_api = data[0].name;
        rua_api = rua_api.toLowerCase();
        rua_api = rua_api.replace(/^(rua|av(enida)?|trav(essa)?|al(ameda)?|estr(ada)?|praça|pç\.?|largo|lg\.?|beco|viel(a)?|rod(ovia)?|via|boulevard|serv(idão)?|caminho|pass(agem|arela)?)[\s\.]+/i, '');
        rua_api = rua_api.trim();

        rua = rua.toLowerCase();
        rua = rua.replace(/^(rua|av(enida)?|trav(essa)?|al(ameda)?|estr(ada)?|praça|pç\.?|largo|lg\.?|beco|viel(a)?|rod(ovia)?|via|boulevard|serv(idão)?|caminho|pass(agem|arela)?)[\s\.]+/i, '');
        rua = rua.trim();
        console.log(rua_api);
        console.log(rua);
        if (rua===rua_api){
          lat = data[0].lat;
          lon = data[0].lon;
          marcador = true
          visualizar_mapa(lat,lon,marcador)
        } else {lat=undefined;
                  lon=undefined;
            Swal.fire({
  icon: 'error',
  text: 'Não foi possível localizar a rua pesquisada!',
  confirmButtonText: 'OK'
});}
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
    rua = data.logradouro;
    endereco =  rua + ', Belo Horizonte';
    url = 'https://nominatim.openstreetmap.org/search?q=${'+ endereco + '}&format=json&limit=1';    
            fetch(url)
        .then(response => response.json())
        .then(data => {
        if (data.length > 0) {
            lat = data[0].lat;
          lon = data[0].lon;
          marcador=true
          visualizar_mapa(lat,lon,marcador)
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


function obterCookie() {
  let cookies = document.cookie.split(';');
  console.log(cookies);
  cookie_login = false;
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i].trim();
    if (c.startsWith('nome=')) {
      nome_usuario_logado = decodeURIComponent(c.substring('nome'.length + 1));
      document.getElementById("lbl_usuario_logado").textContent = nome_usuario_logado;  
    }
    if (c.startsWith('imagem=')) {
      imagem_usuario_logado = decodeURIComponent(c.substring('imagem'.length + 1));
      document.getElementById("img_usuario_logado").src="imagens/" + imagem_usuario_logado;
    }
    if (c.startsWith('login=usuario_logado')) {
      cookie_login=true;
  } 
}
verifica_login (cookie_login);
console.log(cookie_login)
}

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

function verifica_login (cookie_login){
    if (cookie_login===true) {
        img_usuario_logado.style.display='block';
        lbl_usuario_logado.style.display='block';
        imagem_usuario.style.display='none';
        label_login.style.display='none';
    } else if(cookie_login===false){
        img_usuario_logado.style.display='none';
        lbl_usuario_logado.style.display='none';
        imagem_usuario.style.display='block';
        label_login.style.display='block';
    }
}

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    obterCookie();
  }
});

window.onload = function() {
    lat = -19.9191
    lon = -43.9386
    marcador = false
    visualizar_mapa(lat,lon,false);
    obterCookie();
    verifica_login (cookie_login);
    buscarPrevisaoTempo();
    if (cookie_login===true) {
        img_usuario_logado.style.display='block';
        lbl_usuario_logado.style.display='block';
        imagem_usuario.style.display='none';
        label_login.style.display='none';
    } else if(cookie_login===false){
        img_usuario_logado.style.display='none';
        lbl_usuario_logado.style.display='none';
        imagem_usuario.style.display='block';
        label_login.style.display='block';
    }
}