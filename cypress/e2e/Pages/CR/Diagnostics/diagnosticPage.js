export class DiagnosticPage {

    ouvrirPageDossier() {
        cy.contains('CR').click()
        cy.contains('Diagnostics').click()
    }
}