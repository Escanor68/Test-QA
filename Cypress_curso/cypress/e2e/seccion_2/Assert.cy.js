/// <reference types="Cypress"/>
require('cypress-xpath')

describe("Assert",()=>{
    it("Assert Contains", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        cy.get("#block_top_menu").contains("Women").click()
    })

    it("Assert Find",()=>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        cy.get(".product-container").find(".product-image-container").eq(4).click()
    })

    it("Assert Find validando texto",()=>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        cy.get(".product-container").find(".product-image-container").eq(3).click()
        cy.get("#product_condition > .editable").then((e)=>{
            let estado = e.text()
            if(estado=="New")
                cy.log("El vestido es nuevo")
        })
    })

    it("Assert Find validando texto numerico",()=>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        cy.get(".product-container").find(".product-image-container").eq(3).click()
        cy.get("#our_price_display").then((e)=>{
            let precio = e.text().slice(1,3)
            if(precio < 30){
                cy.log("Se puede comprar")
                cy.get("#add_to_cart").click()
            }else{
                cy.log("No se puede comprar")
                cy.get(".breadcrumb > [href='http://automationpractice.com/index.php?id_category=3&controller=category']").click()
            }
        })
    })

    it ("Assert Contains.text y have.text", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").type("Ricardo")
        cy.get("#userEmail").type("ricardo@gmail.com")
        cy.get("#submit").click()
        cy.get("#name").should("have.text", "Name:Ricardo")
        cy.get("#name").should("contain.text", "Ricardo")
    })

    it("Assert have.text mas then", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").type("Ricardo")
        cy.get("#userName").should("have.value", "Ricardo").then(()=>{
            cy.get("#userEmail").type("ricardo@gmail.com")
            cy.get("#submit").click()
        })
    })

    it("Assert have.class mas then", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").should("be.visible").should("have.class", "mr-sm-2").then(()=>{
            cy.get("#userName").type("Ricardo")
        })
    })

    it("Assert have.class y la funcion and", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").should("be.visible").and("have.class", "mr-sm-2").then(()=>{
            cy.get("#userName").type("Ricardo")
        })
    })

    it("Assert not.have mas then", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").should("be.visible").and("not.have.class", "mr-sm-22").then(()=>{
            cy.get("#userName").type("Ricardo")
        })
    })

    it("Assert length y css", () => {
        cy.visit("https://www.seleniumeasy.com/test/table-pagination-demo.html")
        cy.title().should('eq','Selenium Easy - Table with Pagination Demo')
        cy.get("#myTable >tr >td").should("have.length", 91).and("have.css", "pedding", "8px")
    })

    it.only("Assert length y css", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-frist-form-demo.html")
        cy.title().should('eq','Selenium Easy - Simple From to Automate using Selenium')
        // Eliminar una ventana no desea
        cy.get(".at-cm-no-button").should("be.visible").click({force:true})
        cy.get(".from-grup > #user-message").should("be.visible").type("Demo del contenido")

        cy.contains("[type='button'", "Show Message").click({force:true})
    })
})