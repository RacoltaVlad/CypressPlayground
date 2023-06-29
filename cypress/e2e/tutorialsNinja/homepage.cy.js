describe('TutorialsNinja Homepage', () => {

    it('Should login user', () => {

        cy.visit('https://tutorialsninja.com/demo/');

        cy.url().should('include', '//tutorialsninja.com/demo/');

        cy.get('h1').contains('Qafox.com').should('be.visible');

      
    });

});