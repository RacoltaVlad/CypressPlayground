/// <reference types="Cypress" />

describe('Alert Examples', () => {

    beforeEach(() => {
        //Visit the Alert Box Examples test page
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html');
    })

    it('Should verify that window alert box is displayed when button is clicked', () => {

        //Click the Show alert box button
        cy.get('#alertexamples').click();

        //Verify that the alert box is called and shows correct text
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am an alert box!');
        })

    });

    it('Should verify confirmation message in the UI when window confirm box alert is accepted', () => {

        //Click the Show confirm box button
        cy.get('#confirmexample').click();

        //Verify that the alert box is called and shows correct text
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('I am a confirm alert');
        })

        //By default Cypress will automatically hit “Ok” in our confirmation - assert the confirmation message in the UI
        cy.get('#confirmexplanation').should('be.visible').and('contain', 'You clicked OK, confirm returned true.');

    });

    it('Should verify confirmation message in the UI when window confirm box alert is cancelled', () => {

        //Click the Show alert box button
        cy.get('#confirmexample').click();

        //If we want to instead test a use case of someone clicking “Cancel”, we return false in our event callback
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('I am a confirm alert');
            return false;
        })

        //Assert the confirmation message in the UI for cancelling confirm box alert
        cy.get('#confirmexplanation').should('be.visible').and('contain', 'You clicked Cancel, confirm returned false.');

    });

});