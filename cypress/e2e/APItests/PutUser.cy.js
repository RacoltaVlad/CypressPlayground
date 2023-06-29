/// <reference types="cypress" />
const dataJson = require('../../fixtures/createuser.json')

describe('post user request', () => {

    let accessToken = '34762bdbd82420c4a8777dd371373bdfdc0075fe045f779f98434765300127ec'
    let randomText = ""
    let testEmail = ""

    it('create and update user test', () => {

        var pattern = "ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 12; i++)
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@example.com'

        //1. create user (POST)
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": "Test Automation Cypress Example",
                "gender": "male",
                "email": "testautoexample123@example.com",
                "status": "active"
            }

        }).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email', 'testautoexample123@example.com')
            expect(res.body.data).has.property('name', 'Test Automation Cypress Example')
            expect(res.body.data).has.property('status', 'active')
            expect(res.body.data).has.property('gender', 'male')
        }).then((res) => {
            const userId = res.body.data.id
            cy.log("user id is: " + userId)
            //2. update user (PUT)
            cy.request({
                method: 'PUT',
                url: 'https://gorest.co.in/public/v1/users/' + userId,
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name": "Test Automation Cypress Example Updated",
                    "gender": "male",
                    "email": "testautoexample1234@example.com",
                    "status": "inactive"
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.data).has.property('email', 'testautoexample1234@example.com')
                expect(res.body.data).has.property('name', 'Test Automation Cypress Example Updated')
                expect(res.body.data).has.property('status', 'inactive')
                expect(res.body.data).has.property('gender', 'male')
            })
        })


    })
})