var img_usuario_logado  = document.getElementById('img_usuario_logado');
var lbl_usuario_logado = document.getElementById('lbl_usuario_logado');
var imagem_usuario  = document.getElementById('imagem_usuario');
var label_login  = document.getElementById('label_login');
var map;
var lat;
var lon;
var rua;
var cep;
var url;
var endereco;
var rua_api;
var marcador;
var valida_cep;
var input_rua;
var imagem_usuario_logado; 
var nome_usuario_logado;
var cookie_login;
let marcadorAtual;
let marcadorPesquisado;
let cookieRuaPesquisada;
let rua_api_sem_tratamento;
let rua_alagada_api;
let blRotaAlternativa;
let rota_alternativa_api;
let coord_rua_alagada_api;
let coord_rota_alternativa_api;

input_rua = document.getElementById('input_rua_alagada');

function exibir_opcoes () {
    var aside  = document.getElementById('menu_opcoes');
    console.log(rua_alagada_api);
    console.log(coord_rua_alagada_api);
    console.log(rota_alternativa_api);
    console.log(coord_rota_alternativa_api);

    if (aside.style.display==='none') {
        aside.style.display='block';
    } else {
        aside.style.display='none'; 
 }
}

function sair() {document.cookie = "login=usuario_logado; path=/; max-age=0";
    document.cookie = "nome=nome_usuario_logado; path=/; max-age=0";
    document.cookie = "imagem=imagem_usuario_logado; path=/; max-age=0";
    img_usuario_logado.style.display='none';
    lbl_usuario_logado.style.display='none';
    imagem_usuario.style.display='block';
    label_login.style.display='block';
    cookie_login=false;

    if (window.location.pathname.endsWith("reportar_conforme_template.html")) {
    window.location.href = "index.html";
  }
}

function drop_opcoes_menu() {
    var div_drop_down = document.getElementById('div_drop_down');
    if (div_drop_down.style.display==='none'){div_drop_down.style.display='block';
    } else {div_drop_down.style.display='none';}
}

function obterCookie() {
  var cookies = document.cookie.split(';');
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

function getColor(severidade) {
        switch (severidade.toLowerCase()) {
            case 'alta': return 'red';
            case 'média': return 'orange';
            case 'baixa': return 'green';           
        }
    }

function toggleLegenda() {
    const content = document.getElementById("legend-content");
    const toggle = document.getElementById("legend-toggle");
    if (content.style.display === "none") {
        content.style.display = "block";
        toggle.innerText = "−";
    } else {
        content.style.display = "none";
        toggle.innerText = "+";
    }
}

function visualizar_mapa(lat, lon, marcador) {
    if (window.map) {
        window.map.remove();
    }
    map = L.map('mapa').setView([lat, lon], 16); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const legenda = L.control({ position: 'bottomright' });

    legenda.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'legend-box');

    div.innerHTML = `
        <div class="legend-header" onclick="toggleLegenda()">
            <strong>ℹ️ Severidade dos Alagamentos</strong>
            <span id="legend-toggle">−</span>
        </div>
        <div id="legend-content">
            <div><i class="legend-icon" style="background: red;"></i> Alta</div>
            <div><i class="legend-icon" style="background: orange;"></i> Média</div>
            <div><i class="legend-icon" style="background: green;"></i> Baixa</div>
            <div><i class="legend-icon" style="background: blue;"></i> Rota alternativa</div>
        </div>
    `;
    return div;
};

