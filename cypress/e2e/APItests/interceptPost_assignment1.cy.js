/// <reference types="cypress" />

describe('Intercept with Cypress assignment', () => {

    it('Test API with simple intercept - route all POST requests that match this URL', () => {

        //Visit the network-requests 
        cy.visit('https://example.cypress.io/commands/network-requests')

        //Intercept all POST requests that have a URL that matches '/comments'
        cy.intercept({ method: 'POST', url: '/comments' }).as('postComment')

        //Which are triggered when we click the Post Comment button
        cy.get('.network-post').contains('Post Comment').click()

        //Wait for the request and validate the status code
        cy.wait('@postComment').its('response.statusCode').should('eq', 201)

    })

    it('Wait for comment and validate its visibility on the page', () => {

        //Visit the network-requests page
        cy.visit('https://example.cypress.io/commands/network-requests')

        //Intercept all POST requests that have a URL that matches '/comments'
        cy.intercept({ method: 'POST', url: '/comments' }).as('postComment')

        //Which are triggered when we click the POST Comment button
        cy.get('.network-post').contains('Post Comment').click()

        //Wait for the response
        cy.wait('@postComment')

        //And then check that the comment shows up on the page
        cy.get('.network-post-comment')
            .contains('POST successful!')
            .should('be.visible')

    })

})
