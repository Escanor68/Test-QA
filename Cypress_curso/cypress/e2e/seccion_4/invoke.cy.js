/// <reference types="Cypress"/>
require("cypress-xpath")

describe("Invoke",()=>{
    it("Invoke text", () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")
        cy.xpath("/html/body/div/div[3]/form/label[1]").invoke("text").as("text_name")
        cy.get("@text_name").should("contain", "First name:").then(()=>{
            cy.get("#firstname").should("be.visible").as("nom")
            cy.get("@nom").type("Timoteo")
        })

        cy.xpath("/html/body/div/div[3]/form/label[3]").invoke("text").as("text_surname")
        cy.get("@text_surname").should("contain", "Last name:").then(()=>{
            cy.get("#surname").should("be.visible").as("ap")
            cy.get("@ap").type("Grebosz Parma")
        })

        cy.xpath("/html/body/div/div[3]/form/label[5]").invoke("text").as("edad")
        cy.get("@edad").should("contain", "Age:").then(()=>{
            cy.get("#age").should("be.visible").as("edad")
            cy.get("@edad").type("23")
        })

        cy.xpath("/html/body/div/div[3]/form/label[7]").invoke("text").as("pais")
        cy.get("@pais").should("contain", "Country:").then(()=>{
            cy.get("#country").should("be.visible").as("pais")
            cy.get("@pais").select("Argentina")
        })

        cy.xpath("/html/body/div/div[3]/form/label[9]").invoke("text").as("notas")
        cy.get("@notas").should("contain", "Notes:").then(()=>{
            cy.get("#notes").should("be.visible").as("notas")
            cy.get("@notas").type("Demo de la prueba")
        })
    })

    it("Invoke estilo", () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get('[for="firstname"]').invoke("attr", "style", "color:Blue; font-size: 50px")
    })

    it("Invoke ocultar y mostrar", () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get('[for="firstname"]').invoke("hide")
        cy.get("#firstname").invoke("hide")
        cy.wait(1500)
        cy.get('[for="firstname"]').invoke("show", "2s")
        cy.get("#firstname").invoke("show", "2s")
    })

    it("Invoke ocultar y mostrar 'Reto'", () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get('[for="surname"]').invoke("hide")
        cy.get("#surname").invoke("hide")
        cy.get('[for="age"]').invoke("hide")
        cy.get("#age").invoke("hide")
        cy.get('[for="country"]').invoke("hide")
        cy.get("#country").invoke("hide")
        cy.get('[for="notes"]').invoke("hide")
        cy.get("#notes").invoke("hide")
        cy.get("[type='submit']").invoke("hide")
        cy.get('[for="firstname"]').invoke("hide")
        cy.get("#firstname").invoke("hide")
        cy.wait(1500)
        cy.get('[for="firstname"]').invoke("show", "2s")
        cy.get("#firstname").invoke("show", "2s").then(()=>{
            cy.get("#firstname").should("be.visible").as("nom")
            cy.get("@nom").type("Ricardo")
            cy.get('[for="surname"]').invoke("show")
            cy.get("#surname").invoke("show")
            cy.get("#surname").should("be.visible").as("ap")
            cy.get("@ap").type("Timoteo Grebosz")
            cy.get('[for="age"]').invoke("show")
            cy.get("#age").invoke("show")
            cy.get("#age").should("be.visible").as("edad")
            cy.get("@edad").type("23")
            cy.get('[for="country"]').invoke("show")
            cy.get("#country").invoke("show")
            cy.get("#country").should("be.visible").as("pais")
            cy.get("@pais").select("Argentina")
            cy.get('[for="notes"]').invoke("show")
            cy.get("#notes").invoke("show")
            cy.get("#notes").should("be.visible").as("notas")
            cy.get("@notas").type("Demo de la prueba")
            cy.get("[type='submit']").invoke("show")
            cy.get("[type='submit']").click()
        })
    })

    it("Invoke target_blank", () => {
        cy.visit("https://dvwa.co.uk")
        cy.title().should("eq", "DVWA - Damn Vulnerable Web Application")
        cy.xpath('//*[@id="pagewidth"]/div/div[5]/a[2]').invoke("removeAttr", "target").click({force:true})
    })
})