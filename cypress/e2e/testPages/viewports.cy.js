/// <reference types="Cypress" />

const sizes = ['iphone-6', 'ipad-2', 'macbook-16']

describe('Multiple viewports example', () => {

    sizes.forEach((size) => {

        // make assertions on the main navigation header using
        // an array of different viewports

        it(`Should display main navigation header on ${size} screen`, () => {

            cy.viewport(size);
            cy.visit('https://www.cypress.io')
            cy.get('[data-cy="main"]').should('be.visible')

        })

    })

})