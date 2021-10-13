/* eslint-disable no-undef */
// Verifier si les donnee sur le Homepage sont tous la
describe("data_home", ()=>{
    it("renders correctly", ()=>{
        cy.visit("/")
        cy.get(".home__subtitle").contains("Stay Strong, Live long.")
        cy.get(".home__title").contains("Take care of your body and it will take care of you.")
        cy.get("._textHome").contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,")
    })
})

// Verifier si le button dans la section home contien le mot Get your free Quote

describe("Button test", ()=>{
    it("ok", ()=>{
        cy.visit("/")
        cy.get("button").contains("Get Appointment")
        cy.get("button").contains("View Profile")
    })
})

