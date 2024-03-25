///<reference types="cypress" />


import { DossierPage } from "../../../Pages/CR/Dossiers/dossierPage"
  

  const dossierPage = new DossierPage()

  beforeEach(() => {
   cy.login()
})

it('Consulter la page dossiers', function() {
    
    dossierPage.ouvrirPageDossier()
})

it('filtrage par numero dossier', function () {
  dossierPage.ouvrirPageDossier()
  dossierPage.filtrageNumDossier()
})

it('filtrage par Code Contrat', function () {
  dossierPage.ouvrirPageDossier()
  dossierPage.filtrageCodeContrat()
})

it('filtrage par statut ', function () {
  dossierPage.ouvrirPageDossier()
  dossierPage.filtrageStatut()
})

it('filtrage par commune ', function () {
  dossierPage.ouvrirPageDossier()
  dossierPage.filtrageCommune()
})

it.only('filtrage par type ', function () {
  dossierPage.ouvrirPageDossier()
  dossierPage.filtrageType()
})

