/// <reference types="Cypress"/>

describe("Reto",()=>{
    it("Reto tablas", () => {
        cy.visit("http://demo.seleniumeasy.com/test/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy - Table Data Filter Demo")
        for(x = 1; x <= 4; x ++){

            let nombreButon

            if(x == 1)
                nombreButon = "Green"
            else if(x == 2)
                nombreButon = "Orange"

            else if (x == 3)
                nombreButon = "Red"

            else if(x == 4)
                nombreButon = "All"

            cy.get("[type='button']").eq(x).should("contain", nombreButon).click({force:true})
            cy.get("[type='checkbox']").check({force:true})
        }
    })
})