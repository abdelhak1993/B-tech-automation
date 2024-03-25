

import { DiagnosticPage } from "../../../Pages/CR/Diagnostics/diagnosticPage";

const diagnostic = new DiagnosticPage();

beforeEach(()=> {
    cy.login()
})

it('consulter la page diagnostic', () => {
    diagnostic.ouvrirPageDossier()
})