/// <reference types="Cypress"/>

describe("Navegacion",()=>{
    it("Back, forward", () => {
        cy.visit("https://demoqa.com/")
        cy.title().should("eq", "ToolsQA")
        cy.get(":nth-child(1) > :nth-child(1) > .avatar > svg").click()
        cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").click()
        cy.go("back")
        cy.go("back")
        cy.go("forward")
        cy.go("forward")
    })

    it.only("Back, forward", () => {
        cy.visit("https://demoqa.com/")
        cy.title().should("eq", "ToolsQA")
        cy.get(":nth-child(1) > :nth-child(1) > .avatar > svg").click()
        cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").click()
        cy.get("#userName").type("Ricardo")
        cy.get("#userEmail").type("Ricardo@gmail.com")
        cy.reload()
        cy.go("back")
    })
})