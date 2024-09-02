describe('Automation Exercise', () => {
  describe('Checkout', () => {
    it('shoudl be able to place an order as a new Customer', () => {
      cy.visit(Cypress.env('baseUrl'));
    });
  });
});