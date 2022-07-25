/// <reference types="Cypress"/>
require('cypress-xpath')

describe("Nueva seccion checkbox",()=>{
    it("check uno", () => {
        cy.visit("http://demo.seleniumeasy.com/test/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")
        cy.get("[type='checkbox']").check().should("be.checked")
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    })

    it("check por seleccion", () => {
        cy.visit("http://demo.seleniumeasy.com/test/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")

        // por check
        cy.get("#isAgeSelected").check().should("be.checked")
        cy.xpath("(//input[contains(@type,'checkbox')])").check().should("be.checked")

        // por click
        cy.get("#isAgeSelected").click()
        cy.xpath("(//input[contains(@type,'checkbox')])").click()
    })

    it("check por radio boton", () => {
        cy.visit("http://demo.seleniumeasy.com/test/basic-radiobutton-demo.html")
        cy.title().should("eq", "Selenium Easy - Radio buttons demo for Automation")

        // por check
        cy.get(".panel-body > :nth-child(3) > input").check()

        // por click
        cy.get(".panel-body > :nth-child(3) > input").click()
    })
})