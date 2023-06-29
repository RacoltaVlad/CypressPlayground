/// <reference types="cypress" />

describe('get api user tests', () => {

    let accessToken = '34762bdbd82420c4a8777dd371373bdfdc0075fe045f779f98434765300127ec'

    it('get users', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users',
            headers: {
                'authorization' : "Bearer " + accessToken
            }
        }).then((res)=> { 
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)
        })

    });

    it('get user by id', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users/2254406',
            headers: {
                'authorization' : "Bearer " + accessToken
            }
        }).then((res)=> { 
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Cypress Test1')
        })

    });

});