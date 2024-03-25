export class DossierPage {

    ouvrirPageDossier() {
        cy.contains('CR').click()
        cy.contains('Dossiers').click()
        cy.get('.MuiBreadcrumbs-root').should('be.visible')
        .and('have.text','Accueil›Concentrateurs›Dossiers')
    }

    ajouterDossier(adresseRadio){
        cy.get(':nth-child(2) > a > .MuiButtonBase-root').click();
        cy.get('#search_by_cr').type(adresseRadio)
        cy.get('.MuiAutocomplete-listbox > li').last().click()
        cy.wait(1000)
        cy.get('#create_crCase').click()
    }
    choixType(){
        cy.get('input[name="type"]').click()
        //cy.get('.MuiAutocomplete-listbox > li').last().click()
    }
    enregistrerAjout(){
        cy.get('#submitCrCase').click()
    }
    assertionAjoutDossierVide(){
        cy.get('.MuiFormHelperText-root').should('be.visible').and('have.text',"Champ obligatoire")
    }

    assertionAjoutDossier(){
        
    }
    
    filtrageNumDossier(){
        cy.get('#input-number').click()
        cy.wait(4000)
        cy.get('.select__menu-list > [id^="react-select"]').first().invoke('text').then((numero) => {
            
            cy.get('.select__menu-list > [id^="react-select"]').first().click({force: true} )
            cy.get('.css-141tflq > .MuiButton-contained').click().wait(1500)
            cy.get('table').find('tr').then((ligne) => {
                expect(ligne).to.have.length(2)      
                const num = ligne.find('td[title="Numéro de dossier"]').text()
                cy.log("num", num)
                expect(num).to.equal(numero)
            })
        })
    }

    filtrageCodeContrat(){
        cy.get('.input-contract_code_label').click()
        cy.wait(4000)
        cy.get('.css-qr46ko > [id^="react-select"]').first().invoke('text').then((CodeContrat) => {
            cy.get('.css-qr46ko > [id^="react-select"]').first().click({force: true} )
            cy.get('.css-141tflq > .MuiButton-contained').click().wait(1500)
            cy.get('tbody tr ').each((row) => {
                if (row.length == 1) {
                    if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) {
                         cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
                    } 
                    else {
                        const contrat = row.find('td[title="Code-Libellé Contrat"]').text();
                        expect(contrat).to.contain(CodeContrat);
                    }        
                } 
                else {  
                    cy.get('tbody tr ').each((ligne) => { 
                        const contrat = ligne.find('td[title="Code-Libellé Contrat"]').text();
                        expect(contrat).to.contain(CodeContrat);
                    })            
                }
            });
        })
    }

    filtrageStatut(){
        cy.get('.input-status').click()
        cy.wait(1000)
        cy.get('.css-qr46ko > [id^="react-select"]').first().invoke('text').then((statut) => {
            
            cy.get('.css-qr46ko > [id^="react-select"]').first().click({force: true} )
            cy.get('.css-141tflq > .MuiButton-contained').click().wait(1500)
            cy.get('tbody tr ').each((row) => {
                if (row.length == 1) {
                    if (row.find('td').text().includes("Il n'y a aucun résultat à afficher")) {
                         cy.wrap(row).should('contain', "Il n'y a aucun résultat à afficher");
                         } 
                     else {
                        const stat = row.find('td[title="Statut"]').text();
                        expect(stat).to.equal(statut);
                        }        
                } 
                else {  
                cy.get('tbody tr ').each((ligne) => { 
                const stat = ligne.find('td[title="Statut"]').text();
                expect(stat).to.equal(statut);
                    })            
                }
            });


        })
    }

    filtrageCommune(){
        cy.get('.input-city_name').click()
        cy.wait(1000)
        cy.get('.css-qr46ko > [id^="react-select"]').first().invoke('text').then((commune) => {
        
        cy.get('.css-qr46ko > [id^="react-select"]').first().click({force: true} )
        cy.get('.css-141tflq > .MuiButton-contained').click().wait(1500)
        cy.get('tbody').find('tr').each((ligne) => {    
            const city = ligne.find('td[title="Commune"]').text()
            expect(city).to.contain(commune)
        })
    })
    
    }

    filtrageType(){
        cy.get('.input-type').click()
        cy.wait(1000)
        cy.get('.css-qr46ko > [id^="react-select"]').first().invoke('text').then((type) => {
        
            cy.get('.css-qr46ko > [id^="react-select"]').first().click({force: true} )
            cy.get('.css-141tflq > .MuiButton-contained').click().wait(2500)
            cy.get('tbody tr').each((ligne) => {    
                const tp = ligne.find('td[title="Type"]').text()
                expect(tp).to.contain(Type)
            })
        })
    }

}