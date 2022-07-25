/// <reference types="Cypress"/>

describe("Cypress Evento",()=>{
    it("Drag and Drop", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should('eq','The Internet')
        cy.get("#column-a").trigger("mousemove", {eventConstructor: "#column-b"})
    })
})