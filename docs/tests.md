# Testes

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Recolhimento do menu e visualização - botão hamburguer**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial <br> 2) Clique no botão hambuguer <br> 3) Clique novamente no botão hamburger.
**Requisitos associados** | RF-001
**Resultado esperado** | No primeiro clique, espera-se que o menu seja recolhido. Após o segundo clique, espera-se que o menu seja novamente exibido.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Visualização na geolocalização do usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 
**Requisitos associados** | RF-004
**Resultado esperado** | Espera-se que ao acessar à página inicial, o mapa seja direcionado para apontar a localização do usuário que está acessando a página.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Visualização da rua pesquisada**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Digite um nome de rua válido de Belo Horizonte no campo correspondente <br> 3) Clique no botão pesquisar <br> 
**Requisitos associados** | RF-005
**Resultado esperado** | Espera-se que o mapa exiba a rua pesquisada.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Visualização da rua do CEP pesquisado**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Digite o número de um CEP válido de Belo Horizonte no campo correspondente <br> 3) Clique no botão pesquisar <br> 
**Requisitos associados** | RF-005
**Resultado esperado** | Espera-se que o mapa exiba a rua correspondete ao CEP pesquisado.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Visualização da previsão do tempo**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br>
**Requisitos associados** | RF-013
**Resultado esperado** | Espera-se que a previsão do tempo da cidade de Belo Horizonte apareça junto ao mapa.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Visualização dos alertas no mapa**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Digite um nome de rua que possua alerta de alagamento no campo correspondente <br> 3) Clique no botão pesquisar <br> 
**Requisitos associados** | RF-013
**Resultado esperado** | Espera-se que o mapa exiba a rua pesquisada. A ruas com alerta de severidade grave devem aparecer no mapa na cor vermelha. As ruas com severidade média devem ser evidenciadas com a cor laranja. Já as ruas com severidade baixa devem aparecer na cor verde. Por fim, as ruas reportadas como rota alternativa devem ser evidenciadas com a cor azul. O mapa deve evidenciar uma legenda com o significado das cores.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Login**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Clique no botão entrar <br> 3) Na tela de login, digite um e-mail cadastrado <br> 4) Digite a senha do usuário <br> 
**Requisitos associados** | RF-014 
**Resultado esperado** | Espera-se que a aplicação seja redirecionada para tela principal evidenciando a foto e o nome do usuário logado.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Cadastro de usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Clique no botão entrar <br> 3) Na tela de login, clique em "Cadastre-se" <br> 4) Digite os campos do cadastro <br> 
**Requisitos associados** | RF-015 
**Resultado esperado** | Espera-se que apareça uma tela evidenciando que o cadastro foi bem sucedido e a aplicação seja redirecionada para tela de login.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - Visualização do histórico de reportes**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Clique no botão histórico <br> 
**Requisitos associados** | RF-008 
**Resultado esperado** | Espera-se que tela evidencie a relação completa das ruas cadastradas como alagadas, bem como a sugestão das rotas alternativas ordenadas em ordem decrescente de data de reporte.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - Visualização do histórico de reportes de uma rua pesquisada**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Clique no botão histórico <br> 3)Digite um nome de rua válido de Belo Horizonte no campo correspondente <br> 3) Clique no botão pesquisar <br>
**Requisitos associados** | RF-008 
**Resultado esperado** |Espera-se que tela evidencie a relação dos reportes de alagamento para a ruas pesquida bem como as ruas cadastradas como rota alternativa para ela. 
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT11 - Visualização do histórico de reportes de um CEP pesquisado**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Clique no botão histórico <br> 3)Digite o número de um CEP válido de Belo Horizonte no campo correspondente <br> 3) Clique no botão pesquisar <br>
**Requisitos associados** | RF-008 
**Resultado esperado** |Espera-se que tela evidencie a relação dos reportes de alagamento para a ruas do CEP pesquido bem como as ruas cadastradas como rota alternativa para ela. 
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT12 - Reportar alagamento deslogado**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Estando deslogado, Clique no botão reportar <br> 
**Requisitos associados** | RF-006 e RF-007 
**Resultado esperado** |Espera-se que seja exibida uma tela indicando que o usuário deve estar logado para acessar a funcionalidade de reportar alagamentos. 
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT13 - Reportar alagamento logado**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Efetue o login <br> 3)Clique no botão reportar <br> 4) Preencha os dados do reporte <br> 5) Clique no botão enviar <br>
**Requisitos associados** | RF-006 e RF-007 
**Resultado esperado** |Espera-se que seja exibida uma tela indicando que o reporte foi enviado com sucesso. 
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT14 - Edição do perfil do usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial (index.html) <br> 2) Efetue o login <br> 3)Clique no ícone do usuário <br> 4) Selecione a opção editar perfil <br> 5) Altere algum dado <br> 6) Clique em salvar <br>
**Requisitos associados** | RF-006 e RF-007 
**Resultado esperado** |Espera-se que seja exibida uma tela indicando que os dados do usuário foram atualizados com sucesso.
**Dados de entrada** | -
**Resultado obtido** | Sucesso


## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta parte 1*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*CT02 - Criar conta parte 2*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/10TVR67WLAT7QAkrkMLmt5btdWFcmF2H1/view?usp=sharing | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



