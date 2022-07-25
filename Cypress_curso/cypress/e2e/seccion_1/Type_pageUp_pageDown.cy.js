/// <reference types="Cypress"/>

describe("Type pageUp, pageDown",()=>{
    it("Type pageUp", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").type("{pageup}")
    })

    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").type("{pagedown}")
    })
})