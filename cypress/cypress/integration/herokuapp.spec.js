/// <reference types="Cypress" />

describe('Scenario to validate in herokuap', () => {

    before('Launch the application', () => {
        const url = Cypress.env('application_url');
        cy.log(url);
        cy.visit(url);
    });
    it('filter the computer name by Dell', () => {
        cy.get("#searchbox").type("Dell");
        cy.get("#searchsubmit").click();
    });

    it('check the list of Dell computers', () => {
        cy.get('td > a[href*=\'computers/\']')
            .should('have.length.greaterThan','0')
            .each(($ele,index, $listElements) =>{
                expect($listElements.get(index)).to.contain('Dell')
            });
    });
    it('filter the computer name by ASCI', () => {
        //clear the input field using the keyboard literals
        cy.get("#searchbox").type('{selectall}{backspace}ASCI')
        cy.get("#searchsubmit").click();
    });

    it('check the list of Dell computers', () => {
        cy.get('td > a[href*=\'computers/\']')
            .should('have.length.greaterThan','0')
            .each(($ele,index, $listElements) =>{
                expect($listElements.get(index)).to.contain('ASCI')
            });
    });
});