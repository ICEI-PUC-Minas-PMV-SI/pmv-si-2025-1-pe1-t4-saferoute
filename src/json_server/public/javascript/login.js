var email;
var senha;
var nome_usuario;
var sobrenome_usuario;
var imagem_usuario_logado;
var nome_usuario_logado;
let idUsuario;

function criando_cookie (nome_usuario_logado,sobrenome_usuario,imagem_usuario_logado,idUsuario){
    document.cookie = "login=usuario_logado; path=/;";
    document.cookie = `nome=${nome_usuario_logado} ${sobrenome_usuario}; path=/;`;
    document.cookie = `imagem=${encodeURIComponent(imagem_usuario_logado)}; path=/;`;
    document.cookie = `idUsuario=${encodeURIComponent(idUsuario)}; path=/;`;
    if (document.referrer==='http://localhost:3000/cadastro.html'){
      window.location.href = "index.html";
    } else {
    window.history.back();
    }
}

function verificar_login (){
    email = document.getElementById("input_email").value;
    senha = document.getElementById("input_senha").value;
    nome_usuario = undefined;
    sobrenome_usuario = undefined;    

    var email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.length === 0) {
    Swal.fire({
      icon: 'warning',
      text: 'Favor preencher o e-mail cadastrado!',
      confirmButtonText: 'OK'
    });
    return;
  }

  if (!email_regex.test(email)) {
    Swal.fire({
      icon: 'warning',
      text: 'Favor preencher um endereço de e-mail válido!',
      confirmButtonText: 'OK'
    });
    return;
  }

  if (senha.length === 0) {
    Swal.fire({
      icon: 'warning',
      text: 'Favor preencher a senha!',
      confirmButtonText: 'OK'
    });
    return;
  }

  fetch("http://localhost:3000/usuarios")
    .then(response => response.json())
    .then(data => {
      usuario = data.find(
        u => u.email === email && u.senha === senha
      );
      if (usuario) {
        nome_usuario = usuario.nome;
        sobrenome_usuario = usuario.sobrenome;
        imagem_usuario_logado = usuario.imagem;
        nome_usuario_logado = nome_usuario + " " + sobrenome_usuario;
        idUsuario = usuario.id;
        console.log(idUsuario)
        criando_cookie(nome_usuario,sobrenome_usuario,imagem_usuario_logado,idUsuario);
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Email ou senha inválido!',
          confirmButtonText: 'OK'
        });
      }
    })
    .catch(error => {
      console.error("Erro ao buscar usuários:", error);
      Swal.fire({
        icon: 'error',
        text: 'Ocorreu um erro favor tente mais tarde!',
        confirmButtonText: 'OK'
      });
    });
}