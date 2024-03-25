
export class UtilisateurPage{

 ouvrirPageUtilisateur() {
    cy.contains('Administration').click()
    cy.contains('Utilisateurs').click()
 }

 Reinitialiser(){
    cy.get('.MuiButton-outlined').click()
}

 ajoutUtilisateur(nom,mail,groupe){
   cy.get('a > .MuiButtonBase-root').click()
   cy.get('#\:r0\:').clear().type(nom)
   cy.get('#\:r1\:').clear().type(mail)
   cy.get('#input-groups').click()
   cy.wait(3000)
   cy.contains(groupe).click()
   cy.get('.MuiButton-contained').click()

 }

 filterNom() {
  let nom = '';
  cy.get('#input-id > .select__control > .select__value-container > .select__input-container').click();
  cy.wait(2000);
  cy.get('.select__option').last().invoke('text').then((nom) => {
      cy.get('.select__option').last().click();
      cy.get('.css-141tflq > .MuiButton-contained').click(); // cliquer sur rechercher 
      cy.wait(2000);
      cy.get('tbody tr').then((row) => {
        if (row.length == 1) {   
             if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) {
                cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
             } 
            else {
                const name = row.find('td[title="Nom"]').text();
                expect(name).to.equal(nom);
            }        
         } 
        else {  
             cy.get('tbody').find('tr').each((ligne) => { 
             const name = ligne.find('td[title="Nom"]').text();
             expect(name).to.equal(nom);
            })            
        }
    });
    })
}

 filterSousTraitant() {
  let nom = '';
  cy.get('#input-subcontractor > .select__control > .select__value-container').click();
  cy.wait(2500);
  cy.get('.select__option').last().invoke('text').then((subcontractor) => {
      cy.get('.select__option').last().click();
      cy.get('.css-141tflq > .MuiButton-contained').click(); // cliquer sur rechercher 
      cy.wait(2500);
      cy.get('tbody tr').then((row) => {
                if (row.length == 1) {   
                    if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) {
                         cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
                         } 
                     else {
                        const traitant = row.find('td[title="Sous Traitants"]').text();
                        expect(traitant).to.contain(subcontractor);
                        }        
                } 
                else {  
                cy.get('tbody tr').each((ligne) => { 
                const traitant = ligne.find('td[title="Sous Traitants"]').text();
                expect(traitant).to.contain(subcontractor);
                    })            
                }
            });
      });
  };


filterGroupe() {
  let nom = '';
  cy.get('#input-groups > .select__control > .select__value-container').click();
  cy.wait(2500);
  cy.get('.select__option').last().invoke('text').then((groupe) => {
      nom = groupe.trim();
      cy.log('Nom extrait :', nom);
      cy.get('.select__option').last().click();
      cy.get('.css-141tflq > .MuiButton-contained').click(); // cliquer sur rechercher 
      cy.wait(2500);
      cy.get('tbody tr').then((row) => {
                if (row.length == 1) {   
                    if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) {
                         cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
                         } 
                     else {
                        const grp = row.find('td[title="Groupes"]').text();
                        expect(grp).to.contain(groupe);
                        }        
                } 
                else {  
                cy.get('tbody').find('tr').each((ligne) => { 
                const grp = ligne.find('td[title="Groupes"]').text();
                expect(grp).to.contain(groupe);
                    })            
                }
            });
      });
    }
}  



