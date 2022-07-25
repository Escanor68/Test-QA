/// <reference types="Cypress"/>

describe("Hooks",()=>{
    before(() => {
        // runs once before all tests in the block
    })

    beforeEach(() => {
        // runs before each test in the block
    })

    afterEach(() => {
        // runs after each test in the block
    })

    after(() => {
        // runs once after all tests in the block
    })

    it("Test dos", () => {
        cy.visit("")
        cy.title().should()
    })
})