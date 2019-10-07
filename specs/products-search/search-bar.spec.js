describe("Onliner.by - Product search using search bar", () => {
	describe("Positive cases", () => {
		it("Should show results if product exists", () => {
			browser.get("/");
			element(by.name("query")).click();
		});
	});
});
