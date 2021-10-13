/* eslint-disable no-undef */
// Verification de section 5
describe("Verification de section blog", ()=> {
    it("Ok", ()=>{
        cy.visit("/#blog")
        cy.get(".section__title").contains("Let’s see Our latest news")
        cy.get(".latest_").contains("Latest News:")
        cy.get('.viewAllBtn').contains("View all")
    })

    describe("Verification des bloc 1", ()=> {
        it("Is Ok", ()=> {
            cy.visit("/#blog")
            cy.get("h2").contains("By Maria Calzoni")
            cy.get("h2").contains("21/07/2021")
            cy.get("h3").contains("Join me and respectfully fight COVID misinformation.")
            cy.get("p").contains("Blandit feugiat viverra est tortor commodo, tellus. Neque, pellentesque diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit amet.")
            cy.get("p").contains("Blandit feugiat viverra est tortor commodo, tellus. Neque, pellentesque diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
        })
    })

    describe("Verification des bloc 2", ()=> {
        it("Is Ok", ()=> {
            cy.visit("/#blog")
            cy.get("h3").contains("I’m called anti-science I’m just an early...")
            cy.get("button").contains("Read More ")
            cy.get("h3").contains("Burnout and bias? Or medical...")
            cy.get("h3").contains("Healthy Living With Graves’ Disease.")
            cy.get("h3").contains("Coming soon:")
        })
    })
})