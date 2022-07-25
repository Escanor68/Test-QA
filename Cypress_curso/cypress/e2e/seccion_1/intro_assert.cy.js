/// <reference types="Cypress"/>

describe("Introduccion a los assert",()=>{
    it("Demo de los assert", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get("#firstName").should("be.visible").type("Timoteo")
        cy.get("#lastName").should("be.visible").type("Grebosz")
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("ricardo.grebosz@gmailo.com")
    })
})