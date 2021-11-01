describe('My First Test', function() 
 {
    it('verify title of the page', () =>
    {
        cy.visit('https://www.yoello.com/')
        cy.title().should('eq','Yoello | An Award Winning Mobile Order and Pay Solution')
    })
it('sign up', () =>
{
        cy.get('.header-login > .btn-yellow').click()
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(5000)

        //cy.get("div[data-component-name='errors-terms']").should("eq", "Please confirm you have read and accept the Terms and Conditions")

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Banafsheh')
        
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("Jalali")
        cy.get('.selected-flag').click()
        cy.get("li[data-flag-key=\"flag_no_63\"]").click()
        
        cy.get('.jss27').type("769939394")
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('banafsheh.jalalli')
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("{backspace}{backspace}{backspace}{backspace}")
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('alii@gmail.com')
        cy.get('.jss34').check()
        
    

    })
 })