/// <reference types="cypress" />
const dataJson = require ('../../fixtures/createuser.json')

describe('post user request', () => {

    let accessToken = '34762bdbd82420c4a8777dd371373bdfdc0075fe045f779f98434765300127ec'
    let randomText = ""
    let testEmail = ""

    it('create user test', () => {

        var pattern = "ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 12; i++)
        randomText+=pattern.charAt(Math.floor(Math.random () * pattern.length));
        testEmail = randomText + '@example.com'

            //1. create user (POST)
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v1/users',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name": dataJson.name,
                    "gender": dataJson.gender,
                    "email": testEmail,
                    "status":dataJson.status
                }
   
            }).then((res)=>{
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email', testEmail)
                expect(res.body.data).has.property('name',dataJson.name)
                expect(res.body.data).has.property('status',dataJson.status)
                expect(res.body.data).has.property('gender',dataJson.gender)
            }).then((res) =>{
                   const userId = res.body.data.id 
                    cy.log("user id is: " + userId)
                    //2. get user (GET)
                    cy.request({
                        method: 'GET',
                        url: 'https://gorest.co.in/public/v1/users/'+userId,
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        }
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body.data).has.property('id', userId)
                        expect(res.body.data).has.property('name',dataJson.name)
                        expect(res.body.data).has.property('status',dataJson.status)
                        expect(res.body.data).has.property('email', testEmail)
                    })
            })
            
        
        })
    })