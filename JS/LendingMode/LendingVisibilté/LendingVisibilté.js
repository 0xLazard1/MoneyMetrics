/**
 * LendingBorrowingVisibilité():
 * 
 * Fonction gérant la visibilité des éléments du DOM basée sur le choix de l'utilisateur entre Lending et Borrowing.
 * - Si 'Input_Pret' est sélectionné et 'Input_Emprunt' ne l'est pas :
 *   - Elle rend visible les éléments spécifiques au Lending tels que 'Input_Recomposition' et 'Wrapper_FrequenceCapitalisation',
 *   et masque ceux relatifs au Borrowing.
 * - Si 'Input_Emprunt' est sélectionné et 'Input_Pret' ne l'est pas :
 *   - Elle rend visible les éléments spécifiques au Borrowing et masque ceux relatifs au Lending.
 * 
 * En cas d'incohérences dans la sélection, une erreur est générée.
 * 
 */

import { elements } from "../../DOM.js";

export const LendingBorrowingVisibilité = () => {
    if (elements.Input_Pret?.checked && !elements.Input_Emprunt.checked) {
        // Configuration pour le mode Lending
        Object.assign(elements.Wrapper_FrequenceCapitalisation.style, { display: "block" });
        Object.assign(elements.Wrapper_Recomposition.style, { display: "block" });

      

    } else if (elements.Input_Emprunt?.checked && !elements.Input_Pret.checked) {
        // Configuration pour le mode Borrowing
        Object.assign(elements.Wrapper_FrequenceCapitalisation.style, { display: "none" });
        Object.assign(elements.Wrapper_Recomposition.style, { display: "none" });

     

    } else {
        console.error("Erreur dans la fonction 'LendingBorrowingVisibilité' lors de l'appel");
    }
}


