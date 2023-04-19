describe("TEST", () => {
  it("should show 4 buttons", () => {
    cy.visit({ url: "http://localhost:3000/" });
    cy.contains("a");
  });
});
