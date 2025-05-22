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
        fetch('http://localhost:3000/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        })
        .then(response => response.json())
        .then(data => {
          alert('Usuário cadastrado com sucesso!');
        });
      }})  
      }
      /**/
    /*"imagem": "gualter_fortes.png",
    "sexo": "masculino",*/

window.onload = function() {
    nome.value="Ulisses";
    sobrenome.value="Antônio";
    cep.value = "30535-490";
    endereco.value = "Rua Padre Evangelista";
    municipio.value = "Belo Horizonte";
    uf.value = "MG";
    bairro.value = "Coração Eucarístico";
    numero.value = "115";
    complemento.value = "Apartamento 202";
    masculino.checked = true;
}