///<reference types="cypress" />

import { TablePage } from "../../../Pages/Administration/Tables techniques/tablePage";

const tableTechnique = new TablePage();

beforeEach(()=> {
    cy.login()
})

it('consulter les tables techniques ', (() => {
tableTechnique.ouvrirPageTable()
tableTechnique.choixDeTable()
} ))