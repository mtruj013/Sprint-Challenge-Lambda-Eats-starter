/* eslint-disable no-undef */



describe("testing order form", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3001/pizza")
    })
    it("add text to box", () =>{
        cy.get('input[name="name"]')
            .type("Maria")
            .should("have.value", "Maria")
        cy.get('textarea[name="notes"]')
            .type("extra cheese")
            .should("have.value", "extra cheese")
        cy.get('[type="checkbox"]')
            .check()
            .should('be.checked')
        cy.get('button').click()
    })
})