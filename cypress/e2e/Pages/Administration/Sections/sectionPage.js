export class SectionPage {

    ouvrirPageSection() {
        cy.contains('Administration').click();
        cy.contains('Sections').click();
    }

    filtrerDescription() {
        let nom = '';
        cy.get('#input-description > .select__control > .select__value-container').click();
        cy.wait(1500);
        cy.get('.select__option').first().invoke('text').then((description) => {
            cy.get('.select__option').first().click();
            cy.get('.css-141tflq > .MuiButton-contained').click(); // cliquer sur rechercher 
            cy.wait(2000);
            cy.get('tbody tr ').each((row) => {
                if (row.length == 1) {
                    if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) {
                         cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
                         } 
                     else {
                        const descr = row.find('td[title="Description"]').text();
                        expect(descr).to.equal(description);
                        }        
                } 
                else {  
                cy.get('tbody tr ').each((ligne) => { 
                const descr = ligne.find('td[title="Description"]').text();
                expect(descr).to.equal(description);
                    })            
                }
            });
        })
    }

    Reinitialiser(){
            cy.get('.MuiButton-outlined').click()
    }



    filtrerCodeSection() {
        let nom = '';
        cy.get('#input-code > .select__control > .select__value-container').click();
        cy.wait(1500);
        cy.get('.select__option').first().invoke('text').then((CodeSection) => {
            cy.get('.select__option').first().click();
            cy.get('.css-141tflq > .MuiButton-contained').click(); // cliquer sur rechercher 
            cy.wait(2000);
            cy.get('tbody tr ').each((row) => {
                if (row.length == 1) {
                    if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) {
                        cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
                        } 
                    else {
                            const code = row.find('td[title="Code section"]').text();
                            expect(code).to.contain(CodeSection);
                         }        
                } 
                else {  
                        cy.get('tbody tr ').each((ligne) => { 
                        const code = ligne.find('td[title="Code section"]').text();
                        expect(code).to.contain(CodeSection);
                            })            
                }
            })

        });
    };
    
    ajoutSectionVide(){
        cy.get('a > .MuiButtonBase-root').click()
        cy.get('.MuiButton-contained').click()
        cy.wait(500)
    }

    assertionAjoutVide(){
        //cy.get('.MuiSnackbar-root > .MuiPaper-root > .MuiAlert-message')
        cy.get('.MuiAlert-message')
        .should('be.visible')
        .and('have.text',"Une erreur est survenue, merci de corriger les champs suivants:Champ code : Ce champ ne peut être vide.")
    }

    ajoutSection(description,codeSection){

        cy.get('[name="code"]').clear().type(codeSection)
        cy.get('[name="description"]').clear().type(description)
        cy.get('.MuiButton-contained').click()
    }

    assertionAjoutSuccess(){
        
    }
    

}