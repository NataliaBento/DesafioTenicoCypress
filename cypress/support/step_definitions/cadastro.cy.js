import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que estou no site do demoqa', () => { 
    cy.visit('/')
})

And ('clico no botao add', () => {
    cy.botaoadd()
})

And('preencho os campos de cadastro com dados válidos', () => {
    cy.cadastro()
})

And('clico no botao de confirmacao', () => {
    cy.confirmarcadastro()
})

Then('o cadastro deve ser concluído', () => {
    cy.cadastroconcluido()
})