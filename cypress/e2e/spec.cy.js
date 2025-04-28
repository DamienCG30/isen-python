describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
  })
})

/*

describe('Create and connect to an account', () => {
  it('Visits the Oc commerce site', () => {
    cy.visit('http://127.0.0.1:8000/home')

    // User is able to create an account an to be redirect to login pages

    cy.contains('SIGNUP').click()
    cy.url().should('include', '/user/signup')
    // cy.contains('fname')
    cy.get('[id^=fname]').type('fakeuser')
    cy.get('[id^=lname]').type('toto')
    cy.get('[id^=username]').type('fakeuser')
    cy.get('[id^=email]').type('fake@email.com')
    cy.get('[id^=pass]').type('1hstesh<23456789')
    cy.get('[id^=re_pass]').type('1hstesh<23456789')
    cy.get('form').contains('Register').click()
    cy.url().should('include', '/user/login')

    // User is able to connect with the previously created account
    cy.get('[id^=your_name]').type('fakeuser')
    cy.get('[id^=your_pass]').type('1hstesh<23456789')
    cy.get('form').contains('Log in').click()
    cy.url().should('include', '/home')
    cy.contains('FAVOURITE')
  })
})

*/

// Can fail, because of line 68
describe('Put item in favourite', () => {
  it('Connect to OC commerce and put in favourite', () => {

    // In this test you should load the home url and connect with the previous account
    cy.visit('http://127.0.0.1:8000/home')
    cy.contains('LOGIN').click()
    cy.url().should('include', '/user/login')
    cy.get('[id^=your_name]').type('fakeuser')
    cy.get('[id^=your_pass]').type('1hstesh<23456789')
    cy.get('label[for="agree-term"]').click()
    cy.get('[id^=signin]').click()
    cy.url().should('include', '/home')

    // You will go to favourite pages to make sure there is no favourite
    cy.contains('FAVOURITE').click()
    cy.url().should('include', '/favourite')

    // Then go back to home
    cy.contains("OC-commerce").click()
    cy.url().should('include', '/home')

    // You will add an item to favourite
    cy.get('[id^=favBtn]').click({multiple: true}) // test on all items - I don't know how to ensure that all are hearted or unhearted

    // You will go to favourite pages to confirm item is here
    cy.contains('FAVOURITE').click()
    cy.url().should('include', '/favourite')

    // You will then delete the item an check it has been successfully deleted
    cy.get('a[onclick^=markFavourite]').click({multiple: true}) // test on all items - I can only remove 1 with this command


  })
})