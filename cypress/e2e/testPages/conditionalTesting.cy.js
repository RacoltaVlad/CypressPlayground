/// <reference types="Cypress" />
const { baseUrl, envTag } = Cypress.config();


describe('Conditional Testing', () => {

    it('Should visit the homepage ', () => {

        //COMMON CODE FOR BOTH ENVIRONMENTS GOES HERE:

        //Visit the baseUrl defined in the config file
        cy.visit('');

        //Validate the URL
        cy.url().should('eq', baseUrl);

        //DIFFERENT CODE BASED ON TESTED ENVIRONMENT GOES HERE:
        switch (true) {

            case envTag === "cypressQA":
                //CODE BLOCK FOR CYPRESS QA ENVIRONMENT
                cy.get('h1').contains('Kitchen Sink').should('be.visible');
                cy.get('.navbar').contains('GitHub').should('be.visible');
                cy.get('.navbar').contains('Cypress API').should('be.visible');
                break;

            case envTag === "cypressPROD": {

                //CODE BLOCK FOR CYPRESS PROD ENVIRONMENT
                cy.get('h1').contains('Test. Automate. Accelerate.').should('be.visible');
                cy.get('[data-cy="header-login"]').contains('Log In').should('be.visible');
                cy.get('[data-cy="header-install"]').contains('Install').should('be.visible');

                break;

            }

        }

    });

    it('Should run this test only on Cypress QA environment', () => {

        //Execute this test only if we are on the QA environment
        cy.onlyOn( envTag == ("cypressQA") );
        cy.log('Running test on QA environment');

        //Visit the baseUrl defined in the config file
        cy.visit('');

        //Validate the URL
        cy.url().should('eq', baseUrl);

        //Click the Utilities link in the navigation bar
        cy.get('.navbar').contains('Utilities').click();

        //Verify redirect to Utilities page
        cy.url().should('contain','/utilities');
        cy.get('h1').contains('Utilities').should('be.visible');
    });

});