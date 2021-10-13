/* eslint-disable no-undef */
// Verifier si les Logo et les titre navlink sur le nav sont present
describe("Nav", ()=>{
    it("Nav ok", ()=>{
        cy.visit("/")
        cy.get("button.nav__btn").contains("Let's talk")
        cy.get(".nav__link").contains("Home")
        cy.get(".nav__link").contains("Work")
        cy.get(".nav__link").contains("About")
        cy.get(".nav__link").contains("Schedule")
        cy.get(".nav__link").contains("Reviews")
        cy.get(".nav__link").contains("Blog")
    })
})