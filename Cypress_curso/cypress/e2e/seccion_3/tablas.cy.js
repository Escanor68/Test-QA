/// <reference types="Cypress"/>

const { filter } = require("cypress/types/bluebird")

describe("Elementos de una tabla",()=>{
    it("CHILDREN", () => {
        cy.visit("http://demo.seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy - Table Data Filter Demo")
        cy.get(".btn-group").children(".btn-success")
        cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})
        cy.get(".btn-group").children(".btn-danger")
        cy.get(".btn-group").children(".btn-danger").should("contain","Red").click({force:true})
    })

    it("Elementos eq", ()=>{
        cy.visit("http://demo.seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy - Table Data Filter Demo")
        cy.get("[type='button']").eq(2).should("contain","Orange").click({force:true})
        cy.get("[type='button']").eq(4).should("contain","All").click({force:true})
    })

    it("Elementos por filter", ()=>{
        cy.visit("http://demo.seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy - Table Data Filter Demo")
        cy.get("[type='button']").filter(".btn-success").should("contain","Green")
        cy.get("[type='button']").filter(".btn-warning").should("contain","Orange")
        cy.get("[type='button']").filter(".btn-success").should("contain","Green").click({force:true})
        cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click({force:true})
    })

    it("Elementos por find", ()=>{
        cy.visit("http://demo.seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy - Table Data Filter Demo")
        cy.get(".btn-group").find(".btn-danger").should("contain", "Red").click()
    })

    it("Elementos por first", ()=>{
        cy.visit("http://demo.seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy - Table Data Filter Demo")
        cy.get(".btn-group").find("button").first().click({force:true})
        cy.get(".btn-group").find("button").last().click({force:true})
    })

    it("Elementos por siguientes NextAll", ()=>{
        cy.visit("http://demo.seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy - Table Data Filter Demo")
        cy.get("[type='button']").should("contain", "Green")
        cy.get("[type='button']").should("contain", "Green").nextAll().should("have.length", 4)
    })

    it("Elementos padre", ()=>{
        cy.visit("http://demo.seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy - Table Data Filter Demo")
        cy.get("[type='button']").parent().should("have.class", "btn-group")
    })
})