/// <reference types="Cypress" />


//sample snippet to launch the application in google and search for 'selenium' and 'docker' keyword
describe('This is UI test with phase ', () => {
  it('launch the application', () => {
        cy.visit('http://www.google.com');
        cy.get('.gLFyf')
            .type('selenium')
            .type('{enter}', {force: true})
            .should('have.value', 'selenium');

        cy.get('.gLFyf')
            .clear()
            .type('docker')
            .type('{enter}', {force: true})
            .should('have.value', 'docker');    
        
        
  });

}); 


describe('Sample code to search a item and add to cart', () => {
  before('launch the application', () => {
    cy.visit('https://bol.com')

  });

  it('Search  the keyword toys and add to card', () => {
    cy.get('#searchfor').type('toys');
    cy.get('button[type=\'submit\']').click();
    cy.get('a[data-test=\'add-to-basket\']').first().click();

    cy.get('body').then(($bdy)=> {
      if($bdy.text().includes('To order')){
        cy.get('a[href=\'/nl/order/basket.html\']').first().click();
        }

    });
   /* cy.get('a[href=\'/nl/order/basket.html\']').then(($btn) =>{
          if($btn.first().parent.should('class')){
            $btn.first().click();
          }
    });*/
    cy.get('a[href=\'/nl/order/basket/gotoCheckout.html\']').should('have.attr','data-quantity', '1');

  });

  it('Search  the keyword pampers and add to card', () => {
    cy.get('#searchfor').type('pampers');
    cy.get('button[type=\'submit\']').first().click();
    cy.get('a[data-test=\'add-to-basket\']').first().click();

    
    cy.get('body').then(($bdy)=> {
      if($bdy.text().includes('To order')){
        cy.get('a[href=\'/nl/order/basket.html\']').first().click();
        }

    });
    cy.get('a[href=\'/nl/order/basket/gotoCheckout.html\']').should('have.attr','data-quantity', '1');

  });

 
});