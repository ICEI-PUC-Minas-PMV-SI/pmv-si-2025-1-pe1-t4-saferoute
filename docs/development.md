# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Botão Hamburger (ocultar ou exibir Menu Opções) | Roberto | index.html, historico.html, reportar.html e sobre.html |
|RF-002| Visualização dos alertas de pontos de alagamentos. Ficarão na cor vermelha em caso de severidade grave e laranja nos casos de média severidade. | Aleph | index.html e historico.html |
|RF-003| Visualização das ruas em estado regular. Ficarão na cor verde | Aleph | index.html e historico.html |
|RF-004| Visualização do mapa em Belo-Horizonte na geolocalização do IP do usuário | Roberto | index.html e historico.html |
|RF-005| Visualização do mapa em Belo-Horizonte na rua ou CEP pesquisado | Roberto | index.html e historico.html |
|RF-006| Envio e armazenamento de pontos críticos de alagamentos ou enchentes | Yuri | reportar.html e historico.html |
|RF-007| Envio e armazenamento de ruas em estado regular | Yuri | reportar.html |
|RF-008| Visualização dos avisos registrados na aplicação em ordem decrescente de cadastro | Victor | historico.html |
|RF-009| O cadastro do alerta de uma rua com alagamento deve sobrescrever eventual indicação desta rua como rota alternativa | Igor | reportar.html |
|RF-010| O cadastro posterior de uma rua como rota alternativa deve sobrepor a indicação da rua como afetada por alagamento ou enchente | Igor | reportar.html |
|RF-011| O cadastro como área alagada ou como rota alternativa dependerá de ao menos 2 indicações diferentes. | Igor | reportar.html |
|RF-012| Após 5 horas do último reporte de uma rua como afetada por alagamento ou como rota alternativa, a informação desta rua será removida da consolidação, a não ser que haja outros reportes para atualização do status. | Aleph | index.html e historico.html |
|RF-013| A tela inicial de demonstrar a previsão do tempo para Belo Horizonte no horário da visualização da tela | Victor | index.html |

## Descrição das estruturas:

## Reporte
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
|   Id           | Numero (Inteiro)  | Identificador único da reporte realizado           | 1                                              |
| Rua alagada        | Texto             | Nome da rua alagada objeto de reporte                      | Rua Dom José Gaspar                                    |
| Descrição       | Texto             | Descrição da situação do alagamento realizada pelo usuário                       | Alagamento na interseção com a rua Padre Pedro Evangelista                            |
| Rota alternativa  | Texto  | Nome da rua indicada como rota alternativa pelo usuário | Rua Dom Joaquim Silvério                  |
| Data/Hora reporte  | Data/HoraTexto  | Data e horário em que o usuário realizou o reporte | 19/04/25 - 20:50                  |
| E-mail usuário  | Texto  | Email do usuário que realizou o reporte | josesilva@hotmail.com                  |

## Cadastro
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
|   Id           | Numero (Inteiro)  | Identificador do usuário cadastrado           | 1                                              |
| Nome       | Texto             | Nome completo do usuário cadastrado                      | Jose da Silva                                    |
| E-mail       | Texto             | E-mail do usuário cadastrado                       | josesilva@hotmail.com
| Senha  | Hash | Hash da senha (campo alfanumérico) | Senha123                  |

## Mapa
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
|   Corrdenada           | Lista de campos numericos [Latitude, Longitude]  | Coordenadas geodésicas do ponto a ser visualizado no mapa           | [-19.9191, -43.9386]                                              |