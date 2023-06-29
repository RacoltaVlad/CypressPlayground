/// <reference types="cypress" />

describe('Contact Us', () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    });

    it('Sends form with invalid email address', () => {

        cy.get('input[name="first_name"]').type("First Name test");
        cy.get('input[name="last_name"]').type("Last Name test");
        cy.get('input[name="email"]').type("invalid@");
        cy.get('textarea.feedback-input').type("This is a test message: abc");
        cy.get('[type="submit"]').click();

        cy.get('body').contains('Error: Invalid email address')
    });

    it('Sends form without required fields', () => {

        cy.get('input[name="email"]').type("valid@example.com");
        cy.get('[type="submit"]').click();

        cy.get('body').contains('Error: all fields are required').should('be.visible');
    });

    it('Successfully sends form with valid data', () => {

        cy.get('input[name="first_name"]').type("First Name test");
        cy.get('input[name="last_name"]').type("Last Name test");
        cy.get('input[name="email"]').type("valid@example.com");
        cy.get('textarea.feedback-input').type("This is a test message: abc");
        cy.get('[type="submit"]').click();

        cy.url().should('contain', '/contact-form-thank-you');
        cy.get('h1').should('have.text','Thank You for your Message!')
    });

});