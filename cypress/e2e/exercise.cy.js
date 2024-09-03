import { faker } from '@faker-js/faker';
import generateRandomNumber from '../../common/generate-random-number';
import dayjs from 'dayjs';
import Navbar from '../pom/Navbar';
import PreRegisterForm from '../pom/PreRegisterForm';
import RegisterForm from '../pom/RegisterForm';

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

        navbar.selectProducts();
        cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('#quantity').clear().type(generateRandomNumber());
        cy.get(':nth-child(5) > .btn').click();
        cy.get('u').click();
        cy.get('.col-sm-6 > .btn').click();
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName());
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber());
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV());
        cy.get('[data-qa="expiry-month"]').type(dayjs().month());
        cy.get('[data-qa="expiry-year"]').type(dayjs().year());
        cy.get('[data-qa="pay-button"]').click();
        cy.get('[data-qa="order-placed"] > b').should('exist');
      });
    })

    afterEach(() => {
      navbar.selectLogout();
      cy.url().should('include', '/login');
    });
  });
});