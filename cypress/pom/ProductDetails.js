import generateRandomNumber from '../../common/generate-random-number';
import AddProductModal from './AddProductModal';

class ProductDetails {
  setQuantity() {
    cy.get('#quantity').clear().type(generateRandomNumber());
  }

  addToCart() {
    cy.get(':nth-child(5) > .btn').click();

    return new AddProductModal();
  }
}

export default ProductDetails;