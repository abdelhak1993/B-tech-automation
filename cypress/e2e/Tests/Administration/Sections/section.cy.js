///<reference types="cypress" />


import { SectionPage } from "../../../Pages/Administration/Sections/sectionPage";

const section = new SectionPage()
beforeEach(() => {
    cy.login()
    section.ouvrirPageSection()
})

it('Consulter la page sections', function() {
    
    section.filtrerDescription()
    section.Reinitialiser()
    section.filtrerCodeSection()
    section.Reinitialiser()
})

it.skip('Ajouter une section avec champs vides', function() {
    section.ajoutSectionVide()
    section.assertionAjoutVide()
} )