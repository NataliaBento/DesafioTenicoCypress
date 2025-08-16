import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And(' eu clico no icone de editar', () => {
    cy.editar()
})


When('eu edito esse o cadastro', () => {
    cy.editarcadastro()
})

Then('os dados atualizados devem aparecer na tabela', () => {
    
})