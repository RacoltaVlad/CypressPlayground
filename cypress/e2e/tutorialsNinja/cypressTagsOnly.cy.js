/// <reference types="cypress" />

describe('Cypress Tags - Only ', () => {

    it('Cypress Test Case 1', () => {
        // Test Steps/Commands for Test Case 1
        cy.log("I am in Test Case 1 ")
    })

    it('Cypress Test Case 2', () => {
        // Test Steps/Commands for Test Case 2
        cy.log("I am in Test Case 2")
    })

    it.only('Cypress Test Case - 3', () => {
        // Test Steps for Test Case - 3 
        cy.log("I am only in Test Case 3")
    })

})