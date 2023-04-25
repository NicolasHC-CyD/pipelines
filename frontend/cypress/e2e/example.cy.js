describe("TEST", () => {
  it("should show 4 buttons", () => {
    cy.visit({ url: "http://localhost:3000/" });
    cy.contains("button", "click").click();
    cy.contains("a", "Cypress test").click();
    cy.url().should("include", ":8000");
    // cy.contains("a", "django");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin1234");
    cy.get('input[type="submit"]').parent().click();
    cy.contains("Django administration");
  });
});
