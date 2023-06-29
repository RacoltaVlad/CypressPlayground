/// <reference types="cypress" />

describe('Radio Buttons', () => {

    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    });

    it('Marks each radio button', () => {

        cy.getInputByValue("green").should('be.visible').should('not.be.checked');
        cy.getInputByValue("blue").should('be.visible').should('not.be.checked');
        cy.getInputByValue("yellow").should('be.visible').should('not.be.checked');
        cy.getInputByValue("orange").should('be.visible').should('not.be.checked');
        cy.getInputByValue("purple").should('be.visible').should('not.be.checked');

        cy.getInputByValue("green").check().should('be.checked');

        cy.getInputByValue("blue").check().should('be.checked');
        cy.getInputByValue("green").should('not.be.checked');

        cy.getInputByValue("yellow").check().should('be.checked');
        cy.getInputByValue("blue").should('not.be.checked');

        cy.getInputByValue("orange").check().should('be.checked');
        cy.getInputByValue("yellow").should('not.be.checked');

        cy.getInputByValue("purple").check().should('be.checked');
        cy.getInputByValue("orange").should('not.be.checked');
    });

    it('Verifies state of the radio buttons', () => {

        cy.getInputByValue("lettuce").should('be.visible').and('not.be.checked');
        cy.getInputByValue("cabbage").should('be.visible').and('be.disabled');
        cy.getInputByValue("pumpkin").should('be.visible').and('be.checked');

        cy.getInputByValue("lettuce").check().should('be.checked');
        cy.getInputByValue("pumpkin").should('not.be.checked');
        cy.getInputByValue("cabbage").should('be.disabled');

    });

});