legenda.addTo(map);

    if (marcador) {
        if (marcadorAtual){ 
          marcadorAtual.remove(map);
        }
        marcadorPesquisado = L.marker([lat, lon]).addTo(map);
        criando_cookie();
    
    }

    fetch('http://localhost:3000/reportes')
        .then(response => response.json())
        .then(data => {
            data.forEach(reporte => {
                const cor = getColor(reporte.severidade);

                const coordsRuaAlagada = reporte["geolocalizaçãoRuaAlagada"];
                if (coordsRuaAlagada) {
                    L.polyline(coordsRuaAlagada, {
                        color: cor,
                        weight: 11,
                        opacity: 1,
                    }).addTo(map);
                }

                const coordsRotaAlternativa = reporte["geolocalizaçãoRotaAlternativa"];
                if (coordsRotaAlternativa) {
                    L.polyline(coordsRotaAlternativa, {
                        color: 'blue',
                        weight: 11,
                        opacity: 1,
                        
                    }).addTo(map);
                }
            });
        })
        .catch(err => console.error('Erro ao carregar db.json:', err));
}

function isValidCEP(cep) {
  return /^\d{5}-?\d{3}$/.test(cep);
}


function ver_coodenada(blRotaAlternativa,rua,cep){
    /*rua = undefined;
    cep = undefined;
    rua=input_rua.value;
    cep=input_rua.value;*/
    endereco = undefined;
    valida_cep = isValidCEP(cep);
    console.log(valida_cep);
    console.log(rua);
    if (valida_cep==false) {
        endereco =  rua + ', Belo Horizonte';
        url = 'https://nominatim.openstreetmap.org/search?q=${'+ endereco + '}&format=json&limit=1';
        console.log(url)
                fetch(url)
        .then(response => response.json())
        .then(data => {
        if (data.length > 0) {
        rua_api = data[0].name;
        rua_api_sem_tratamento = rua_api;
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
          marcador = true;

          if (blRotaAlternativa) {
           rota_alternativa_api = rua_api_sem_tratamento;
           coord_rota_alternativa_api = data[0].boundingbox;
           coord_rota_alternativa_api = [
  [parseFloat(coord_rota_alternativa_api[0]), parseFloat(coord_rota_alternativa_api[2])],
  [parseFloat(coord_rota_alternativa_api[1]), parseFloat(coord_rota_alternativa_api[3])]
];
        } else {
           rua_alagada_api = rua_api_sem_tratamento;
           coord_rua_alagada_api = data[0].boundingbox;
          coord_rua_alagada_api = [
  [parseFloat(coord_rua_alagada_api[0]), parseFloat(coord_rua_alagada_api[2])],
  [parseFloat(coord_rua_alagada_api[1]), parseFloat(coord_rua_alagada_api[3])]
]; }     

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

        if (blRotaAlternativa) {
           rota_alternativa_api = data[0].name;
           coord_rota_alternativa_api = data[0].boundingbox;
          coord_rota_alternativa_api = [
  [parseFloat(coord_rota_alternativa_api[0]), parseFloat(coord_rota_alternativa_api[2])],
  [parseFloat(coord_rota_alternativa_api[1]), parseFloat(coord_rota_alternativa_api[3])]
];

        } else {
           rua_alagada_api = data[0].name;
           coord_rua_alagada_api = data[0].boundingbox;
           coord_rua_alagada_api = [
  [parseFloat(coord_rua_alagada_api[0]), parseFloat(coord_rua_alagada_api[2])],
  [parseFloat(coord_rua_alagada_api[1]), parseFloat(coord_rua_alagada_api[3])]
];
        }       

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

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    obterCookie();
  }
});

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

function verificar_login_tela_reporar (cookie_login){
  if (cookie_login===true){
    window.location.href = "reportar_conforme_template.html";
  } else {Swal.fire({
      icon: 'info',
      text: 'É necessário efetuar o login para reportar um alagamento.',
      confirmButtonText: 'OK'
    });}           
  }

function success(pos){
  

    if (map === undefined) {
        map = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 13);
    } else {
        map.remove();
        map = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    if (marcadorAtual){
      marcadorAtual.remove(map);
    }
    if (marcadorPesquisado){
      marcadorPesquisado.remove(map);
    }
    marcadorAtual = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Eu estou aqui!')
        .openPopup();
    
}

function error(err){
    console.log(err);
}

function criando_cookie (){
    document.cookie = "ruaPesquisada = true; path=/;";
   
}

window.onload = function() {
   adicionarEventListeners();
    lat = -19.9191
    lon = -43.9386   
    marcador = false
    visualizar_mapa(lat,lon,false);
    obterCookie();
    verifica_login (cookie_login);
    if (cookie_login===true) {img_usuario_logado.style.display='block';
        lbl_usuario_logado.style.display='block';
        imagem_usuario.style.display='none';
        label_login.style.display='none';
        console.log(document.cookie);
    } else if (cookie_login===false){img_usuario_logado.style.display='none';
        lbl_usuario_logado.style.display='none';
        imagem_usuario.style.display='block';
        label_login.style.display='block';
        console.log(document.cookie);
    }

    obterCookie();
  
    console.log(cookieRuaPesquisada);
    if (cookieRuaPesquisada != true) {var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true
});}    
}

