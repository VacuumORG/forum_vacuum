import { LoginModel } from '~/models/auth'

context('Context Auth Test', () => {
  it('should not login user when body is empty', () => {
    cy.request({
      method: 'POST',
      url: '/api/v1/auth/login',
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })
  it('should receive method not allowed when thy other methods', () => {
    cy.request({
      method: 'GET',
      url: '/api/v1/auth/login',
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(405)
    })
  })
  it('should login user is success', () => {
    cy.request({
      method: 'GET',
      url: '/api/v1/auth/login',
      body: { email: '', password: '' } as LoginModel,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(405)
    })
  })
})
