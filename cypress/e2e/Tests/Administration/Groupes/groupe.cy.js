
import { GroupePage } from "../../../Pages/Administration/Groupes/groupePage";

const groupe = new GroupePage()

beforeEach(() => {
    cy.login()
    }
)

it('Consulter la page des groupes', function() {  
    groupe.ouvrirPageGroupe()
    groupe.filtrerGroupe()
})

