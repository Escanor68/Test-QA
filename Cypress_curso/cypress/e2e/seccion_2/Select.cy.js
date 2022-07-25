/// <reference types="Cypress"/>
require('cypress-xpath')

describe("Nueva seccion checkbox",()=>{
    it("select uno", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html")
        cy.title().should("eq", "Selenium Easy - Automate All scenarios")
        cy.get("#select-demo").select("Friday").should("have.value","Friday")
    })

    it.only("select dos", () => {
        cy.visit("https://www.google.com/")
        cy.title().should("eq", "Google")
        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
        cy.get(".MUFPAc > :nth-child(2) > a").click()
    })

    it("select tres: opciones multiples", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html")
        cy.title().should("eq", "Selenium Easy - Automate All scenarios")
        cy.get("#multi-select").select(["California", "Ohio"]).then(()=>{
            cy.get("#printMe").click()
        })
    })
})