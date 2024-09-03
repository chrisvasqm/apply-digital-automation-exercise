import AddProductModal from './AddProductModal';

class ProductDetails {
  setQuantity(amount) {
    cy.get('#quantity').clear().type(amount);
  }

  addToCart() {
    cy.get(':nth-child(5) > .btn').click();

    return new AddProductModal();
  }
}

export default ProductDetails;