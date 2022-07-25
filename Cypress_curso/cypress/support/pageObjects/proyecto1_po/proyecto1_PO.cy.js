class ProyectoUno_PO {
    visitHome(){
        before(()=>{
            cy.visit('http://www.seleniumeasy.com/test/input-from-demo.html')
            cy.title().should("eq", 'Selenium Easy - Input from demo with Validations')
        })
    }
} // Final

export default ProyectoUno_PO