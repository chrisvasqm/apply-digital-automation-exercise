import PaymentDone from './PaymentDone';

class PaymentForm {
  fill({ fullName, creditCardNumber, creditCardCVV, month, year }) {
    cy.get('[data-qa="name-on-card"]').type(fullName);
    cy.get('[data-qa="card-number"]').type(creditCardNumber);
    cy.get('[data-qa="cvc"]').type(creditCardCVV);
    cy.get('[data-qa="expiry-month"]').type(month);
    cy.get('[data-qa="expiry-year"]').type(year);
  }

  submit() {
    cy.get('[data-qa="pay-button"]').click();

    return new PaymentDone();
  }
}

export default PaymentForm;