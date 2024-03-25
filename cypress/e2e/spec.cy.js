describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://b-tech-ppd.birdz.com/')
    cy.get('#email').type('abdelhak.hamadi.ext@veolia.com')
    cy.get('#password').type('Birdz@2023')
    cy.get('.MuiButton-contained').click()
    
  })
})