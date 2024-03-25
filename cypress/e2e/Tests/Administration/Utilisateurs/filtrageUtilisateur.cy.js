///<reference types="cypress" />


import { UtilisateurPage } from "../../../Pages/Administration/Utilisateurs/utilisateurPage";

const utilisateur = new UtilisateurPage();

beforeEach(() => {
    cy.login()
    utilisateur.ouvrirPageUtilisateur()
})



it('Filtrage par champ', function (){
    utilisateur.filterGroupe()
    utilisateur.Reinitialiser()
    utilisateur.filterNom()
    utilisateur.Reinitialiser()
    utilisateur.filterSousTraitant()
})

it('fultrage multiple', function() {
    utilisateur.filterGroupe()
    utilisateur.filterNom()
    utilisateur.filterSousTraitant() 
})


