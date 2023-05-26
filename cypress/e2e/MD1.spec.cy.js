describe('Selectable Grid Test', () => {
  it('Validating selection in grid', () => {
    cy.visit('https://demoqa.com/selectable');

    cy.contains('Grid').click();

    cy.contains('Two').click();
    cy.contains('Four').click();
    cy.contains('Six').click();
    cy.contains('Eight').click();

    cy.get('.ui-selected').should('have.length', 4).and('contain', 'Two', 'Four', 'Six', 'Eight');

  
    cy.get('.ui-selected').should('not.contain', 'One', 'Three', 'Five', 'Seven', 'Nine');
  });
});
