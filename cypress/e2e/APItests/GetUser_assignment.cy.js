/// <reference types="cypress" />

describe('get api user tests', () => {

    let accessToken = '34762bdbd82420c4a8777dd371373bdfdc0075fe045f779f98434765300127ec'
    
    it('get users', () => {

        cy.api({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization' : "Bearer " + accessToken
            }
        }).then((res)=> { 
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)
        })

    });

    it('get user by id', () => {

        cy.api({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users/2250476',
            headers: {
                'authorization' : "Bearer " + accessToken
            }
        }).then((res)=> { 
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Ms. Deeptimoy Varrier')
            expect(res.body.data.email).to.eq('ms_deeptimoy_varrier@beahan-will.test')
            expect(res.body.data.gender).to.eq('male')
            expect(res.body.data.status).to.eq('active')
        })

    });

});