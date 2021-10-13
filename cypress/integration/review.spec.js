/* eslint-disable no-undef */
// Verification de section reviews
describe("Verification de section reviews", ()=> {
    it("Ok", ()=>{
        cy.visit("/#review")
        cy.get(".section__title").contains("Let’s see what patient says!")
        cy.get(".p").contains("Blandit feugiat viverra est tortor commodo, tellus. pellentesque diam, id felis viverra diam. Molestie solli semper ornare dolor augue aucto")
        cy.get("h2").contains("Justin Lubin")
        cy.get(".p__").contains("Patient")
    })
})