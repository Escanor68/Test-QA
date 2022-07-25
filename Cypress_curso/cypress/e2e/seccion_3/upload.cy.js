/// <reference types="Cypress"/>

describe("Upload",()=>{
    it("Cargar un archivo", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get("[type='file']").selectFile("cypress/fixtures/imagen.png")
    })
})