/// <reference types="Cypress"/>
require("cypress-plugin-tab")

describe("Reto dos",()=>{
    it("Probando la aplicacion", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should("eq","Computers database")

        // buscar
        cy.get("#searchbox").type("ACE")
        cy.get("#searchsubmit").click()

        // agregar
        cy.get("#add").click()
        cy.get("#name").type("Sony").tab().type("2020-07-02").tab().type("2022-07-02")
        cy.get("#company").select("Sony")
        cy.get(".primary").click()

        // buscar
        cy.get("#searchbox").type("Sony")
        cy.get("#searchsubmit").click()
    })
})