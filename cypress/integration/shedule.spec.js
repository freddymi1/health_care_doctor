/* eslint-disable no-undef */
// Verification de section schedule
describe("Verification de section schedule", ()=> {
    it("Ok", ()=>{
        cy.visit("/#schedule")
        cy.get(".sheTitle").contains("Schedule")
        cy.get(".shb_").contains("let's See my schedule time! When i Free.")
        cy.get(".sp").contains("Blandit feugiat viverra est tortor commodo, tellus Neque.")
        cy.get(".p1_").contains("Diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit.")
    })
})

describe("Test section medicament", ()=> {
    it("Ok", ()=>{
        cy.visit("/#schedule")
        cy.get(".h2_").contains("Medical check-up reviews:")
        cy.get(".l1_").contains("Heartbeat Rate")
        cy.get(".l2_").contains("Glucose Tolerance Test")
        cy.get(".l3_").contains("Blood Pressure")
        cy.get(".l4_").contains("Blood Sugar Level")
    })
})

describe("Test section images", ()=> {
    it("Ok", ()=>{
        cy.visit("/#schedule")
        cy.get(".t1_").contains("Get an appoinment")
        cy.get(".date_").contains("Date:")
        cy.get(".time_").contains("Time:")
        cy.get(".loca_").contains("Location:")
        cy.get(".dateL").contains("25 AUG")
        cy.get(".dateL").contains("11:30 PM")
        cy.get(".dateL").contains("Sen Road")
    })
})