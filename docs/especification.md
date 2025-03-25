# Especificações do Projeto

A especificação do projeto visa o desenvolvimento de uma aplicação web focada na melhoria do tráfego e segurança dos usuários de Belo Horizonte, proporcionando informações sobre ruas em estado de alagamento e/ou enchente. A aplicação atenderá a diferentes personas, como motoristas de Uber, trabalhadores que utilizam transporte público, e encarregados de obras, oferecendo indicativos em tempo real sobre áreas afetadas por inundações, além de mostrar as ruas em estado regular. As funcionalidades principais incluem a visualização de alertas de alagamento, o envio de novos alertas pelos usuários, e a manutenção de informações atualizadas sobre as condições das ruas afetadas. Além disso, a aplicação será compatível com dispositivos móveis e desktops, com um design intuitivo e acessível, garantindo a segurança dos dados e alta disponibilidade, especialmente durante períodos chuvosos. 

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
|RF-002| A aplicação deve permitir que o usuario envie pontos criticos de alagamentos ou enchentes. | ALTA | 
|RF-003| A aplicação deve permitir que o usuário indique ruas em estado regular (sem inundações/enchentes). | ALTA |
|RF-004| A aplicação deve permitir que o usuário visualize as ruas que estão em estado regular. | ALTA |
|RF-005| A aplicação deve ordenar os avisos em ordem decrescente de cadastro, evidenciando a data/hora em que o mesmo foi efetuado. | MÉDIA |
|RF-006| O cadastro do alerta de uma rua com alagamento deve sobrescrever eventual indicação desta rua como rota alternativa no consolidado de ruas afetadas x rotas alternativas. | MÉDIA |
|RF-007| O cadastro posterior de uma rua como rota alternativa deve sobrepor a indicação da rua como afetada por alagamento ou enchente. | MÉDIA |
|RF-008| O cadastro como área alagada ou como rota alternativa dependerá de ao menos 2 indicações diferentes. | MÉDIA |
|RF-009| Após 5 horas do último reporte de uma rua como afetada por alagamento ou como rota alternativa, a informação desta rua será removida da consolidação. | MÉDIA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|O sistema deve ser compatível com dispositivos móveis e desktops, bem como os principais navegadores web, garantindo acessibilidade para diferentes perfis de usuários.| ALTA | 
|RNF-002|O aplicativo deve possuir um design intuitivo e acessível, seguindo diretrizes de acessibilidade para pessoas com deficiência. | MÉDIA |
|RNF-003|O sistema deve ser escalável, permitindo a ampliação da infraestrutura para suportar um aumento repentino no número de acessos, usuários e localidades. | MÉDIA |
|RNF-004|O código-fonte da aplicação deve ser organizado de forma que seja fácil realizar manutenções ou atualizações futuras, com comentários claros e documentação simples para que programadores com experiência limitada possam fazer ajustes sem grandes dificuldades. | MÉDIA |
|RNF-005|O código-fonte da aplicação deve seguir boas práticas de desenvolvimento seguro a fim de evitar manipulação dos dados que serão disponibilizados para o usuário. | MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação deve se restringir à área geográfica de Belo Horizonte |
|02| A aplicação não funcionará offline e exigirá conexão com a internet para exibir alertas e rotas |
|03| A aplicação não armazenará dados pessoais dos usuários - a exemplo de CPF, RG, data de nascimento, nome completo, entre outros |
|04| A aplicação não permitirá mensagens diretas entre usuários para evitar abusos e spam |
|05| A aplicação não tem capacidade de verificar a veracidade das indicações recebidas pelos usuários | 
|06| Uma rua só será considerada alagada/inundada pela aplicação a partir da indicação de 2 alertas ou mais pela comunidade de usuários | 
