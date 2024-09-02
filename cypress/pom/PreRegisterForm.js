class PreRegisterForm {
  fill(name, email) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
  }

  submit() {
    cy.get('[data-qa="signup-button"]').click();
  }
}

export default PreRegisterForm;