describe('Fixtures - Data Driven Testing', () => {

    it('Fixtures Demo Data Driven Test', () => {

        //Use the cy.fixture() method to pull data from fixture file - it has 3 sets of data, valid credentials, invalid username, invalid password
        cy.fixture('orangehrmDataSet').then((data) => {

            //Visit the login page
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            //Iterate through each of the 3 sets of user data inside the fixture file
            data.forEach((userdata) => {

                //Provide the user data read from the fixture and type it into the input fields 
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);

                //Click the Login button
                cy.get("button[type='submit']").click();

                //Testing the invalid credentials use case
                //If condition 1 - username is invalidUsername OR condition 2 - password is invalidPassword 
                if (userdata.username == "invalidUsername" || userdata.password == "invalidPassword") {

                    //We should see the specific error message
                    cy.log('Tesing invvalid credentials');
                    cy.get('.oxd-alert').contains(userdata.expectedError).should('be.visible');
                }

                //Testing valid credentials use case
                //Else if the credentials are not invalid, we should be logged (name is displayed in the right-corner dropdown) and redirected on the Dashboard page
                else {
                    cy.log('Testing valid credentials');
                    cy.get('.oxd-userdropdown-tab').should('be.visible').and('contain', userdata.name);
                    cy.url().should('contain', '/dashboard/index');
                    cy.get('.oxd-topbar-header-title').contains('Dashboard').should('be.visible');
                }

            });

        });

    });

});

