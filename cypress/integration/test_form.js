describe('Test our inputs and submit our form', function(){
    beforeEach(function(){
        cy.visit('http://localhost:3000/pizza');
    });

    it('addtext to inputs and submit form',function(){
        cy.get('input[name="name"]')
        .type('ThisIsAName').should('have.value','ThisIsAName');

        cy.get('input[name="toppings"]')
        .check().should('be.checked');

        cy.get('#size')
        .select('large')

        cy.get('textarea')
        .type('WORDS WORDS WORDS').should('have.value', 'WORDS WORDS WORDS');

        cy.get('button')
        .click().should('be.clicked');




        })
    })