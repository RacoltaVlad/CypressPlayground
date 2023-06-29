/// <reference types="cypress" />

describe('Intercept with Cypress assignment - assertions', () => {

    it('Makes assertions on the response body', () => {

        //Visit the network-requests page
        cy.visit('https://example.cypress.io/commands/network-requests')

        //Intercept all POST requests that have a URL that matches '/comments'
        cy.intercept('POST', '/comments').as('postComment')

        //Which are triggered when we click the POST Comment button
        cy.get('.network-post').contains('Post Comment').click()

        //Wait for the request and validate the status code
        cy.wait('@postComment').its('response.statusCode').should('eq', 201)

        //Make assertions on the response body
        cy.get('@postComment').should(({ response }) => {
            expect(response.body).to.have.property('id', 501)
            expect(response.body).to.have.property('name', 'Using POST in cy.intercept()')
            expect(response.body).to.have.property('email', 'hello@cypress.io')
            expect(response.body).to.have.property('body', 'You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE')
        })

    })

    it('Makes assertions on the response body - stubbed response', () => {

        //Visit the network-requests page
        cy.visit('https://example.cypress.io/commands/network-requests')

        //Intercept all POST requests that have a URL that matches '/comments' and stub the response body with fixture file
        cy.intercept('POST', '/comments', { fixture: 'POSTcomment.json' }).as('postComment')

        //Which are triggered when we click the POST Comment button
        cy.get('.network-post').contains('Post Comment').click()

        //Wait for the request and validate the status code
        cy.wait('@postComment').its('response.statusCode').should('eq', 200)

        //Make assertions on the response body
        cy.get('@postComment').should(({ response }) => {
            expect(response.body).to.have.property('id', 999)
            expect(response.body).to.have.property('name', 'Using TEST in cy.intercept()')
            expect(response.body).to.have.property('email', 'helloTEST@cypress.io')
            expect(response.body).to.have.property('body', 'You can change the method used to be TEST')
        })

    })

})
