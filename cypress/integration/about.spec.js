/* eslint-disable no-undef */
// Verification de section about
describe("Verification de about page", ()=> {
    it("Ok", ()=>{
        cy.visit("/#about")
        cy.get(".ab_me").contains("ABOUT ME")
        cy.get(".i_m").contains("I'm Dr. Kierra Calzoni.")
        cy.get(".actu_").contains("Actually, I love to care Patient.")
        cy.get(".p1_").contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor proin id aliquet lacinia vulputate non. Rhoncus,")
        cy.get(".p2_").contains("Blandit feugiat viverra est Suspendisse porta tortor commodo.")
        cy.get(".p3_").contains("Tempor proin id aliquet lacinia vulputate non. Rhoncus, blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque.")
    })
    describe("Verification des titres des card sur la section about", ()=>{
        it("renders correctly", ()=>{
            cy.visit("/#about")
            cy.get(".titleABH").contains("Dr. Kierra Calzoni")
            cy.get(".rating_").contains("Rating:")
            cy.get(".p4_").contains("Lorem ipsum dolor sit amet conct adipiscing elit. Sed tpus donec ultricies molestie vel.")
            cy.get(".num_").contains("+88 01924 184 461")
        })
    })
})