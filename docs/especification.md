# Especificações do Projeto

A especificação do projeto visa o desenvolvimento de uma aplicação web e móvel focada na melhoria do tráfego e segurança dos usuários de Belo Horizonte, proporcionando rotas seguras em situações de alagamento. A aplicação atenderá a diferentes personas, como motoristas de Uber, trabalhadores que utilizam transporte público, e encarregados de obras, oferecendo alertas em tempo real sobre áreas afetadas por inundações, além de rotas alternativas para otimizar o tempo de deslocamento. As funcionalidades principais incluem a visualização de alertas de alagamento, o envio de novos alertas pelos usuários, e a manutenção de informações atualizadas sobre as condições das ruas afetadas. Além disso, a aplicação será compatível com dispositivos móveis e desktops, com um design intuitivo e acessível, garantindo a segurança dos dados e alta disponibilidade, especialmente durante períodos chuvosos. A aplicação deverá ser capaz de oferecer uma experiência ágil, com tempo de resposta para o cálculo de rotas não superior a 5 segundos, e operar com uma disponibilidade mínima de 99%, considerando sua importância durante emergências climáticas.

## Personas

1 - Gualter Carvalho Fortes, de 53 anos, natural de Fortaleza e residente em Buritis, Belo Horizonte, trabalha como motorista de Uber para sustentar sua família e ter mais flexibilidade, permitindo passar mais tempo com seus filhos. Ele escolheu essa profissão para poder levá-los à escola e atender emergências médicas com facilidade. A aplicação que oferece rotas alternativas e seguras em casos de inundações seria essencial para Gualter, ajudando-o a evitar áreas alagadas e congestionamentos, o que aumentaria sua eficiência no trabalho, reduziria o estresse e garantiria mais tempo com sua família.

2 - Débora Oliveira dos Santos, nascida em Belo Horizonte em 1990, é uma mulher independente que concilia seu trabalho como operadora de caixa em um supermercado pela manhã com os estudos de direito à noite, em uma rotina intensa de 6x1. A aplicação que fornece rotas alternativas e seguras em casos de inundações seria extremamente útil para ela, pois, como depende do transporte público, poderia evitar áreas alagadas e congestionamentos, economizando tempo e reduzindo o estresse no trajeto entre o trabalho e a faculdade. Isso ajudaria Débora a otimizar seu tempo e garantir mais eficiência e segurança no seu dia a dia.

3 - Ulisses Antônio, nascido em Belo Horizonte em 1968, é pai de três filhos e trabalha como encarregado de obras, utilizando o carro da empresa para se deslocar entre diferentes regiões da cidade. Ele gerencia a entrega de materiais para as obras, mas já enfrentou problemas com inundações e rotas inseguras, resultando em perdas de materiais e atrasos. A aplicação que fornece rotas alternativas e seguras em casos de inundações seria essencial para Ulisses, permitindo-lhe evitar áreas alagadas e garantir que os materiais sejam entregues pontualmente, melhorando a eficiência e evitando prejuízos nas obras.


## Histórias de Usuários

US 01 – Visualização de alertas de alagamento

Eu como usuário quero poder visualizar alertas de alagamentos ou enchentes para identificar se algum ponto do trajeto de meu deslocamento se encontra afetado, bem como se há algum trajeto alternativo com tráfego regular.

US 02 – Cadastro de alertas de alagamento

Eu como usuário quero poder cadastrar um alerta de alagamento ou enchente para que outros usuários possam ter ciência do problema.

US 03 - Manutenção dos alertas na consolidação de ruas afetas por alagamento e sugeridas como rotas alternativas

Eu como usuário quero que o consolidado das ruas apresentas como afetadas por alagamento ou sugeridas como rotas alternativas considere somente alertas recentemente cadastrados para que a informação nele consignada reflita a atual situação das ruas apontadas.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário visualize alertas de pontos de alagamentos ou enchentes. | ALTA |  
|RF-002| A aplicação deve permitir que o usuario envie pontos criticos de alagamentos ou enchentes.   | ALTA | 
|RF-003| A aplicação deve permitir que o usuario visualize rotas alternativas.   | MÉDIA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|O sistema deve ser compatível com dispositivos móveis e desktops, bem como os principais navegadores web, garantindo acessibilidade para diferentes perfis de usuários.| ALTA | 
|RNF-002| O tempo de resposta para o cálculo e exibição de rotas seguras não deve ultrapassar 5 segundos.(REVISAR COM BASE NOS USER STORIES) |  MÉDIA | 
|RNF-003|A aplicação deve garantir disponibilidade mínima de 99% para fornecer informações críticas em períodos chuvosos.(REVISAR COM BASE NOS USER STORIES) |  ALTA |
|RNF-004|O sistema deve seguir normas de segurança da informação, protegendo dados dos usuários e evitando acessos não autorizados. |  ALTA |
|RNF-005|O aplicativo deve possuir um design intuitivo e acessível, seguindo diretrizes de acessibilidade para pessoas com deficiência.| MÉDIA |
|RNF-006|O sistema deve ser escalável, permitindo a ampliação da infraestrutura para suportar um aumento repentino no número de acessos.| MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação deve se restringir à área geográfica de Belo Horizonte |
|02| A aplicação não funcionará offline e exigirá conexão com a internet para exibir alertas e rotas |
|03| A aplicação não armazenará dados pessoais sensíveis dos usuários - a exemplo de CPF, RG, data de nascimento, nome completo, entre outros |
|04| A aplicação não permitirá mensagens diretas entre usuários para evitar abusos e spam |
