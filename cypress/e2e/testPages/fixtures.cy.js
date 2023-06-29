/// <reference types="Cypress" />

describe('Fixtures - Direct use', () => {

    it('Fixtures Demo Test', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //Use the cy.fixture() method to pull data from fixture file
        cy.fixture('orangehrm.json').then((data) => {

            //Provide the data read from the fixture
            cy.get("input[name='username']").type(data.username);
            cy.get("input[name='password']").type(data.password);

            //Click the Login button
            cy.get("button[type='submit']").click();

            //Verify that the logged in user name read from fixture file is displayed in the user dropdown tab
            cy.get('.oxd-userdropdown-tab').should('be.visible');

        });

        //Verify logged in user page redirect to Dashboard
        cy.url().should('contain', '/dashboard/index');
        cy.get('.oxd-topbar-header-title').contains('Dashboard').should('be.visible');

    });

});