input_rua.addEventListener('change', function (){if ((input_rua.value).length >0) {
    blRotaAlternativa = false;
    rua=input_rua.value;
    cep=input_rua.value;
    ver_coodenada(blRotaAlternativa,rua,cep);}})

input_rota_alternativa.addEventListener('change', function (){if ((input_rota_alternativa.value).length >0) {
    blRotaAlternativa = true;
    rua=input_rota_alternativa.value;
    cep=input_rota_alternativa.value;
    ver_coodenada(blRotaAlternativa,rua,cep);}})


const JSON_SERVER_URL = 'http://localhost:3000';

async function obterProximoId() {
    try {
        const response = await fetch(`${JSON_SERVER_URL}/reportes`);
        const reportes = await response.json();
        
        if (reportes.length === 0) {
            return 1;
        }
        
        const maiorId = Math.max(...reportes.map(reporte => reporte.id));
        return maiorId + 1;
    } catch (error) {
        console.error('Erro ao obter próximo ID:', error);
        return 1;
    }
}


function obterIdUsuarioLogado() {
    
    
    var cookies = document.cookie.split(';');
    var nomeUsuario = '';
    
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i].trim();
        if (c.startsWith('nome=')) {
            nomeUsuario = decodeURIComponent(c.substring('nome'.length + 1));
            break;
        }
    }
    
    
    if (nomeUsuario) {
        return nomeUsuario.length + Math.floor(Math.random() * 100); // ID temporário
    }
    return 1;
}


function obterDataHoraAtual() {
    const agora = new Date();
    return agora.toISOString();
}


function validarFormulario() {
    const ruaAlagada = document.getElementById('input_rua_alagada').value.trim();
    const descricao = document.getElementById('txtarea_descricao').value.trim();
    const rotaAlternativa = document.getElementById('input_rota_alternativa').value.trim();
    const severidadeRadios = document.querySelectorAll('input[name="severidade"]');
    
    let severidadeSelecionada = null;
    severidadeRadios.forEach(radio => {
        if (radio.checked) {
            severidadeSelecionada = radio.value;
        }
    });

    
    if (!ruaAlagada) {
        Swal.fire({
            icon: 'error',
            title: 'Campo obrigatório!',
            text: 'Por favor, informe a rua/CEP alagada.',
            confirmButtonText: 'OK'
        });
        return false;
    }

    if (!descricao) {
        Swal.fire({
            icon: 'error',
            title: 'Campo obrigatório!',
            text: 'Por favor, descreva a situação do alagamento.',
            confirmButtonText: 'OK'
        });
        return false;
    }

    if (!rotaAlternativa) {
        Swal.fire({
            icon: 'error',
            title: 'Campo obrigatório!',
            text: 'Por favor, informe uma rota alternativa.',
            confirmButtonText: 'OK'
        });
        return false;
    }

    if (!severidadeSelecionada) {
        Swal.fire({
            icon: 'error',
            title: 'Campo obrigatório!',
            text: 'Por favor, selecione o nível de severidade.',
            confirmButtonText: 'OK'
        });
        return false;
    }

    return {
        rua: ruaAlagada,
        descricao: descricao,
        rotaAlternativa: rotaAlternativa,
        severidade: severidadeSelecionada
    };
}


