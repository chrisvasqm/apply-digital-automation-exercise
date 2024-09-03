class RegisterForm {
  fill({ password, firstName, lastName, address, country, state, city, zipcode, phone }) {
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="first_name"]').type(firstName);
    cy.get('[data-qa="last_name"]').type(lastName);
    cy.get('[data-qa="address"]').type(address);
    cy.get('[data-qa="country"]').select(country);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipcode);
    cy.get('[data-qa="mobile_number"]').type(phone);
  }

  submit() {
    cy.get('[data-qa="create-account"]').click();
  }

  getAccountCreated() {
    return cy.contains('new account has been successfully created!');
  }
}

export default RegisterForm;