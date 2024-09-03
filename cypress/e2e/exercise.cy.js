import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import Navbar from '../pom/Navbar';
import PreRegisterForm from '../pom/PreRegisterForm';
import RegisterForm from '../pom/RegisterForm';
import generateRandomNumber from '../common/generate-random-number';

/**
 * Used some of the most common mobile and desktop viewports using
 * a preset and a predefined resolution.
 * 
 * For more info, refer to https://docs.cypress.io/api/commands/viewport
 */
const viewports = ['iphone-x', [1920, 1080]];

const setViewport = (viewport) => {
  if (Array.isArray(viewport) && viewport.length == 2) {
    cy.viewport(viewport[0], viewport[1]);
  } else {
    cy.viewport(viewport);
  }
}

describe('Automation Exercise', () => {

  describe('Checkout', () => {
    const navbar = new Navbar();

    beforeEach(() => {
      cy.visit(Cypress.env('baseUrl'));
      // Start new Customer registration
      navbar.selectSignUpOrLogin();
      const preRegisterForm = new PreRegisterForm();
      preRegisterForm.fill(faker.person.fullName(), faker.internet.email());
      preRegisterForm.submit();

      // Fill out the required fields
      const registerForm = new RegisterForm();
      registerForm.fill({
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        country: 'United States',
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        phone: faker.phone.number()
      });
      registerForm.submit();
      registerForm.getAccountCreated().should('exist');
    });

    viewports.forEach(viewport => {
      it(`should be able to place an order as a new Customer on ${viewport}`, () => {
        setViewport(viewport);

        // Add product to Cart
        const productList = navbar.selectProducts();
        const productDetails = productList.viewProduct();
        productDetails.setQuantity(generateRandomNumber());
        const modal = productDetails.addToCart();

        // Place order
        const cart = modal.viewCart();
        const checkout = cart.proceedToCheckout();
        const paymentForm = checkout.placeOrder();
        paymentForm.fill({
          fullName: faker.person.fullName(),
          creditCardNumber: faker.finance.creditCardNumber(),
          creditCardCVV: faker.finance.creditCardCVV(),
          month: dayjs().month(),
          year: dayjs().year()
        });
        const paymentDone = paymentForm.submit();
        paymentDone.getOrderCreated().should('exist');
      });
    })

    afterEach(() => {
      navbar.selectLogout();
      cy.url().should('include', '/login');
    });
  });
});