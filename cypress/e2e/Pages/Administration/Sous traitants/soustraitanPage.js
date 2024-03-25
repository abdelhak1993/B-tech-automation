export class soustraitantPage {

    ouvrirPageSoustraitant() {
        cy.contains('Administration').click()
        cy.contains('Sous-traitants').click()
    }

    filtrerNomSociete() {
        cy.get('#input-name > .select__control > .select__value-container').click();
        cy.wait(1500);
        cy.get('.select__option').first().invoke('text').then((NomSociete) => {
            cy.get('.select__option').first().click();
            cy.get('.css-141tflq > .MuiButton-contained').click(); // cliquer sur rechercher 
            cy.wait(2000);
            cy.get('tbody tr ').each((row) => {
                if (row.length == 1) {
                    if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) 
                        {
                         cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
                        } 
                    else {
                        const name = row.find('td[title="Nom société"]').text();
                        expect(name).to.contain(NomSociete);
                    }        
                } 
                else {  
                    cy.get('tbody tr ').each((ligne) => { 
                        const name = ligne.find('td[title="Nom société"]').text();
                        expect(name).to.contain(NomSociete);
                    })            
                }
                });
        });
    };

    filtrerType() {
        cy.get('.input-action_type > .css-13cymwt-control > .css-hlgwow').click();
        cy.wait(1500);
        cy.get('.css-qr46ko > [id^="react-select"]').first().invoke('text').then((Type) => {
            cy.get('.css-qr46ko > [id^="react-select"]').first().click();
            cy.get('.css-141tflq > .MuiButton-contained').click(); // cliquer sur rechercher 
            cy.wait(2000);
            cy.get('tbody tr ').each((row) => {
                if (row.length == 1) {
                    if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) 
                    {
                        cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
                    } 
                    else {
                        const tp = row.find('td[title="Type"]').text();
                        expect(tp).to.contain(Type);
                    }        
                }
                else {  
                    cy.get('tbody tr ').each((ligne) => { 
                    const tp = ligne.find('td[title="Type"]').text();
                    expect(tp).to.contain(Type);
                        })            
                    }
                });
        });
    };

    Reinitialiser(){
        cy.get('.MuiButton-outlined').click()
    }

}
