const BTN_ADD = '#addNewRecordButton'
const INPUT_NAME = '#firstName'
const INPUT_LAST_NAME = '#lastName'
const INPUT_EMAIL =  '#userEmail'
const INPUT_AGE = '#age'
const INPUT_SALARY = '#salary'
const INPUT_DEPARTAMENT = '#department'
const BTN_SUBMIT = '#submit' 
const LINHA = '.rt-tr-group'

Cypress.Commands.add('botaoadd', () => {
    cy.get(BTN_ADD).click()
})

Cypress.Commands.add('cadastro', () => {
    cy.get(INPUT_NAME).type(Cypress.env('nome'), {log: false})
    cy.get(INPUT_LAST_NAME).type(Cypress.env('sobrenome'), { log: false})
    cy.get(INPUT_EMAIL).type(Cypress.env('email'), {log: false})
    cy.get(INPUT_AGE).type(Cypress.env('idade'), {log: false})
    cy.get(INPUT_SALARY).type(Cypress.env('salario'), {log: false})
    cy.get(INPUT_DEPARTAMENT).type(Cypress.env('departamento'), {log: false})
})

Cypress.Commands.add('confirmarcadastro', () => {
    cy.get(BTN_SUBMIT).click()
})

Cypress.Commands.add('cadastroconcluido', () => {
  cy.get(BTN_ADD).should('be.visible') 
})


Cypress.Commands.add('validarEmailNaTabela', () => {
    cy.contains(LINHA, Cypress.env('email'), {log: false}).should('exist');
})

