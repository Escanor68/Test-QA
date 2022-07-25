/// <reference types="Cypress"/>
require("cypress-xpath")

describe("Comandos personalisados",()=>{
    before(()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","ToolsQA")
    })
    it("Demo uno", () => {
        cy.Texto_visible("#userName", "Ricardo")
    })

    it("Demo dos", () => {
        cy.Texto_visible_xpath('//*[@id="userName"]', "Ricardo")
    })

    it.only("Demo 3", (()=>{
        cy.Bloque_ToolsQA("Ricardo", "ricardo@gmail.com", "dirrecion 1", "dirreccion 2")
    }))
})