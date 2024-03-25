///<reference types="cypress" />

import { soustraitantPage } from "../../../Pages/Administration/Sous traitants/soustraitanPage";

const soustraitant = new soustraitantPage()

beforeEach(()=> {
    cy.login()
    soustraitant.ouvrirPageSoustraitant()
})



it('filtrage de la page sous traitant', function() {

    soustraitant.filtrerNomSociete()
    soustraitant.Reinitialiser()
    soustraitant.filtrerType()
})

it('filtrage multiple', function() {
    soustraitant.filtrerNomSociete()
    soustraitant.filtrerType()
})
