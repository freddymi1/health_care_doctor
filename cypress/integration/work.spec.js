/* eslint-disable no-undef */
// Verification des donnee sur la section work
describe("Verification de section work", ()=>{
    it("renders correctly", ()=>{
        cy.visit("/#work")
        cy.get(".section__title").contains("My Skill depends on work.")
        cy.get(".section__subtitle").contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,")
    })
    describe("Verification des titres des card sur la section work", ()=>{
        it("renders correctly", ()=>{
            cy.visit("/#work")
            cy.get(".card_titleW").contains("Patient safety")
            cy.get(".card_titleW").contains("Well Cared")
            cy.get(".card_titleW").contains("24/7 Service")
            cy.get(".card_titleW").contains("Online support")
            cy.get("p").contains("feugiat viverra est suspendis porta tortor commodo")
        })
    })
})