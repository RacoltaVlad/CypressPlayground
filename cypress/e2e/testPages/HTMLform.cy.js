/// <reference types="Cypress" />


describe('Basic HTML Form Example', () => {

    beforeEach(() => {
        //Visit the Basic HTML Form test page
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
    })

    it('Should fill in and successfully reach the confirmation screen for processed form', () => {

        //Verify that the form is visible
        cy.get('table').should('be.visible');

        //Type the username in the username field
        cy.get('input[name=username]').type('testUsername', { delay: 50 });

        //Type the password in the password field
        cy.get('input[name=password]').type('testPassword', { delay: 50 });

        //Type the comments in the text area comments field
        cy.get('textarea[name=comments]').clear().type('textAreaComment', { delay: 25 });

        //Verify that the input fields have the right typed in values
        cy.get('input[name=username]').should('have.value', 'testUsername');
        cy.get('input[name=password]').should('have.value', 'testPassword');
        cy.get('textarea[name=comments]').should('have.value', 'textAreaComment');

        //Verify that the 3rd checkbox is checked by default
        cy.get('input[type=checkbox]').eq(2).should('be.checked');

        //Uncheck the 3rd checkbox
        cy.get('input[type=checkbox]').eq(2).click();

        //Verify that the checkbox is now unchecked
        cy.get('input[type=checkbox]').eq(2).should('not.be.checked');

        //Mark the first checkbox
        cy.get('input[type=checkbox]').eq(0).click();

        //Verify that the checkbox is marked
        cy.get('input[type=checkbox]').eq(0).should('be.checked');

        //Verify that the 2nd radio checkbox is checked by default
        cy.get('input[type=radio]').eq(1).should('be.checked');

        //Mark the first radio checkbox
        cy.get('input[type=radio]').eq(0).click();

        //Verify that the first radio checkbox is checked
        cy.get('input[type=radio]').eq(0).should('be.checked');

        //Verify that the 2nd radio checkbox is now unchecked
        cy.get('input[type=radio]').eq(1).should('not.be.checked');

        //Select 2nd value from multiple select values list
        cy.get('select[multiple=multiple]').select('ms2');

        //Select drop down item 4 from the dropdown items list
        cy.get('select[name=dropdown]').select('dd4');

        //Submit the form
        cy.get('input[value=submit]').click();

        //Verify redirect to processed form confirmation details page
        cy.url().should('contain', 'the_form_processor.php');

        //Verify confirmation page header
        cy.get('h1').should('be.visible').and('contain', 'Processed Form Details');

        //Verify validity of the values entered in the form for processing
        cy.get('#_username').should('contain', 'testUsername');
        cy.get('#_password').should('contain', 'testPassword');
        cy.get('#_comments').should('contain', 'textAreaComment');
        cy.get('#_checkboxes').should('contain', 'cb1');
        cy.get('#_radioval').should('contain', 'rd1');
        cy.get('#_dropdown').should('contain', 'dd4');
        cy.get('#_submitbutton').should('contain', 'submit');

        //Click to go back to the form
        cy.get('#back_to_form').click();


    });

    it('Should clear form filled in data when choosing to Cancel', () => {

        //Verify that the form is visible
        cy.get('table').should('be.visible');

        //Fill in the form
        cy.get('input[name=username]').type('testUsername', { delay: 50 });
        cy.get('input[name=password]').type('testPassword', { delay: 50 });
        cy.get('textarea[name=comments]').clear().type('textAreaComment', { delay: 25 });
        cy.get('input[type=checkbox]').eq(2).click();
        cy.get('input[type=checkbox]').eq(0).click();
        cy.get('input[type=radio]').eq(0).click();
        cy.get('select[multiple=multiple]').select('ms2');
        cy.get('select[name=dropdown]').select('dd4');

        //Click the Cancel button
        cy.get('input[value=cancel]').click();

        //Verify that the field is cleared and back to default values
        cy.get('input[name=username]').should('not.have.value');
        cy.get('input[name=password]').should('not.have.value');

        cy.get('textarea[name=comments]').should('not.have.value');

        cy.get('input[type=checkbox]').eq(0).should('not.be.checked');
        cy.get('input[type=checkbox]').eq(1).should('not.be.checked');
        cy.get('input[type=checkbox]').eq(2).should('be.checked');

        cy.get('input[type=radio]').eq(0).should('not.be.checked');
        cy.get('input[type=radio]').eq(1).should('be.checked');
        cy.get('input[type=radio]').eq(2).should('not.be.checked');

        cy.get("option[value='ms4']").should('be.enabled');

        cy.get("option[value='dd3']").should('be.selected');

    });

});