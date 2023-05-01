describe('Vision Board App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the vision board grid with initial goals', () => {
    cy.get('[data-testid="vision-board-grid"]').children().should('have.length', 9);
  });

  it('opens an image in full-screen view on click', () => {
    cy.get('[data-testid="vision-board-item-0"]').click();
    cy.get('.ReactModal__Content').should('be.visible');
  });

  it('closes the full-screen view when the close button is clicked', () => {
    cy.get('[data-testid="vision-board-item-0"]').click();
    cy.get('.ReactModal__Content').should('be.visible');
    cy.get('[data-testid="modal-close-button"]').click();
    cy.get('.ReactModal__Content').should('not.be.visible');
  });

  it('navigates through images in full-screen view', () => {
    cy.get('[data-testid="vision-board-item-0"]').click();
    cy.get('.ReactModal__Content').should('be.visible');
    cy.get('.ReactModal__Content button:contains("Next")').click();
    cy.get('.ReactModal__Content button:contains("Previous")').click();
  });
});
