var img_usuario_logado  = document.getElementById('img_usuario_logado');
var lbl_usuario_logado = document.getElementById('lbl_usuario_logado');
var imagem_usuario  = document.getElementById('imagem_usuario');
var label_login  = document.getElementById('label_login');
var imagem_usuario_logado; 
var nome_usuario_logado;
var cookie_login;

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
    obterCookie();
    verifica_login (cookie_login);
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