/// <reference types="Cypress" />

describe("CheckBox", () => {
it("First checkBox test", () => {
  cy.visit("https://russmaxdesign.github.io/accessible-forms/fieldset-checkbox-group-role-group.html");
  cy.wait(2000);
  cy.get('#dog').check().should('be.checked').and('have.id', 'dog'); // checked single checkbox
  cy.get('#dog').uncheck().should('not.be.checked') // unchecked
  cy.get('input[type="checkbox"]').check();

})
});
