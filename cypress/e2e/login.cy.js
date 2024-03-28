describe("Books website testing", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.contains("Books list").should("be.visible");
	});

	it("Log in with valid data", () => {
		cy.login("test@test.com", "test");
		cy.contains("Добро пожаловать ").should("be.visible");
	});

	it("Log in with empty email", () => {
		cy.login(" ", "test");
		cy.get("#mail")
			.then(($el) => $el[0].checkValidity())
			.should("be.false");
	});

	it("Log in with empty password", () => {
		cy.login("test@test.com", "");
		cy.get("#pass")
			.then(($el) => $el[0].checkValidity())
			.should("be.false");
	});
})   