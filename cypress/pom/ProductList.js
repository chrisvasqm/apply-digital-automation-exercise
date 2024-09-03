import ProductDetails from './ProductDetails';

class ProductList {
  viewProduct() {
    cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();

    return new ProductDetails();
  }
}

export default ProductList;