describe('Baz tests', () => {
  it('must add click button', () => {
    cy.visit('/');
    cy.get('.counter').then(el => {
      const count = el.text();
      cy.get('input').click();
      cy.get('.counter').should('have.text', +count + 1)
    })
  });
});
