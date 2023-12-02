describe('Pruebas heroku app', () => {

  it('login con usuario y contraseña validos', () => {

    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area")

  })

  it('login con usuario invalido y contraseña valida', () => {
    //RELLENAR ESTE TEST


  })

  it('login con usuario valido y contraseña invalida', () => {
    //RELLENAR ESTE TEST


  })

  it('login con usuario invalido y contraseña inválida', () => {
    //RELLENAR ESTE TEST


  })

})