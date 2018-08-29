const dev_url = 'http://localhost:3000/';
const prod_url = 'https://stag.mikegfisher.com/';
given('A user navigates to unknown-stag', () => {
  cy.visit(prod_url);
  cy.get("form").first().submit();
})

then(`They are logged in with Google`, (title) => {
  return true;
})
