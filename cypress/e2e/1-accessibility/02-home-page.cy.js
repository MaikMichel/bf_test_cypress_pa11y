/// <reference types="cypress" />

describe('02-home-page', () => {
  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('pass_word'))
  })

  it('should pass pa11y accessibility test', () => {
    cy.pa11y({includeWarnings:true,
              includeNotices: true,
              reporter: "html"
            });
  })
})
