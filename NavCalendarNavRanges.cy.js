describe('template spec', () => {
  it('Login As Sam Nav to Calendar', () => {
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
  
   //navagate to Calendar  
   cy.get('.menu-nav > li:nth-child(7) > a:nth-child(1) > span:nth-child(2)').click()
   cy.url().should('include', '/lead-calendar')
   
   cy.wait(5000)
   cy.get('.fc-timeGridWeek-button').click()
   //cy.get('#lead-mode').click
   cy.wait(5000)
   cy.get('.fc-timeGridDay-button').click()
   cy.wait(5000)
   cy.get('.fc-listWeek-button').click()
   cy.wait(5000)
   cy.get('.fc-dayGridMonth-button').click()
   cy.wait(5000)
   cy.get('.fc-timeGridDay-button').click()
   cy.wait(5000)
   cy.get('.fc-next-button > .fc-icon').click()
   cy.wait(5000)
   cy.get('.fc-prev-button').click()
  })
})