document.getElementById('form-reporte').addEventListener('submit', async function (e) {
  e.preventDefault(); 

  const rua = document.getElementById('input_rua_alagada').value;
  const descricao = document.getElementById('txtarea_descricao').value;
  const rota = document.getElementById('input_rota_alternativa').value;
  const severidadeSelecionada = document.querySelector('input[name="severidade"]:checked');

  if (!severidadeSelecionada) {
    alert('Por favor, selecione a severidade.');
    return;
  }

  const dados = {
    rua: rua,
    descricao: descricao,
    rota: rota,
    severidade: severidadeSelecionada.value
  };

  try {
    const resposta = await fetch('http://localhost:3000/reportes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });

    if (resposta.ok) {
      alert('Reporte enviado com sucesso!');
      document.getElementById('form-reporte').reset();
    } else {
      alert('Erro ao enviar o reporte.');
    }
  } catch (erro) {
    console.error(erro);
    alert('Erro ao se conectar com o servidor.');
  }
});
