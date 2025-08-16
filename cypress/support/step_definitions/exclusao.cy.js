import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Before(() => {
  cy.visit('/')
  cy.botaoadd()
  cy.cadastro()
  cy.confirmarcadastro()
  cy.cadastroconcluido()
})

When ('clico no ícone de exclusão', () => {
  cy.excluir()
})

Then('o cadastro deve desaparecer da tabela', () => {
  cy.validaexclusao()
})