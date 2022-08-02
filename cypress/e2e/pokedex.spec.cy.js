describe('Pokedex', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  it('Should redirect to pokedex', () => {
    cy.url().should('eq', 'http://localhost:4200/pokedex')
  });

  it('Should load pokemons', () => {
    cy.get('app-pokemon-card').should('have.length', 15);
  })

  it('Should search for pokemons', () => {
    cy.get('input#name').type('bulba');
    cy.get('app-pokemon-card').should('be.visible')
  })

  it('Should see pokemons details', () => {
    cy.get('input#name').type('Charizard');
    cy.get('app-pokemon-card').eq(0).click();
  })
})