describe('template spec', () => {
  it('Login As Sam', () => {
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
  
    //navagate to User Management > Users    
    cy.get('li.menu-item-submenu:nth-child(3) > a:nth-child(1) > span:nth-child(2)').click()
    //cy.wait(1000)
    cy.get('li.menu-item-submenu:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)').click()
    cy.url().should('include', '/employees')

    //Add new user
    cy.get('a.btn-primary').click()
    cy.get('.modal-dialog').should('be.visible')
    cy.get('#modal-iframe').should('be.visible')
    cy.wait(1000)
    cy.visit('https://admin.saleshub.io/employees/add')
       //let's test iframe
    cy.get('#first_name').type('Sam')
    //cy.get('#iframe-window').should('be.visible')
    cy.get('#last_name').type('Carmichael')
    cy.get('#password').type('test')
    cy.get('#email').type('Sam@sam.com') 
    
    //cy.visit('https://admin.saleshub.io/employees')
  
    
    
    //cy.visit('https://admin.saleshub.io/employees/add')
    //cy.get('modal-iframe').click()
    //cy.get('document.querySelector("#first_name")').should('be.visible')
    
    
    //cy.get('#modal-iframe').click
    //cy.get('.modal-footer').should('be.visble')

    //cy.get('#first_name', { timeout: 10000 }).eq(0)
    //.    type('userName', { force: true })

    //cy.get('#first_name').click() 

    
  })
})