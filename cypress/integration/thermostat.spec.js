

describe('Thermostat home page', () =>{
    it('shows a welcome message!', () =>{
        cy.visit('/')
        cy.get('#welcome').should('contain','Thermostat')

    })
    it('shows temp 21 after temp up', () =>{
        cy.visit('/')
        cy.get('#buttonUp').click()
        cy.get('#message').should('contain','21')
    })
    it('show temp 19 after temp down', () =>{
        cy.visit('/')
        cy.get('#buttonDown').click()
        cy.get('#message').should('contain','19')
    })
    it('show temp past 25', () => {
        cy.visit('/')
        cy.get('#buttonOff').click()
        cy.get('#messageOff').should('contain','power saving mode Off')

    })
    it("show temp not past 25 after psmOn", () =>{
        cy.visit('/')
        cy.get('#buttonOn').click()
        cy.get('#messageOff').should('contain','power saving mode On')
    })
    it("show energy usage as medium usage if between 18 and 25", () =>{
        cy.visit('/')
        cy.get('#buttonEnergy').click()
        cy.get('#energyUsage').should('contain','medium usage')
    })

    it("resets temperature to 20", function(){
        cy.visit('/')
        cy.get('#buttonReset').click()
        cy.get('#message').should('contain','20')
    })
})