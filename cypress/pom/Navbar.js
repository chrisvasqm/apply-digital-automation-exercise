import ProductList from './ProductList';

class Navbar {
  selectSignUpOrLogin() {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  }

  selectProducts() {
    cy.get('.nav > :nth-child(2) > a').click();

    return new ProductList();
  }

  selectLogout() {
    cy.get('.nav > :nth-child(4) > a').click();
  }
}

export default Navbar;