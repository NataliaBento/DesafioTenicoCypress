DESAFIOTECNICOCYPRESS
Projeto de automação de testes end-to-end utilizando Cypress com integração ao Cucumber (Gherkin). 
Este repositório foi desenvolvido como parte de um desafio técnico e tem como objetivo validar funcionalidades de cadastro, edição, exclusão e validações de formulário em uma aplicação web.

Estrutura de Pastas
DESAFIOTECNICOCYPRESS/
├── cypress/
│   ├── e2e/                      
│   │   ├── cadastro.feature
│   │   ├── edicao.feature
│   │   ├── exclusao.feature
│   │   └── validacoesCadastro-01.feature
│   ├── fixtures/                 
│   ├── support/
│   │   ├── pages/                
│   │   │   ├── cadastro.page.js
│   │   │   └── edicao.page.js
│   │   ├── step_definitions/     
│   │   │   ├── cadastro.cy.js
│   │   │   ├── edicao.cy.js
│   │   │   ├── exclusao.cy.js
│   │   │   ├── validacoesCadastro.cy.js
│   │   │   └── commands.js       
│   ├── e2e.js                    


Como executar o projeto
Siga os passos abaixo para clonar e executar os testes localmente:

1. Clonar o repositório
git clone https://github.com/NataliaBento/DesafioTenicoCypress.git
cd desafiotecnicocypress


2. Instalar as dependências
Certifique-se de ter o Node.js instalado. Em seguida, execute:
npm install


3. Executar os testes
Para abrir o Cypress em modo interativo:
npx cypress open


Ou para executar os testes em modo headless:
npx cypress run


Tecnologias e dependências:
- Cypress ^14.5.4 — Framework de testes end-to-end
- Cypress Cucumber Preprocessor ^4.3.1 — Integração com Gherkin para escrita de testes em linguagem natural

Organização dos testes
- Os arquivos .feature descrevem os cenários de teste em linguagem Gherkin.
- Os arquivos .cy.js contêm a implementação dos passos definidos nos arquivos .feature.
- Os arquivos em pages/ encapsulam ações e elementos da interface, seguindo o padrão Page Object Model.
- Os vídeos gerados após a execução dos testes são armazenados na pasta cypress/videos.




