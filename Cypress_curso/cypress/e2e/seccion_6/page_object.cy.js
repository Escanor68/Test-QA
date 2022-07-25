/// <reference types="Cypress"/>

require("cypress-xpath")

describe("Page objects model",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it("Demo uno", () => {
        cy.log('hola')
    })
})