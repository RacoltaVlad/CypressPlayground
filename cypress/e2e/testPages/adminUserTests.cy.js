/// <reference types="Cypress" />

import { username, password } from '../../fixtures/orangehrm.json'

beforeEach(() => {

    //Reach the Dashboard page as an Admin logged in user
    cy.loginAdmin(username, password);
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

})

describe('Admin user account', () => {

    it('Logged in Admin can reach the System Users page', () => {

        //Click the Admin button from the main menu on the right side
        cy.get('.oxd-main-menu-item').contains('Admin').should('be.visible').click();

        //Verify redirect to System Users page
        cy.url().should('contain','/admin/viewSystemUsers');
        cy.get('.oxd-table-filter-header').contains('System Users').should('be.visible');
       
    });

    it('Logged in Admin can reach the Employee Information page', () => {

        //Click the Admin button from the main menu on the right side
        cy.get('.oxd-main-menu-item').contains('PIM').should('be.visible').click();

        //Verify redirect to Employee Information page
        cy.url().should('contain','/pim/viewEmployeeList');
        cy.get('.oxd-table-filter-header').contains('Employee Information').should('be.visible');
       
    });

    it('Logged in Admin can reach the Leave List page', () => {

        //Click the Admin button from the main menu on the right side
        cy.get('.oxd-main-menu-item').contains('Leave').should('be.visible').click();

        //Verify redirect to Leave List page
        cy.url().should('contain','/leave/viewLeaveList');
        cy.get('.oxd-table-filter-header').contains('Leave List').should('be.visible');
       
    });

});
