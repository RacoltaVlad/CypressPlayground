/// <reference types="Cypress" />

describe('A Fixture File', () => {

    it('Login Tests', () => {

        cy.fixture('practiceLoginDataSet').then((data) => {
            cy.visit('https://practicetestautomation.com/practice-test-login/');

            data.forEach((userdata) => {

                cy.get('#username').type(userdata.username);
                cy.get('#password').type(userdata.password);

                cy.get('section[role="main"] section div button').click();

                if (userdata.username == "incorrectUser" || userdata.password == "incorrectPassword") {

                    cy.log('Testing invalid credentials');
                    cy.get('#error').contains(userdata.expected).should('be.visible');

                } else {
                    cy.log('Testing valid credentials');
                    cy.get('strong').should('be.visible').and('contain', userdata.expected);
                    cy.url().should('contain', '/logged-in-successfully/');
                    cy.get('.wp-block-button__link').should('be.visible');
                }


            });

        });

    });

});

