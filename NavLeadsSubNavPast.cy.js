describe('template spec', () => {
  it('Login As Sam Nav to Leads', () => {
    cy.visit('https://admin.saleshub.io')
    cy.contains('Company Name')
    //cy.wait(1000)
    
    //Enter company name of Sam
    cy.get('div.box:nth-child(2) > div:nth-child(1) > input:nth-child(2)').type('Sam')
    //cy.wait(1000)
    cy.contains('Next')
    cy.get('button.btn:nth-child(2)').should('include.text','Next')
    cy.get('button.btn:nth-child(2)').click()
  
 
    //Login as sam@canvass.com
    cy.get('div.box:nth-child(1) > div:nth-child(2) > input:nth-child(2)').type('Sam@canvass.com')
    cy.get('div.box:nth-child(1) > div:nth-child(3) > input:nth-child(2)').type('test')
    //cy.wait(1000)
    cy.get('div.box:nth-child(1) > button:nth-child(4)').should('include.text','Login')
    cy.get('div.box:nth-child(1) > button:nth-child(4)').click() 
    //cy.wait(1000)
  
   //navagate to Leads
   cy.get('.menu-nav > li:nth-child(8) > a:nth-child(1) > span:nth-child(2)').click()
   cy.url().should('include', '/leads')


   cy.wait(1000)
   cy.get('#lead-mode').select("Aug Team1")

   cy.wait(2000)
   cy.get('#lead-mode').select("Fort Bridger")
   
   cy.wait(5000)
   cy.get('#status-filter').select("Past Appointment")
  })
})