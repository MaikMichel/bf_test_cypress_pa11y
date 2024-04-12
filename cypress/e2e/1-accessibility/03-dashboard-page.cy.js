/// <reference types="cypress" />

describe('03-dashboard-page', () => {
  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('pass_word'))
  })

  it('should pass pa11y accessibility test', () => {
    // On Home-Page click the first card
    cy.get(':nth-child(1) > .t-Card > .t-Card-wrap > .t-Card-titleWrap').click();
    cy.url().should('contain', '/dashboard');

    cy.pa11y({includeWarnings:true,
      includeNotices: true,
      reporter: "html"
    });
  })
})
