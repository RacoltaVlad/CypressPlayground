// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getInputByValue", (selector) => {
    return cy.get(`input[value=${selector}]`)
})

//custom command for logging in Admin user on orangehrm demo website
Cypress.Commands.add("loginAdmin", (username, password) => {

    cy.session([username, password], () => {

        //Visit page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //Type user credentials
        cy.get("input[name='username']").type(username);
        cy.get("input[name='password']").type(password);

        //Click the submit button
        cy.get("button[type='submit']").click();

        //Verify that the logged in user dropdown button is visible
        cy.get('.oxd-userdropdown-tab').should('be.visible');
    })

})

//custom command for logging in Admin user on TutorialsNinja demo website
Cypress.Commands.add("loginUser", (email, password) => {

    cy.session([email, password], () => {

        //Navigate to the login page
        cy.visit('https://tutorialsninja.com/demo/');
        cy.get('#top').contains('My Account').should('be.visible').click();
        cy.get('.dropdown-menu').contains('Login').should('be.visible').click();

        //Type user credentials
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);

        //Click Login button
        cy.get('form > .btn').contains('Login').click();

        //Verify that the user is logged in
        cy.url().should('contain','?route=account/account');
        cy.get('#top').contains('My Account').should('be.visible');
        cy.get('#account-account').should('be.visible');
    })

})





