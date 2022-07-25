/// <reference types="Cypress"/>

describe("Reto Assert",()=>{
    it("Reto", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-frist-form-demo.html")
        cy.title().should('eq','Selenium Easy - Simple From to Automate using Selenium')
        let a = 10
        let b = 20
        cy.get("#sum1").should("be.visible").and("have.class", "from-control").type(a).then(()=>{
            cy.get("#sum2").should("be.visible").and("have.class", "from-control").type(b).then(()=>{
                cy.contains("[type='button']", "Get Total").click().then(()=>{
                    cy.get("#displayvalue").should("be.visible").then((c)=>{
                        let d = c.text()
                        if(d == a+b)
                            cy.log("Son iguales")
                        else
                            cy.log("No son iguales")
                    })
                })
            })
        })
    })

    it("Reto otra forma mas otras cosas", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-frist-form-demo.html")
        cy.title().should('eq','Selenium Easy - Simple From to Automate using Selenium')
        let a = 10
        let b = 20
        cy.get("#sum1").should("be.visible").and("have.class", "from-control").type(a)
        cy.get("#sum2").should("be.visible").and("have.class", "from-control").type(b)
        cy.contains("[type='button']", "Get Total").click()
        cy.get("#displayvalue").should("be.visible").then((c)=>{
            let d = c.text()
            if(d == a+b)
                cy.log("Son iguales")
            else
                cy.log("No son iguales")

            if(d > 50){
                a = a - 10
                b = b - 10
                cy.get("#sum1").invoke("attr", "placeholder").should("contain", "Enter value").then(()=>{
                    cy.get("#sum1").clear().type(a)
                    cy.get("#sum1").invoke("attr", "style", "color:blue")
                })
                cy.get("#sum2").should("be.visible").and("have.class", "from-control").type(b)
                cy.contains("[type='button']", "Get Total").click()
            }else{
                a = a +5
                b = b + 5
                cy.get("#sum1").should("be.visible").and("have.class", "from-control").type(a)
                cy.get("#sum2").should("be.visible").and("have.class", "from-control").type(b)
                cy.contains("[type='button']", "Get Total").click()
            }
        })
    })
})