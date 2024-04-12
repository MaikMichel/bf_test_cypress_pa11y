/// <reference types="cypress" />

describe('01-login-page', () => {

  it('should pass pa11y accessibility test', () => {
    // Go to baseURL
    cy.visit('/')

    cy.pa11y({includeWarnings:true,
      includeNotices: true,
      reporter: "html"
    });
  })
})
