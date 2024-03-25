export class TablePage{

    ouvrirPageTable(){
        cy.contains('Administration').click()
        cy.contains('Tables techniques').click()
    }

}