/// <reference types="Cypress"/>

require("cypress-plugin-tab")

describe("Ejemplo funcion Tab",()=>{
    it("Type con tab", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get("#firstName").type("Ricardo").tab()
        .type("#lastName").type("Grebosz")
        .type("ricardo.grebosz@gmail.com")
    })
})