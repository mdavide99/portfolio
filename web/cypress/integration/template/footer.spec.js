describe('Footer', () => {
    it('footer is completed', () => {
        cy.visit('http://localhost:3000/')
        cy.get('footer').contains('©')
        cy.get('a[href*="linkedin"]').click({ multiple: true }).click({ multiple: true })
        cy.url().should('linkedin', '/linkedin')
    })
})