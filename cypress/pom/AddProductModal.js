import Cart from './Cart';

class AddProductModal {
  viewCart() {
    cy.get('u').click();

    return new Cart();
  }
}

export default AddProductModal;