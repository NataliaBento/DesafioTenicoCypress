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

Cypress.Commands.add('editar', () => {
  cy.get(BTN_EDIT).click()
  cy.get(MODAL, { timeout: 10000 }).should('be.visible') 
})

Cypress.Commands.add('campoalteracao', () => {
  cy.get(INPUT_LAST_NAME, { timeout: 10000 }) 
    .should('be.visible')                     
    .clear()                                  
    .type(Cypress.env('sobrenomeeditado'), { log: false }) 
})

Cypress.Commands.add('enviaralteracao', () => {
    cy.get(BTN_SUBMIT).click()
})


Cypress.Commands.add('cadastroalterado', () => {
  cy.contains(LINHA, Cypress.env('sobrenomeeditado'), { log: false }).should('exist')
})
