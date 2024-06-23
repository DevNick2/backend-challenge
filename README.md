# Backend Challenge

NodeJs: >= 20x

## Libs
- Fastify (Framework para construção de API): https://fastify.dev/
- Typescript: https://www.typescriptlang.org/
- Winston (Logs): https://github.com/winstonjs/winston/tree/master
- Dayjs (Manipulação de datas): https://day.js.org/
- Jest (Suite de testes): https://jestjs.io/pt-BR/
- tsx (Integração entre Node e Typescript): https://tsx.is/
- tsup (Empacotador com Transpile de TS para JS): https://tsup.egoist.dev/
- faker (Gerador de dados ficticios): https://fakerjs.dev/

## Setup inicial
- Faça uma cópia do .env-example e renomeie para .env e adicione o valor da variavel PORT e API_URL
- rode o comando npm i
- suba o docker dos dados: docker-compose up (se preferir pode usar a flag -d para rodar em segundo plano)
- rode o comando npm run watch
- Para usar o projeto pode conectar a um front-end via axios, pela web com a URL: http://localhost:[PORTA], pelo Postam ou Insomnia ou via curl http://localhost:[PORTA], também tem a opção via suite de testes mas é necessário usar alguns consoles para ver os retornos

## Comandos do projeto
- npm run watch: Roda a aplicação em modo de desenvolvimento, monitorando os arquivos
- npm run build: Cria o bundle para produção
- npm run test:watch: Executa a suite de testes em modo watch (monitora os arquivos de teste)
- npm run test:coverage: Cria os arquivos estáticos para as métricas de cobertura
- npm run test:ci: Executa a suite de testes para CI (Continuos Integration)

## Considerações técnicas:
#### Sobre comentários com 'XXX [FIXME | TODO] ::' :
Comentários com _XXX [FIXME | TODO] ::_ demarcam trechos de códigos que precisam ser ajustados, melhorados ou implementados, é uma forma de identificar mais fácil onde deixamos os FIXME, tem um plugin do vscode que ajuda a encontrar os comentarios com este padrão o nome é TodoTree.

#### Sobre as melhorias:
Existem inumeras formas de melhorar este projeto, seja aplicando um design pattern melhor (DDD ou MVC) porém decide por usar algo mais simples para agilizar o processo, conforme for escalando pode-se aproveitar o que ja foi feito, usei conceitos do MVC para ter esta base mas como o projeto é pequeno não vejo necessidade de implementá-lo a risca.

Em alguns lugares eu deixei comentários para que possa identificar os trechos que podem ser aplicados técnicas do refactor (como mover função ou mudar declaração de função), para encontrar pode usar um find por _XXX [TODO | FIXME]_.

#### Sobre a Escala:
Esta implementação não conta com autenticação, configuração de CORS, autorização, proteção de rotas ou qualquer outra questão importante em um projeto base, pode ser facilmente implementado um módulo de autorização no arquivo app.ts para que tenha rotas seguras e uma rota publica de login, também podemos implementar um middleware para validar a autorização do usuário.

Também podemos escalar a funcionalidade para criação e edição de usuario, podemos utilizar o próprio JSON para fazer isto, basta que crie novas funções dentro do UserController, além disto, por se tratar do Node decidi usar o paradigma de função no projeto, pode mudar para orientação a objetos e tornar as coisas mais pragmáticas, podemos também criar uma estrutura de services que pode guardar as funções necessárias para execução da lógica mais profunda e deixar os controllers para validação e perparo dos recursos (resources) para servir a um front end.

Podemos adicionar um camada de model para cuidar da conexão com o banco, teriamos que implementar um banco de dados, o prisma ORM pode nos ajudar a fazer isto pois ele disponiliza funções que constroem as migrations de forma fácil além de ter uma camada fantástica de apoio para construção de queries.

#### Sobre as decisões:
Decidi usar o Node de forma crua para demonstrar meus conhecimentos na base da programação, por isto optei por não usar um NestJs, Adonis ou qualquer outro framework para construção de APIs, além disto optei pelo Fastify pois é um framework que tem melhor integração com o Typescript, costumo usar o Express para ajudar na construção de aplicações Web.

#### Sobre os testes:
A suite de testes pode ser expandida também, podemos implementar um Ghirkin na construção dos testes, o Jest e o Mocha tem boas integrações com frameworks de BDD, optei por não utilizar algo pois isto demandaria mais tempo e um desenho da arquitetura mais cuidadoso.

Não consegui implementar o teste de integração nas rotas, houve um desafio que precisaria ou de alguém com mais xp que eu ou de mais tempo para que eu pudesse fazer novas teses e encontrar como podemos fazer isto com o cenário atual, acredito que ist não seja um problema visto que a implementação de testes de integração em um ambiente maior tenha banco de dados e torne as coisas mais fáceis.

#### Sobre os Resources:
Costumo utilizar os resources para cuidar da camada de tratamento de dados de entrada e saida, ou seja, tudo que vem do usuário ou volta para ele, por isto existem dois resources, o UserResource e o UserInterface, o primeiro é o que cuida do retorno para o usuário, é por ele que deixo formatado tudo que vamos entregar ao cliente (seja um front ou webhook), o segundo é o tratamento de dados que vem do nosso banco (aqui no caso é o JSON), assim evita de perdermos a mão na parte de manipular os dados e acabar criando novos dados fora da interface principal.

#### Sobre os commits:
Procuro sempre deixar os commits com titulo e descrição, nas gravações, mesmo que não seja útil usar um repositório, decidi faze-lo para mostrar como eu lido no dia a dia com commits e PRs, tento seguir sempre a conveão do GitFlow para melhorar as descrições e fazer commits menores, no e-mail vou deixar junto os prints de como estão os commits no github.
