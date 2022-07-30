/// <reference types="cypress" />

describe("Page", () => {
    it("should load page successfully", () => {
        cy.visit("/");
    });
})