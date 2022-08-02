describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  it('Should redirect to pokedex', () => {
    cy.url().should('eq', 'http://localhost:4200/pokedex')
  })
})