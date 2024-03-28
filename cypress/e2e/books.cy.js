describe("Books website testing", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.contains("Books list").should("be.visible");
		cy.login("bropet@mail.ru", "123");
	});

	it("Should add books", () => {
		cy.addBook("Война и мир", "Лев Толстой");
		cy.contains("Война и мир").should("be.visible");
	});

	it("Should add book to favourite", () => {
		cy.addBook("1984", "Джордж Оруэлл");
		cy.contains("Add to favorite").click();
		cy.contains("Delete from favorite").should("be.visible");
	});

	it("Download checking", () => {
		cy.addBook("Улисс", "Джеймс Джойс");
		cy.contains("Улисс").click();
		cy.contains("Dowload book").should("be.visible");
	});
});
  