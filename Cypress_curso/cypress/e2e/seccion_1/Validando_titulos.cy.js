/// <reference types="Cypress"/>

describe("Seccion 1 -> validando titulo",()=>{
    it("Test de validar el titulo", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
    })
})