/// <reference types="Cypress"/>
require("cypress-xpath")
require("cypress-plugin-tab")

describe("Bucles for y each",()=>{
    it("Each uno", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        cy.get(".product-name").each(($el,index,$list)=>{
            let vestidos = $el.text()
            cy.log(vestidos)
        })
    })

    it("Each dos", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        cy.get(".product-name").each(($el,index,$list)=>{
            let vestidos = $el.text()
            if(vestidos.includes("Blouse"))
                cy.wrap($el).click()
        })
    })

    it("Each reto", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        for(let x=0; x<=3; x++){
            cy.get("#center_column .product-name").eq(x).click({force:true}).then(()=>{
                cy.get("#quantity_wanted").clear().type("4")
                cy.get("#group_1").select("M").should("have.value","2")
                cy.get(".exclusive > span").click().then(()=>{
                    cy.get(".button-medium > span").click().then(()=>{
                        cy.get(".icon-home").click()
                    })
                })
            })
        }
    })

    it("Each reto otra forma de resolver pero falla por la pagina", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq", "My Store")
        const datos = []
        cy.get("#center_column .product-name").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let x=0; x<=datos.length; x++){
                cy.get("#center_column .product-name").eq(x).click({force:true}).then(()=>{
                    cy.get("#quantity_wanted").clear().type("4")
                    cy.get("#group_1").select("M").should("have.value","2")
                    cy.get(".exclusive > span").click().then(()=>{
                        cy.get(".button-medium > span").click().then(()=>{
                            cy.get(".icon-home").click()
                        })
                    })
                })
            }
        })
    })
})