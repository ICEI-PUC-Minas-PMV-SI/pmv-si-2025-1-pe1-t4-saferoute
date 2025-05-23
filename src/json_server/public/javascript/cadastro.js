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


function sair() {
}


function salvar(){   
    if (document.querySelector('#email').value !== document.querySelector('#confirmar_email').value) {
      Swal.fire({
        icon: 'error',
        text: 'O e-mail informado não coincide com a confirmação do e-mail!',
        confirmButtonText: 'OK'
    });
    return;   
    }
    
    if (document.querySelector('#senha').value !== document.querySelector('#confirmar_senha').value) {
      Swal.fire({
        icon: 'error',
        text: 'A senha informada não coincide com a confirmação da senha!',
        confirmButtonText: 'OK'
    });
    return;   
    }

    fetch(`http://localhost:3000/usuarios?email=${encodeURIComponent(document.querySelector('#email').value)}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        Swal.fire({
        icon: 'error',
        text: 'E-mail já cadastrado!',
        confirmButtonText: 'OK'
        });
        return;
      } else {    campos = ["email", "senha", "nome", "sobrenome","cep", "endereco", "numero", "complemento", 
              "bairro", "municipio", "uf"]
    let usuario = {}
    campos.forEach(campo => {
        if (document.querySelector('#'+campo).value.length===0){
            let nome_campo = campo.charAt(0).toUpperCase() + campo.slice(1)
               if (nome_campo==="Endereco"){
                Swal.fire({
                    icon: 'error',
                    text: 'Favor informar o "Endereço"!',
                    confirmButtonText: 'OK'
                });} else if (nome_campo==="Numero"){
                Swal.fire({
                    icon: 'error',
                    text: 'Favor informar o "Número"!',
                    confirmButtonText: 'OK'
                });} else if (nome_campo==="Uf"){
                                Swal.fire({
                    icon: 'error',
                    text: 'Favor informar a "UF"!',
                    confirmButtonText: 'OK'
                });} else if (nome_campo!=="Complemento"){
                    Swal.fire({
                    icon: 'error',
                    text: `Favor informar o "${nome_campo}"!`,
                    confirmButtonText: 'OK'
                });}
                return;
                } else{
                usuario[campo] = document.querySelector('#'+campo).value
                }               
                })
        usuario["sexo"] = document.querySelector('input[name="radio_sexo"]:checked').value
        usuario["imagem"] = usuario["nome"] + "_" + usuario["sobrenome"] + ".png"
        fetch('http://localhost:3000/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        })
        .then(response => response.json())
        .then(data => {Swal.fire({
        icon: 'info',
        text: 'Usuário cadastrado com sucesso!',
        confirmButtonText: 'OK'
        }).then((result) => {
           if (result.isConfirmed) {
        window.location.href = "login.html"
        }})});
      }})  
      }
 
function cancelar(){
  window.location.href = "login.html"

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
 
window.onload = function() {
    masculino.checked = true;
}