describe('Assertions', () => {

    it('Should assert element attributes', () => {

        cy.visit('https://testpages.herokuapp.com/styled/attributes-test.html');

        cy.get('#domattributes')
            .should('have.attr', 'title', 'a paragraph to test attributes on')
            .and('have.attr', 'custom-attrib', 'attrib in source at load')
            .and('have.attr', 'original-title', 'This used to be the title')

        cy.get('.styled-click-button').should('be.enabled');

        cy.get('#jsattributes').should('have.attr', 'nextid', '1');

        cy.get('.styled-click-button').click();

        cy.get('#jsattributes').should('have.attr', 'nextid', '2')
            .and('have.attr', 'custom-1', 'value-1')

        cy.get('.styled-click-button').click();

        cy.get('#jsattributes').should('have.attr', 'nextid', '3')
            .and('have.attr', 'custom-1', 'value-1')
            .and('have.attr', 'custom-2', 'value-2')

    });

});

