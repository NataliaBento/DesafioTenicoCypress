const BTN_ADD = '#addNewRecordButton'
const INPUT_NAME = '#firstName'
const INPUT_LAST_NAME = '#lastName'
const INPUT_EMAIL =  '#userEmail'
const INPUT_AGE = '#age'
const INPUT_SALARY = '#salary'
const INPUT_DEPARTAMENT = '#department'
const BTN_SUBMIT = '#submit' 
const LINHA = '.rt-tr-group'
const BTN_DELETE = '#delete-record-4'
const BTN_EDIT = '#edit-record-4'
const MODAL = '.modal'



Cypress.Commands.add('excluir', () => {
  cy.get(BTN_DELETE).click()
})

Cypress.Commands.add('validaexclusao', () => {
    cy.contains(LINHA, Cypress.env('email'), {log: false}).should('not.exist')
})