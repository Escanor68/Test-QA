/// <reference types="Cypress"/>
require("cypress-xpath")
require("cypress-plugin-tab")

describe("Campos de tipo fecha",()=>{
    it("Fecha Uno", () => {
        cy.visit("http://demo.seleniumeasy.com/test/bootstrap-date-picker-demo.html")
        cy.title("eq","Selenium Easy - Best Demo website for Bootstrap Date Picker")
        cy.get("#sanbox-container1 > .input-group > .from-control").should("be.visible").click()
        cy.get(".today").first().click({force:true})
    })

    it("Fecha Dos", () => {
        cy.visit("http://demo.seleniumeasy.com/test/bootstrap-date-picker-demo.html")
        cy.title("eq","Selenium Easy - Best Demo website for Bootstrap Date Picker")
        cy.get("[placeholder='Start date']").should("be.visible").type("02/07/1998 {esc}")
        cy.get("[placeholder='End date']").should("be.visible").type("15/06/2022 {esc}")
    })

    it("Fecha Trres", () => {
        cy.visit("http://demo.seleniumeasy.com/test/bootstrap-date-picker-demo.html")
        cy.title("eq","Selenium Easy - Best Demo website for Bootstrap Date Picker")
        cy.get("[placeholder='Start date']").should("be.visible").type("02/07/1998 {esc}").tab().type("15/06/2022 {esc}")
    })
})