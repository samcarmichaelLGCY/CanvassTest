describe('template spec', () => {
  it('Login As Sam', () => {
    cy.visit('https://admin.saleshub.io')
    cy.contains('Company Name')
    cy.wait(1000)
    
    //Enter company name of Sam
    cy.get('div.box:nth-child(2) > div:nth-child(1) > input:nth-child(2)').type('Sam')
    cy.wait(1000)
    cy.contains('Next')
    cy.get('button.btn:nth-child(2)').should('include.text','Next')
    cy.get('button.btn:nth-child(2)').click()
  
 
    //Login as sam@canvass.com
    cy.get('div.box:nth-child(1) > div:nth-child(2) > input:nth-child(2)').type('bc@canvass.com')
    cy.get('div.box:nth-child(1) > div:nth-child(3) > input:nth-child(2)').type('test')
    cy.wait(1000)
    cy.get('div.box:nth-child(1) > button:nth-child(4)').should('include.text','Login')
    cy.get('div.box:nth-child(1) > button:nth-child(4)').click() 
    cy.wait(1000)
  })
}) 