## GeoPlace Project

##### Estrutura do Projeto
O projeto é dividido em 3 principais camadas, visando um modelo de desenvolvimento MVC, onde a 1° camada será responsável por a view, a 2°  por a model ea terceira camada atuará como o controller. 

1. **frontend (geoplace_spa)**
	1. **Descrição** sub-projeto responsável por propocionar  a camada de view do sistema, utilizando abordagens hibridas para o desenvolvimento multiplataforma.
	2. **Tecnologias**
		1. html5/css3/javaScript
		2. vue3/vue-router
		3. axio/fetch
     3. **Estrutura do sub-projeto**
		 1. /**public/** :  Arquivos públicos 
			 1. ../**public/css** :  Arquivos Css globais,  usado em toda a aplicação
			 2. ../**public/res**:  Icones, imagens e fonts  utlizados em toda a aplicação.
		 2. **src/**: Pasta principal da aplicação
			 1. **src/pages** : pasta responsável por agrupar todos os componentes da aplicação. Cada página da aplicação deverá ter apenas um arquivo .**vue**, caso haja a nessecidade de reaproveitar componentes, pode-se utilizar uma sub-pasta **componentes**
		 3. **routers.js**:  arquivo para gerenciar as rotas.
		 4. **App.vue** : Componente principal
		 5. **main.js**  : script responsavel por iniciar a aplicação.
		 
2. **BackEnd (geoplace_bke)**
3. **API (geoplace_api)**

##### Controle de versão e metodologia de desenvolvimento.
É importante que cada funcionalidade nova (feature) seja implementada  em uma nova branch com o seguinte padrão de nomeclatura **geoplace_dev_feature_code**, a pós a implementação da feature o pull request deverá ser feito para a branch **geoplace_dev**.  Para bugs e correções, uma issue devera ser aberta na branch **geoplace_dev**, ela será analizada e entrará no fluxo da metodologia de desenvolvimento adotada. 

- ##### padrões de commite e boas práticas no códico
2. Todos os commits deverá ter uma tag e uma mensagem curta.
3. Os commits deverão ser escritos na lingua inglesa
4. Variaveis e nomes de funções serão escritas em ingles 
5. O códico deverá está em SnakeCase, mesmo no paradigma O.O 
6. as tabulações devem ser 4 espaços.
7. Tentar escrever nomes de funções e váriavies curtos e semânticos.
8. Não instalar dependencias desnessesárias

- ##### Metodologia de desenvolvimento 
	A metodologia adotada para este projeto será o SCRUM, utilizando a plataforma **Miro** para a elaboração dos quadros SCRUM. O prazo estimado é de **X** semanas. Cada membro da equipe terá 3 sprints por semana, e nos dias em que houver sprints atribuídas, será necessário informar à equipe, às 11:00 AM, o status da sprint, detalhando o que foi feito ou explicando os motivos para eventuais pendências. O formato padrão de atualização será o seguinte:

	Data:
	Nome da Sprint:

	Concluída [ ]
	Não Concluída [ ]
	Motivo (caso não concluída):

	Se um membro não puder realizar uma sprint, ele poderá transferi-la para outro membro da equipe.

Ao adotar a metodologia ágil SCRUM, espera-se que, nas primeiras semanas, o sistema já apresente partes funcionais, proporcionando motivação para que a equipe continue empenhada no progresso do projeto.


