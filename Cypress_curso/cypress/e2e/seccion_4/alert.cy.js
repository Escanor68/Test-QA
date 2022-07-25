/// <reference types="Cypress"/>
require("cypress-xpath")

describe("Alertas",()=>{
    it("Alerta uno", () => {
        cy.visit("http://www.seleniumeasy.com/test/bootstrap-modal-demo.html")
        cy.title("eq","Selenium Easy - Bootstrap Modal Demo to Automate")
        cy.xpath("//a[@href='#myMyModal0']").click()
        cy.xpath("(//a[@href='#'][contain(.,'Save changes')])[1]").click({force: true})
        cy.xpath("//a[@href='#myMyModal0']").click()
        cy.xpath("(//a[@href='#'][contain(.,'Close')])[1]").click({force: true})
    })
})