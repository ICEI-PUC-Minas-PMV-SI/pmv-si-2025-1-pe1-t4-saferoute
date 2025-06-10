var map;
var img_usuario_logado  = document.getElementById('img_usuario_logado');
var lbl_usuario_logado = document.getElementById('lbl_usuario_logado');
var imagem_usuario  = document.getElementById('imagem_usuario');
var label_login  = document.getElementById('label_login');
var historico_reportes_usuario = document.getElementById("historico_reportes_usuario")
var section_rotas_alternativas = document.getElementById("section_rotas_alternativas")
var lat;
var lon;
var rua;
var url;
var endereco;
var rua_api;
var marcador;
var imagem_usuario_logado; 
var nome_usuario_logado;
var cookie_login;
let marcadorAtual;
let marcadorPesquisado;
let cookieRuaPesquisada;
let rua_pesquisada_reporte;

/*function exibir_opcoes () {
    var aside  = document.getElementById('menu_opcoes');
    var mapa = document.getElementById('mapa')
    if (aside.style.display==='none') {
        aside.style.display='block';
        mapa.style.left='110px';        
        map.invalidateSize();
        if (getComputedStyle(historico_reportes_usuario).top==='700px'){
            historico_reportes_usuario.style.left='110px';
            section_rotas_alternativas.style.left='110px';
        }
        
    } else {
        aside.style.display='none'; 
        mapa.style.left='5px';
        map.invalidateSize();
        if (getComputedStyle(historico_reportes_usuario).top==='700px'){
                historico_reportes_usuario.style.left='5px';
                section_rotas_alternativas.style.left='5px';
        }
    }
   }
*/

function exibir_opcoes () {
    var aside  = document.getElementById('menu_opcoes');
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

function ver_coodenada(){
    rua = undefined;
    cep = undefined;
    endereco = undefined    
    rua=document.getElementById('input_endereco').value;
    cep=document.getElementById('input_cep').value;
    if (rua) {
        endereco =  rua + ', Belo Horizonte';
        rua_pesquisada_reporte = rua;
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
          exibir_reportes();
          exibir_rota_alternativa();
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
    rua_pesquisada_reporte = rua;
    url = 'https://nominatim.openstreetmap.org/search?q=${'+ endereco + '}&format=json&limit=1';    
            fetch(url)
        .then(response => response.json())
        .then(data => {
        if (data.length > 0) {
            lat = data[0].lat;
          lon = data[0].lon;
          marcador=true
          visualizar_mapa(lat,lon,marcador)
          exibir_reportes();
          exibir_rota_alternativa();
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

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    obterCookie();
  }
});

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


function obter_reportes(){
    if (rua_pesquisada_reporte){
    return fetch("http://localhost:3000/reportes?rua="+rua_pesquisada_reporte)
      .then(response => response.json())
      .then(reportes => {
    console.log(reportes)
        return reportes.sort((a, b) => new Date(b.dataHora) - new Date(a.dataHora));})
      } else {
    return fetch("http://localhost:3000/reportes")
      .then(response => response.json())
      .then(reportes => {
    return reportes.sort((a, b) => new Date(b.dataHora) - new Date(a.dataHora));})
      }
     }

function exibir_reportes(){
    let quant_reportes = 0
    let divs_reportes = document.querySelectorAll('.div_reporte');

const container = document.getElementById("historico_reportes_usuario");
const brs = container.querySelectorAll("br");
brs.forEach(br => br.remove())

divs_reportes.forEach(div => {
  div.remove();
});

    obter_reportes().then(reportes => {
    reportes.forEach((reporte) => {
        quant_reportes += 1
        console.log(reporte);
        const divImg = document.createElement("div");

        const dataObj = new Date(reporte.dataHora);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = String(dataObj.getFullYear()).slice(-2);  // dois últimos dígitos
        const horas = String(dataObj.getHours()).padStart(2, '0');
        const minutos = String(dataObj.getMinutes()).padStart(2, '0');
        const dataHoraFormatada = `${dia}/${mes}/${ano} - ${horas}:${minutos}`;

        divImg.id = `div_img_reporte_${quant_reportes}`;
        url = "http://localhost:3000/usuarios?id="+reporte.idUsuario
        console.log(url)
        fetch("http://localhost:3000/usuarios?id="+reporte.idUsuario)
              .then(response => response.json())
              .then(data => {
            divImg.innerHTML = `<img class="img_usuario_reporte" id="img_usu_rep_${quant_reportes}" src="imagens/${data[0].imagem}">`;
    })
        
        const divTexto = document.createElement("div");
        divTexto.id = `div_p_reporte_${quant_reportes}`;
        divTexto.classList.add("div_reporte");
        divImg.classList.add("div_reporte");
        divTexto.innerHTML = `<p><pre>${dataHoraFormatada}     ${reporte.descricao}</pre></p>`;
        console.log(reporte.descricao)
        
      historico_reportes_usuario.appendChild(divImg);
      historico_reportes_usuario.appendChild(divTexto);
      historico_reportes_usuario.appendChild(document.createElement("br"));
    });
  });
}


function exibir_rota_alternativa(){
    let quant_rota_alternativa = 0
    let divs_rotas = document.querySelectorAll('.div_rota');

const container = document.getElementById("section_rotas_alternativas");
const brs = container.querySelectorAll("br");
brs.forEach(br => br.remove())

divs_rotas.forEach(div => {
  div.remove();
});

    obter_reportes().then(reportes => {
    reportes.forEach((reporte) => {
        quant_rota_alternativa += 1
        const divImg = document.createElement("div");

        const dataObj = new Date(reporte.dataHora);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = String(dataObj.getFullYear()).slice(-2);  // dois últimos dígitos
        const horas = String(dataObj.getHours()).padStart(2, '0');
        const minutos = String(dataObj.getMinutes()).padStart(2, '0');
        const dataHoraFormatada = `${dia}/${mes}/${ano} - ${horas}:${minutos}`;

        divImg.id = `div_img_reporte_${quant_rota_alternativa}`;
        url = "http://localhost:3000/usuarios?id="+reporte.idUsuario
        console.log(url)
        fetch("http://localhost:3000/usuarios?id="+reporte.idUsuario)
              .then(response => response.json())
              .then(data => {
            divImg.innerHTML = `<img class="img_usuario_reporte" id="img_usu_rep_${quant_rota_alternativa}" src="imagens/${data[0].imagem}">`;
    })
        
        const divTexto = document.createElement("div");
        divTexto.id = `div_p_rota_alternativa_${quant_rota_alternativa}`;
        divTexto.classList.add("div_rota");
        divImg.classList.add("div_rota");
        divTexto.innerHTML = `<p><pre>${dataHoraFormatada}     ${reporte.rotaAlternativa}</pre></p>`;
        console.log(reporte.descricao)
        
      section_rotas_alternativas.appendChild(divImg);
      section_rotas_alternativas.appendChild(divTexto);
      section_rotas_alternativas.appendChild(document.createElement("br"));
    });
  });
}



window.onload = function() {
    lat = -19.9191
    lon = -43.9386   
    marcador = false
    rua_pesquisada_reporte=undefined
    visualizar_mapa(lat,lon,false);
    exibir_reportes();
    exibir_rota_alternativa();
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