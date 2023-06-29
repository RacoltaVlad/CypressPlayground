/// <reference types="cypress" />

describe('Intercept with Cypress examples', () => {

    it('Test API with simple intercept - route all GET requests that match this URL', () => {

        //Visit the network-requests 
        cy.visit('https://example.cypress.io/commands/network-requests')

        //Intercept all GET requests that have a URL that matches '/comments/1'
        cy.intercept({ method: 'GET', url: '/comments/1' }).as('getComment')

        //Which are triggered when we click the Get Comment button
        cy.get('.network-btn').contains('Get Comment').click()

        //Wait for the request and validate the status code
        cy.wait('@getComment').its('response.statusCode').should('eq', 200)

    })

    it('Wait for comment and validate its visibility on the page', () => {

        //Visit the network-requests page
        cy.visit('https://example.cypress.io/commands/network-requests')

        //Intercept all GET requests that have a URL that matches '/comments/1'
        cy.intercept({ method: 'GET', url: '/comments/1' }).as('getComment')

        //Which are triggered when we click the Get Comment button
        cy.get('.network-btn').contains('Get Comment').click()

        //Wait for the response
        cy.wait('@getComment')

        //And then check that the comment shows up on the page
        cy.get('.network-comment')
            .contains('laudantium enim quasi est quidem magnam voluptate ipsam')
            .should('be.visible')

    })

    it('Verifies text visibility on the page after button is clicked - stubbed response body', () => {

        //Visit the network-requests page
        cy.visit('https://example.cypress.io/commands/network-requests')

        //Intercept all GET requests that have a URL that matches '/comments/1' and stub the response body with fixture file
        cy.intercept( 'GET', '/comments/1', { fixture: 'comment.json' }).as('getComment')

        //Which are triggered when we click the Get Comment button
        cy.get('.network-btn').contains('Get Comment').click()

        //Wait for the response
        cy.wait('@getComment')

        //And then check that the comment text shows up on the page
        cy.get('.network-comment')
            .contains('This is our test body for the comment response')
            .should('be.visible')

    })

    it('Makes assertions on the response body', () => {

        //Visit the network-requests 
        cy.visit('https://example.cypress.io/commands/network-requests')

        //Intercept all GET requests that have a URL that matches '/comments/1'
        cy.intercept({ method: 'GET', url: '/comments/1' }).as('getComment')

        //Which are triggered when we click the Get Comment button
        cy.get('.network-btn').contains('Get Comment').click()

        //Wait for the request and validate the status code
        cy.wait('@getComment').its('response.statusCode').should('eq', 200)

        //Make assertions on the response body
        cy.get('@getComment').should(({ response }) => {
            expect(response.body).to.have.property('postId', 1)
            expect(response.body).to.have.property('id', 1)
            expect(response.body).to.have.property('name', 'id labore ex et quam laborum')
            expect(response.body).to.have.property('email', 'Eliseo@gardner.biz')
            expect(response.body).to.have.property('body', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium')
        })

    })

})
