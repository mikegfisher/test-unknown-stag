const url = 'https://unknown-stag.firebaseapp.com'

given('I open unknown-stag', () => {
  cy.visit(url)
})
then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
