/// <reference types="cypress" />

describe('Checkboxes', () => {

    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    });

    it('Checks/Unchecks Option 1 checkbox', () => {

        cy.getInputByValue("option-1").should('be.visible').check().should('be.checked').uncheck().should('not.be.checked');
    });

    it('Checks/Unchecks Option 2 checkbox', () => {

        cy.getInputByValue("option-2").should('be.visible').check().should('be.checked').uncheck().should('not.be.checked');

    });

    it('Checks/Unchecks Option 3 checkbox', () => {

        cy.getInputByValue("option-3").should('be.visible').should('be.checked').uncheck().should('not.be.checked');

    });

    it('Checks/Unchecks Option 4 checkbox', () => {

        cy.getInputByValue("option-4").should('be.visible').check().should('be.checked').uncheck().should('not.be.checked');

    });

});

