/// <reference types="Cypress"/>

describe("Opciones de click",()=>{
    it("Click sensillo", () => {
        cy.visit("https://opensource-demo-6x.orangehrmlive.com/auth/login")
        cy.title().should("eq", "OrangeHRM")
        cy.get("#btnLogin").should("be.visible").click()
    })

    it("Click force true", () => {
        cy.visit("https://opensource-demo-6x.orangehrmlive.com/auth/login")
        cy.title().should("eq", "OrangeHRM")
        cy.get("#loginAsButtonGroup > .btn").should("be.visible").click({force: true})
    })

    it.only("Click por cordenadas (x,y)", () => {
        cy.visit("https://opensource-demo-6x.orangehrmlive.com/auth/login")
        cy.title().should("eq", "OrangeHRM")
        cy.get(".hidden-xs > .col-md-12 > .facebook > .fa").should("be.visible").click(50,30)
    })
})