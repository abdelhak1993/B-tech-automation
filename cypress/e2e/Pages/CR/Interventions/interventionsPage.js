export class InterventionPage {

    ouvrirPageIntervention() {
        cy.contains('CR').click()
        cy.contains('Interventions').click()
        cy.get('.MuiBreadcrumbs-root').should('be.visible').and('have.text',"Accueil›Concentrateurs›Interventions associées aux dossiers")
    }

    filtrageNumeroDossier(){
        cy.get('#input-cr_case__number').click()
        cy.wait(1000)
        cy.get('.css-qr46ko > [id^="react-select"]').first().invoke('text').then((numeroDossier) => {
        
            cy.get('.css-qr46ko > [id^="react-select"]').first().click({force: true} )
            cy.get('.css-141tflq > .MuiButton-contained').click().wait(1500)
            cy.get('tbody').find('tr').each((ligne) => {    
                const numDoss = ligne.find('td[title="Dossier Rattaché"]').text()
                expect(numDoss).to.equal(numeroDossier)
            })
        })
    }

    filtrageSousTraitant() {
        cy.get('#input-subcontractor > .select__control').click();
        cy.wait(1000);
        cy.get('.css-qr46ko > [id^="react-select"]').eq(1).invoke('text').then((sousTraitant) => {
          cy.get('.css-qr46ko > [id^="react-select"]').eq(1).click({force: true});
          cy.get('.css-141tflq > .MuiButton-contained').click().wait(1500);
          cy.get('tbody tr').then((row) => {
            if (row.length == 1) {
                 
                if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) {
                     cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
                     } 
                 else {
                    const traitant = row.find('td[title="Sous Traitant"]').text();
                    expect(traitant).to.equal(sousTraitant);
                    }        
            } 
            else {  
            cy.get('tbody').find('tr').each((ligne) => { 
            const traitant = ligne.find('td[title="Sous Traitant"]').text();
            expect(traitant).to.equal(sousTraitant);
                })            
            }
        });
      
    })
}
}