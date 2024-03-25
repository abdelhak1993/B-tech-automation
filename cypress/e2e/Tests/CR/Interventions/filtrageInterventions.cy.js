///<reference types="cypress" />


import { InterventionPage } from "../../../Pages/CR/Interventions/interventionsPage"
  

  const interventionPage = new InterventionPage()

  beforeEach(() => {
    cy.login()
    interventionPage.ouvrirPageIntervention()
})


it('filtrage par numero dossier ', function() {
  interventionPage.filtrageNumeroDossier()
})


it.only('filtrage par sousTraitant ', function() {
  interventionPage.filtrageSousTraitant()
})
