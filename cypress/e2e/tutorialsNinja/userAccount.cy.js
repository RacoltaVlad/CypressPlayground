import { email, password } from '../../fixtures/tutorialsNinjaUser.json'

describe('TutorialsNinja Login', () => {

    it('Should successfully login after navigating from homepage to login page', () => {
        
        cy.loginUser(email, password);
        
    });

    it('Logged in user should have access to Account Information page', () => {

        cy.loginUser(email, password);
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account');

        //Click my account
        cy.get('#content').contains('Edit your account information').should('be.visible').click();

        //Verify redirect to My Account info page
        cy.url().should('contain','route=account/edit');
        cy.get('#content').contains('My Account Information').should('be.visible');
    });


    it('Change your password', () => {

        cy.loginUser(email, password);
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account');

        //Click my account
        cy.get('#content').contains('Change your password').should('be.visible').click();

        //Verify redirect to Change your password page
        cy.url().should('contain','route=account/password');
        cy.get('#content').contains('Change Password').should('be.visible');
    });

});