/// <reference types="Cypress"/>
require("cypress-xpath")

describe("Snippets",()=>{
    it("Snippets uno", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq", "ToolsQA")
        cy.get("#userName").should("be.visible").click({force:true})
    })
})