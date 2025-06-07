const img_usuario_logado  = document.querySelector('#img_usuario_logado');
const lbl_usuario_logado = document.getElementById('lbl_usuario_logado');
const imagem_usuario  = document.getElementById('imagem_usuario');
const label_login  = document.getElementById('label_login');
const img_usuario_cadastro = document.querySelector('#img_usuario_cadastro');
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
let feminino = document.getElementById("radio_feminino");
let idUsuario;
let dados_usuario;


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

function obterCookie() {
  let cookies = document.cookie.split(';');
  console.log(cookies);
  cookie_login = false;
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i].trim();
    if (c.startsWith('idUsuario=')) {
      idUsuario = c.substring('idUsuario'.length + 1);
    }
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
verifica_login (cookie_login);
}}

function obter_dados_usuario(){
    return fetch("http://localhost:3000/usuarios?id=" + idUsuario)
      .then(response => response.json());
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

function alterar_imagem(){
   const btnAlterarImagem = document.querySelector("#btn_alterar_imagem");
   const inputImagem = document.querySelector("#input_imagem"); 
   const imgUsuarioCadastro = document.querySelector("#img_usuario_cadastro")

   btnAlterarImagem.addEventListener('click', () => {
   inputImagem.click();  
  });

    inputImagem.addEventListener('change', () => {
    const arquivoSelecionado = inputImagem.files[0];
    const arquivoSelecionadoNome = arquivoSelecionado.name;

    console.log('Arquivo selecionado:', arquivoSelecionado);
    console.log(arquivoSelecionadoNome);

    if (arquivoSelecionadoNome.toLowerCase().endsWith(".jpg") || arquivoSelecionadoNome.toLowerCase().endsWith(".png")){  
      console.log(URL.createObjectURL(arquivoSelecionado));
      const urlImagem = URL.createObjectURL(arquivoSelecionado); 
      imgUsuarioCadastro.src = urlImagem;
      } else {Swal.fire({
        icon: 'error',
        text: 'A imagem selecionada deve ser um arquivo .png ou .jpg!',
        confirmButtonText: 'OK'
        }); 
      }
  });
}

function salvar(){
  campos = ["nome", "sobrenome","cep", "endereco", "numero", "complemento", 
              "bairro", "municipio", "uf"]
   
  let usuario = {};

  campos.forEach(campo => {
    usuario[campo] = document.querySelector('#'+campo).value
  })
  
  usuario["sexo"] = document.querySelector('input[name="radio_sexo"]:checked').value

 fetch("http://localhost:3000/usuarios/" + idUsuario, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(usuario)
})
.then(response => response.json())
.then(data => {Swal.fire({
        icon: 'info',
        text: 'Usuário atualizado com sucesso!',
        confirmButtonText: 'OK'
        })})
      }

function cancelar(){
  /*  obter_dados_usuario();
    obter_dados_usuario().then(data => {
    nome.value=data[0].nome
    sobrenome.value= data[0].sobrenome;
    cep.value = data[0].cep;
    endereco.value = data[0].endereco;
    municipio.value = data[0].municipio;
    uf.value = data[0].uf;
    bairro.value = data[0].bairro;
    numero.value = data[0].numero;
    complemento.value = data[0].complemento;
    if (data[0].sexo==="masculino"){
       masculino.checked = true;
    } else {feminino.checked=true;}
    img_usuario_cadastro.src='imagens/'+data[0].imagem
     
})
*/
window.location.href = "index.html"
}


window.onload = function() {
    obterCookie();
    console.log(cookie_login);
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
    obter_dados_usuario();
    obter_dados_usuario().then(data => {
    nome.value=data[0].nome
    sobrenome.value= data[0].sobrenome;
    cep.value = data[0].cep;
    endereco.value = data[0].endereco;
    municipio.value = data[0].municipio;
    uf.value = data[0].uf;
    bairro.value = data[0].bairro;
    numero.value = data[0].numero;
    complemento.value = data[0].complemento;
    if (data[0].sexo==="masculino"){
       masculino.checked = true;
    } else {feminino.checked=true;}
    img_usuario_cadastro.src='imagens/'+data[0].imagem
    console.log(data[0])
    });}