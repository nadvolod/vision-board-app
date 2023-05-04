/// <reference types="cypress" />

context('Vision Board', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display all goals', () => {
    cy.get('[data-testid^="goal-image-"]').should('have.length', 6);
    cy.get('[data-testid^="goal-description-"]').should('have.length', 6);
    cy.get('[data-testid^="goal-date-"]').should('have.length', 6);
  });

  it('should open a modal when clicking on a goal image', () => {
    cy.get('[data-testid="goal-image-0"]').click();
    cy.get('.MuiModal-root').should('be.visible');
  });

  it('should close the modal when clicking on the close button', () => {
    cy.get('[data-testid="goal-image-0"]').click();
    cy.get('.MuiIconButton-root > .MuiSvgIcon-root').click();
    cy.get('.MuiModal-root').should('not.exist');
  });

  it('should navigate through the goals in the modal', () => {
    cy.get('[data-testid="goal-image-0"]').click();
    cy.get('.MuiModal-root').should('be.visible');

    // Check next button
    cy.get('.MuiIconButton-label > .MuiSvgIcon-root').eq(1).click();
    cy.get('.MuiModal-root img').should('have.attr', 'alt', 'Goal 2');

    // Check back button
    cy.get('.MuiIconButton-label > .MuiSvgIcon-root').eq(0).click();
    cy.get('.MuiModal-root img').should('have.attr', 'alt', 'Goal 1');
  });
});
