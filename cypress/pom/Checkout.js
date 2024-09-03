import PaymentForm from './PaymentForm';

class Checkout {
  placeOrder() {
    cy.get(':nth-child(7) > .btn').click();

    return new PaymentForm();
  }
}

export default Checkout;