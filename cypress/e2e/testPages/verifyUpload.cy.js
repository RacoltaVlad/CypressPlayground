describe('Verify Upload', () => {

    it('Should upload file', () => {

        cy.visit('https://testpages.herokuapp.com/styled/file-upload-test.html')

            cy.get('input[type=file]').selectFile('cypress/fixtures/imageFile.jpg').wait(500)
    
            //Click the upload button
            cy.get('.styled-click-button').click();
    
            //Verify successful upload
            cy.url().should('contain','fileprocessor');
            cy.get('#uploadedfilename').contains('imageFile.jpg').should('be.visible');
       
    });

});