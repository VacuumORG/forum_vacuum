
describe('Testing API tags with alias', () => {

  beforeEach(() => {
    cy.request('GET', '/api/v1/tags').as('tags')
  })

  it('Request with GET method the path: /api/v1/tags', () => {
    cy.get('@tags')
    .its('headers')
    .its('content-type')
    .should('include', 'application/json; charset=utf-8')
  })

  it('Request with GET method the path /api/v1/tags/1', () => {
    cy.request('GET', '/api/v1/tags/1', {})
    .its('headers')
    .its('content-type')
    .should('include', 'application/json; charset=utf-8')
  })
})
