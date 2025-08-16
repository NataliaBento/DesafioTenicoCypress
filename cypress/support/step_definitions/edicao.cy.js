import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Before(() => {
  cy.visit('/')
  cy.botaoadd()
  cy.cadastro()
})

When ('clico no ícone de edicao', () => {
  cy.editar()
})

And('escolho um campo para alterar', () => {
    cy.campoalteracao()
})

And('clico no botao de submit', () => {
    cy.enviaralteracao()
})

Then('o cadastro deve ser alterado', () => {
    cy.cadastroalterado()
})