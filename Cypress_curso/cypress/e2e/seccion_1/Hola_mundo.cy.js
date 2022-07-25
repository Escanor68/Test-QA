describe("Bienbenidos al curso de cypress seccion 1",()=>{
    it("Mi primer test -> Hola mundo", () => {
        cy.log("hola mundo")
    })

    it("segundo test -> campo name", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("Ricardo")
    })
})