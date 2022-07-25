/// <reference types="Cypress"/>

describe("Referencias a Windows",()=>{
    it("Windows propiedas charset", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq", "The Number Game")
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
    })

    it("Windows url", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq", "The Number Game")
        // dos formas de hacer la validacion de url
        cy.url().should("include", "random-number.html")
        cy.url().should("eq", "https://testsheepnz.github.io/random-number.html")
    })
})