# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

1 - Gualter Carvalho Fortes, de 53 anos, natural de Fortaleza e residente em Buritis, Belo Horizonte, trabalha como motorista de Uber para sustentar sua família e ter mais flexibilidade, permitindo passar mais tempo com seus filhos. Ele escolheu essa profissão para poder levá-los à escola e atender emergências médicas com facilidade. A aplicação que oferece rotas alternativas e seguras em casos de inundações seria essencial para Gualter, ajudando-o a evitar áreas alagadas e congestionamentos, o que aumentaria sua eficiência no trabalho, reduziria o estresse e garantiria mais tempo com sua família.

2 - Débora Oliveira dos Santos, nascida em Belo Horizonte em 1990, é uma mulher independente que concilia seu trabalho como operadora de caixa em um supermercado pela manhã com os estudos de direito à noite, em uma rotina intensa de 6x1. A aplicação que fornece rotas alternativas e seguras em casos de inundações seria extremamente útil para ela, pois, como depende do transporte público, poderia evitar áreas alagadas e congestionamentos, economizando tempo e reduzindo o estresse no trajeto entre o trabalho e a faculdade. Isso ajudaria Débora a otimizar seu tempo e garantir mais eficiência e segurança no seu dia a dia.

3 - Ulisses Antônio, nascido em Belo Horizonte em 1968, é pai de três filhos e trabalha como encarregado de obras, utilizando o carro da empresa para se deslocar entre diferentes regiões da cidade. Ele gerencia a entrega de materiais para as obras, mas já enfrentou problemas com inundações e rotas inseguras, resultando em perdas de materiais e atrasos. A aplicação que fornece rotas alternativas e seguras em casos de inundações seria essencial para Ulisses, permitindo-lhe evitar áreas alagadas e garantir que os materiais sejam entregues pontualmente, melhorando a eficiência e evitando prejuízos nas obras.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA |  
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|O sistema deve ser compatível com dispositivos móveis e desktops, garantindo acessibilidade para diferentes perfis de usuários.| ALTA | 
|RNF-002| O tempo de resposta para o cálculo e exibição de rotas seguras não deve ultrapassar 5 segundos. |  MÉDIA | 
|RNF-003|A aplicação deve garantir disponibilidade mínima de 99% para fornecer informações críticas em períodos chuvosos. |  ALTA |
|RNF-004|O sistema deve seguir normas de segurança da informação, protegendo dados dos usuários e evitando acessos não autorizados. |  ALTA |
|RNF-005|O aplicativo deve possuir um design intuitivo e acessível, seguindo diretrizes de acessibilidade para pessoas com deficiência.| MÉDIA |
|RNF-006|O sistema deve ser escalável, permitindo a ampliação da infraestrutura para suportar um aumento repentino no número de acessos.| MÉDIA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:


- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
