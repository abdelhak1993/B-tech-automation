
export class GroupePage{

    ouvrirPageGroupe(){
        cy.contains('Administration').click()
        cy.contains('Groupes').click()
    }

    filtrerGroupe() {
        let nom = '';
        cy.get('.select__input-container').click();
        cy.wait(1500);
        cy.get('.select__option').last().invoke('text').then((groupe) => {
            cy.get('.select__option').last().click();
            cy.get('.css-141tflq > .MuiButton-contained').click(); // cliquer sur rechercher 
            cy.wait(2000);
            cy.get('table tr').find(`td[title ="Nom"]`).each((ligne) => {
                const grp = ligne.text()
                expect(grp).to.contain(groupe);
                });
            });
        }   
}