async function enviarReporte(dadosReporte) {
    try {
        
        Swal.fire({
            title: 'Enviando reporte...',
            text: 'Por favor, aguarde.',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        const proximoId = await obterProximoId();
        const idUsuario = obterIdUsuarioLogado();
        const dataHora = obterDataHoraAtual();

        const novoReporte = {
            id: proximoId,
            rua: rua_alagada_api,
            descricao: dadosReporte.descricao,
            rotaAlternativa: rota_alternativa_api,
            severidade: dadosReporte.severidade,
            idUsuario: idUsuario,
            dataHora: dataHora,
            geolocalizaçãoRuaAlagada: coord_rua_alagada_api,
            geolocalizaçãoRotaAlternativa: coord_rota_alternativa_api
        };

        const response = await fetch(`${JSON_SERVER_URL}/reportes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoReporte)
        });

        if (response.ok) {
            const reporteCriado = await response.json();
            
            Swal.fire({
                icon: 'success',
                title: 'Reporte enviado com sucesso!',
                text: `Seu reporte foi registrado com o ID #${reporteCriado.id}`,
                confirmButtonText: 'OK'
            }).then(() => {
                limparFormulario();
            });
        } else {
            throw new Error('Erro ao enviar reporte');
        }

    } catch (error) {
        console.error('Erro ao enviar reporte:', error);
        
        Swal.fire({
            icon: 'error',
            title: 'Erro ao enviar reporte!',
            text: 'Ocorreu um erro ao tentar enviar seu reporte. Verifique se o JSON Server está rodando e tente novamente.',
            confirmButtonText: 'OK'
        });
    }
}


function limparFormulario() {
    document.getElementById('input_rua_alagada').value = '';
    document.getElementById('txtarea_descricao').value = '';
    document.getElementById('input_rota_alternativa').value = '';
    
    
    const severidadeRadios = document.querySelectorAll('input[name="severidade"]');
    severidadeRadios.forEach(radio => {
        radio.checked = false;
    });
    
    
    if (window.map) {
        window.map.remove();
        lat = -19.9191;
        lon = -43.9386;   
        marcador = false;
        visualizar_mapa(lat, lon, false);
    }
}


function cancelarReporte() {
    Swal.fire({
        title: 'Cancelar reporte?',
        text: 'Todos os dados preenchidos serão perdidos.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sim, cancelar',
        cancelButtonText: 'Continuar editando'
    }).then((result) => {
        if (result.isConfirmed) {
            limparFormulario();
            Swal.fire({
                icon: 'info',
                title: 'Formulário limpo!',
                text: 'Você pode começar um novo reporte.',
                timer: 2000,
                showConfirmButton: false
            });
        }
    });
}


function adicionarEventListeners() {
    
    const btnEnviar = document.getElementById('btn_enviar');
    if (btnEnviar) {
        btnEnviar.addEventListener('click', function(e) {
            e.preventDefault();
            
            
            if (!cookie_login) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Login necessário!',
                    text: 'Você precisa estar logado para fazer um reporte.',
                    confirmButtonText: 'OK'
                }).then(() => {
                    window.location.href = 'login.html';
                });
                return;
            }
            
            const dadosValidados = validarFormulario();
            if (dadosValidados) {
                enviarReporte(dadosValidados);
            }
        });
    }

    
    const btnCancelar = document.getElementById('btn_cancelar');
    if (btnCancelar) {
        btnCancelar.addEventListener('click', function(e) {
            e.preventDefault();
            cancelarReporte();
        });
    }
}