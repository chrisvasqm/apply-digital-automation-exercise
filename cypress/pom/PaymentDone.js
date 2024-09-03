class PaymentDone {
  getOrderCreated() {
    return cy.get('[data-qa="order-placed"] > b');
  }
}

export default PaymentDone;