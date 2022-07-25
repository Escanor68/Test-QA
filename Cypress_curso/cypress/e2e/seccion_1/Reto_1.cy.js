/// <reference types="Cypress"/>

require("cypress-plugin-tab")

describe("Primer Reto",()=>{
    it("Escritura", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        // validacion de titulos
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq", "ToolsQA")
        cy.wait(1000)

        // busqueda de la persona en la pagina
        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        // agregar un nuevo campo
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000)
        cy.get("#firstName").should("be.visible").type("Ricardo").tab()
        .type("Grebosz").tab()
        .type("ricardo@gmail.com").tab()
        .type("24").tab()
        .type("60000").tab()
        .type("sistemas")
        cy.wait(1000)
        cy.get("#submit").should("be.visible").click()

        // fijarme si lo creo
        cy.get("#searchBox").should("be.visible").type("Ricardo")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        // modificar un campo
        cy.get("#edit-record-1 > svg > path").should("be.visible").click()
        cy.get("#age").should("be.visible").clear().type("50")
        cy.get("#salary").should("be.visible").clear().type("50000")
        cy.get("#submit").should("be.visible").click()
        cy.wait(1000)

        // borrar un campo
        cy.get("#delete-record-3 > svg > path").should("be.visible").click()
    })
})