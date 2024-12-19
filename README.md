
# GeoPlace Project

#### Estrutura geral do projeto
<p style='text-align: justify;'>
O projeto é dividido em 3 principais camadas, visando um modelo de desenvolvimento MVC, onde a 1° camada será responsável por a view, a 2°  por a model ea terceira camada atuará como o controller.
</p>

### 1° frontend : geoplace_spa/
<p style='text-align: justify;'>
Sub-projeto responsável por propocionar  a camada de view do sistema, utilizando abordagens hibridas para o desenvolvimento multiplataforma. </p>

##### Tecnologias 

- html5/css3/javaScript
- vue3/vue-router
- axio/fetch
- vite/pnpm
##### Estrutura do sub-projeto

```shell
└── geoplace_spa/
    ├── public/
    │   ├── css/    -- Css global
    │   └── res/    -- Ícones/fonts
    ├── src/
    │   ├── pages/  -- Páginas/Componentes
    │   ├── router/ -- Controler de rotas 
    │   ├── main.js -- Script principal
    │   ├── App.vue -- Componente principal
    ├── index.html  -- Ponto de partida
```

---

### 2° frontend : geoplace_bke/
---
### 3° frontend : geoplace_api/
---
##### Controle de versão e metodologia de desenvolvimento.

<p style='text-align: justify;'>
É importante que cada funcionalidade nova (feature) seja implementada  em uma nova branch com o seguinte padrão de nomeclatura geoplace_dev_feature_code, a pós a implementação da feature o pull request deverá ser feito para a branch geoplace_dev.  Para bugs e correções, uma issue devera ser aberta na branch geoplace_dev, ela será analizada e entrará no fluxo da metodologia de desenvolvimento adotada. 
</p>
##### padrões de commite e boas práticas no códico

- Todos os commits deverá ter uma tag e uma mensagem curta.
- Os commits deverão ser escritos na lingua inglesa
- Variaveis e nomes de funções serão escritas em ingles
- O códico deverá está em SnakeCase, mesmo no paradigma O.O
- as tabulações devem ser 4 espaços.
- Tentar escrever nomes de funções e váriavies curtos e semânticos.
- Não instalar dependencias desnessesárias

##### Metodologia de desenvolvimento
<p style='text-align: justify;'>
A ​metodologia adotada para este projeto será o SCRUM, utilizando a plataforma Miro para a elaboração dos quadros SCRUM. O prazo estimado é de X semanas. Cada membro da equipe terá 3 sprints por semana, e nos dias em que houver sprints atribuídas, será necessário informar à equipe, às 11:00 AM, o status da sprint, detalhando o que foi feito ou explicando os motivos para eventuais pendências. O formato padrão de atualização será o seguinte:
</p>

```shell
Data:  dd/mm/aa - hh/mm
Nome da Sprint:
    Motivo (caso não concluída):
    
Concluída..... . [ ]  
Não Concluída... [ ] 
author:_____________
```

	se um membro não puder realizar uma sprint, ele poderá transferi-la para outro membro da equipe.

<p style='text-align: justify;'>
Ao adotar a metodologia ágil SCRUM, espera-se que, nas primeiras semanas, o sistema já apresente partes funcionais, proporcionando motivação para que a equipe continue empenhada no progresso do projeto.
</p>

---

1° [Miro board](https://www.google.com) | 2° [Figma protótipo](https://www.google.com) | 3° [www.geoplace.com](https://geoplace-app.onrender.com)
