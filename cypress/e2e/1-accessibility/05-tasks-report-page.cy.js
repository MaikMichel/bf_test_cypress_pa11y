/// <reference types="cypress" />

describe('05-tasks-report-page', () => {
  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('pass_word'))
  })

  it('should pass pa11y accessibility test', () => {
    // On Home-Page click the third card
    cy.get(':nth-child(3) > .t-Card > .t-Card-wrap > .t-Card-titleWrap').click();
    cy.url().should('contain', '/tasks-report');

    cy.pa11y({includeWarnings:true,
      includeNotices: true,
      reporter: "html"
    });
  })

  it('should pass pa11y accessibility test - iframe', () => {
    // On Home-Page click the third card
    cy.get(':nth-child(3) > .t-Card > .t-Card-wrap > .t-Card-titleWrap').click();
    cy.url().should('contain', '/tasks-report');

    // call dialog
    cy.get(':nth-child(2) > .a-IRR-linkCol > a > .fa').click();

    // load frame
    cy.frameLoaded('#apex_dialog_1 > iframe');

    // cy.pa11y({includeWarnings:true,
    //   includeNotices: true,
    //   reporter: "html"

    // });

    // not working as expected
    cy.iframe('#apex_dialog_1 > iframe').within((frame) => {
      cy.pa11y({includeWarnings:true,
        includeNotices: true,
        reporter: "html"
      });
    });
  })
})

