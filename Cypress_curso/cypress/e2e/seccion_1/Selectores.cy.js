/// <reference types="Cypress"/>
require('cypress-xpath')

describe("Tipos Selectores",()=>{
    it("Selector por id", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").should("be.visible").type('Ricardo')
    })

    it("Selector por Atributos", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get('[placeholder="Full Name"]').should("be.visible").type('Timoteo Grebosz')
    })

    it("Selector por Xpath", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("//*[@id='userName']").should("be.visible").type('Daniel')
        // ver extenciones
    })

    it("Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get(".custom-control-label").contains("Female").click()
    })

    it("Selector por copy_selector", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get("#userNumber").type("3525544018")
    })
})