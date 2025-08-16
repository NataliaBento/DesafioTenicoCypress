import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


Then('o email cadastrado deve aparecer na tabela', () => {
  cy.validarEmailNaTabela()
})
