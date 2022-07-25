/// <reference types="Cypress"/>

describe("Reto Selecter",()=>{
    it("select tres: opciones multiples", () => {
        cy.visit("https://www.seleniumeasy.com/test/jquery-dual-list-box-demo.html")
        cy.title().should("eq", "Selenium Easy - JQuery Dual List Box Demo")
        cy.get(".pickData").select(["Lara", "Julia","Laura"]).then(()=>{
            cy.get(".pAdd").click().then(()=>{
                cy.get(".pAddAll").click().then(()=>{
                    cy.get(".pRemoveAll").click()
                })
            })
        })
    })
})