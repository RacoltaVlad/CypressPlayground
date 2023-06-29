/// <reference types="Cypress" />

const sizes = ['iphone-8', 'iphone-x', 'iphone-xr']

describe('Multiple mobile viewports practice test', () => {

    sizes.forEach((size) => {

        // make assertions on the main navigation header using
        // an array of different viewports

        it(`Should display navigation bar header on ${size} mobile screen`, () => {

            //Dynamically set viewport size and visit the page
            cy.viewport(size);
            cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')

            //Verify that the navbar header for mobile is visible
            cy.get('.navbar-header').contains('Categories').should('be.visible');

            //Click the navbar button inside the header and verify that the dropdown menu is displayed
            cy.get('.navbar-header > .btn').should('be.visible').click().wait(300);
            cy.get('.navbar-collapse').should('be.visible').should('be.not.v')
        });

    });

});