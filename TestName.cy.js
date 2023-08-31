describe('template spec', () => {
  it('Login As Sam', () => {
    cy.visit('https://admin.saleshub.io')
    cy.contains('Company Name')
    cy.wait(1000)
    
    //Enter company name of Sam

    const uuid = () => Cypress._.random(0, 1e15)
    const id = uuid()
    const testname = `Samname${id}`
    //cy.get('input').type(testname);
    cy.get('div.box:nth-child(2) > div:nth-child(1) > input:nth-child(2)').type(testname)
    cy.wait(10000)
  
  })
}) 