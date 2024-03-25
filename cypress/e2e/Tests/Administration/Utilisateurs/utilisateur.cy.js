///<reference types="cypress" />


import { UtilisateurPage } from "../../../Pages/Administration/Utilisateurs/utilisateurPage";

const utilisateur = new UtilisateurPage();

beforeEach(() => {
    cy.login()
})

it('Consulter la page utilisateurs', function() {
    
    utilisateur.ouvrirPageUtilisateur()
    //utilisateur.filtrerNom('Patrice')
    //utilisateur.filterNomFirst()
   // utilisateur.filterSousTraitant()
    utilisateur.filterGroupe()
    //utilisateur.assertionFiltrageNom('Patrice')

})

it.skip('ajouter un utilisateur', () => {
    utilisateur.ouvrirPageUtilisateur()
    utilisateur.ajoutUtilisateur('test utilisateur','testajout@gmail.com','Administrateur')
})


