describe('Navigation', () => {
    it('should navigate to the about page', () => {
      cy.visit('http://localhost:3000/projects')
      cy.get('h1').contains('Projects')
    })
  })