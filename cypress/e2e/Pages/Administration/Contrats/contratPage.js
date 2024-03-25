export class ContratPage {

    ouvrirPageContrat(){
        cy.contains('Administration').click()
        cy.contains('Contrats').click()
    }
}