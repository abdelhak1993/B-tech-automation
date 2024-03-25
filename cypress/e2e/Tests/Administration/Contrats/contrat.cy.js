///<reference types="cypress" />


import { ContratPage } from "../../../Pages/Administration/Contrats/contratPage";

const contrat = new ContratPage();

beforeEach(()=> {
    cy.login()
})

it('Consulter la page des contrats ', () => {
    contrat.ouvrirPageContrat()
})