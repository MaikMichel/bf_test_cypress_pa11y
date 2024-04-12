/// <reference types="cypress" />

describe('06-calendar-page', () => {
  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('pass_word'))
  })

  it('should pass pa11y accessibility test', () => {
    // On Home-Page click the fourth card
    cy.get(':nth-child(4) > .t-Card > .t-Card-wrap > .t-Card-titleWrap').click();
    cy.url().should('contain', '/calendar');

    cy.pa11y({includeWarnings:true,
      includeNotices: true,
      reporter: "html"
    });
  })
})
