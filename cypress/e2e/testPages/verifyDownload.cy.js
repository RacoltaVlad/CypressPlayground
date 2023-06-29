describe('Verify Download', () => {

    it('Should download file', () => {

        //Visit page
        cy.visit('https://testpages.herokuapp.com/styled/download/download.html');

        //Click the download button
        cy.get('#direct-download').should('be.visible').click();

        //Verify successful download
        cy.verifyDownload('textFile.txt');


    });

});
