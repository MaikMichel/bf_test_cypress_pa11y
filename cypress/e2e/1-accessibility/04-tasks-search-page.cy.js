/// <reference types="cypress" />

describe('04-tasks-search-page', () => {
  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('pass_word'))
  })

  it('should pass pa11y accessibility test', () => {
    // On Home-Page click the second card
    cy.get(':nth-child(2) > .t-Card > .t-Card-wrap > .t-Card-titleWrap').click();
    cy.url().should('contain', '/tasks-search');

    cy.pa11y({includeWarnings:true,
      includeNotices: true,
      reporter: "html"
    });
  })
})
