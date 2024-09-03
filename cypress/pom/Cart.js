import Checkout from './Checkout';

class Cart {
  proceedToCheckout() {
    cy.get('.col-sm-6 > .btn').click();

    return new Checkout();
  }
}

export default Cart;