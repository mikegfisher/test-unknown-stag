const dev_url = 'http://localhost:3000/';
const prod_url = 'https://stag.mikegfisher.com/';
given('A user opens unknown-stag', () => {
  cy.visit(dev_url);
})
then(`They see {string} in the title`, (title) => {
  cy.title().should('include', title);
})
