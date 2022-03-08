describe('Footer', () => {
    it('header is completed', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#head')
        cy.get('#logo')
        cy.get('a[href="/"]').click({ multiple: true })
        cy.url().should('include','/')
        cy.get('a[href*="projects"]').click({ multiple: true })
        cy.url().should('include','/projects')
        cy.get('a[href*="contact"]').click({ multiple: true })
        cy.url().should('include','/contact')
    })
})