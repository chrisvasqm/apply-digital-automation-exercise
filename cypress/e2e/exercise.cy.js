import { faker } from '@faker-js/faker';
import generateRandomNumber from '../../common/generate-random-number';
import dayjs from 'dayjs';

describe('Automation Exercise', () => {
  describe('Checkout', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('baseUrl'));
      // Register a new Customer
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
      cy.get('[data-qa="signup-name"]').type(faker.person.fullName());
      cy.get('[data-qa="signup-email"]').type(faker.internet.email());
      cy.get('[data-qa="signup-button"]').click();

      // Fill out the required fields
      cy.get('[data-qa="password"]').type(faker.internet.password());
      cy.get('[data-qa="first_name"]').type(faker.person.firstName());
      cy.get('[data-qa="last_name"]').type(faker.person.lastName());
      cy.get('[data-qa="address"]').type(faker.location.streetAddress());
      cy.get('[data-qa="country"]').select('United States');
      cy.get('[data-qa="state"]').type(faker.location.state());
      cy.get('[data-qa="city"]').type(faker.location.city());
      cy.get('[data-qa="zipcode"]').type(faker.location.zipCode());
      cy.get('[data-qa="mobile_number"]').type(faker.phone.number());
      cy.get('[data-qa="create-account"]').click();
      cy.get('b').should('exist');
    });

    it('should be able to place an order as a new Customer', () => {
      cy.get('.nav > :nth-child(2) > a').click();
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

    afterEach(() => {
      cy.get('.nav > :nth-child(4) > a').click();
      cy.url().should('include', '/login');
    });
  });
});