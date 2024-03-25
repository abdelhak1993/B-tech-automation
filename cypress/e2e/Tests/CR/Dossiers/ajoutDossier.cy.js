//<reference types="cypress" />


import { DossierPage } from "../../../Pages/CR/Dossiers/dossierPage"
  

  const dossierPage = new DossierPage()

  beforeEach(() => {
   cy.login()
})

it('Ajouter un dossier vide', function() {
    dossierPage.ouvrirPageDossier()
    dossierPage.ajouterDossier("5322")
    dossierPage.enregistrerAjout()
    dossierPage.assertionAjoutDossierVide()
    
  
  })

  it.skip('ajout dossier valide', function () {
    dossierPage.ouvrirPageDossier()
    dossierPage.ajouterDossier("5322")
    dossierPage.choixType()
    dossierPage.enregistrerAjout()
    dossierPage.assertionAjoutDossier()
  })