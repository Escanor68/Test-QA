/// <reference types="Cypress"/>

describe("Alias",()=>{
    it("Alias uno", () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get("#firstname").should("be.visible").as("nom")
        cy.get("@nom").type("Timoteo")
        cy.get("#surname").should("be.visible").as("ap")
        cy.get("@ap").type("Grebosz Parma")
        cy.get("#age").should("be.visible").as("edad")
        cy.get("@edad").type("23")
        cy.get("#country").should("be.visible").as("pais")
        cy.get("@pais").select("Argentina")
        cy.get("#notes").should("be.visible").as("notas")
        cy.get("@notas").type("Demo de la prueba")
        cy.get("[type='submit']").click()
    })
})