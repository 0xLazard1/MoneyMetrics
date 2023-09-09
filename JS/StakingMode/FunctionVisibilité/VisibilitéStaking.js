/**
 * StakingVisibilité():
 * 
 * Fonction gérant la visibilité des éléments du DOM basée sur le choix de l'utilisateur entre APR et APY.
 * - Si 'Input_APY' est sélectionné et 'Input_APR' ne l'est pas :
 *   - Elle rend visible les éléments spécifiques à l'APY tels que 'Input_CapitalizationFrequency' et 'stakingapymode',
 *   et masque ceux relatifs à l'APR.
 * - Si 'Input_APR' est sélectionné et 'Input_APY' ne l'est pas :
 *   - Elle rend visible les éléments spécifiques à l'APR et masque ceux relatifs à l'APY.
 * 
 * En cas d'incohérences dans la sélection, une erreur est générée.
 * 
 */

import { elements } from "../../DOM.js";


export const StakingVisibilité = () => {
    if (elements.Input_APY?.checked && !elements.Input_APR.checked) {
        // Configuration pour le mode APY
        Object.assign(elements.Input_CapitalizationFrequency.style, { display: "block" });
        Object.assign(elements.stakingapymode.style, { display: "block" });
        Object.assign(elements.Phrase_APY.style, { display: "block" });
        Object.assign(elements.Phrase_APR.style, { display: "none" });

    } else if (elements.Input_APR?.checked && !elements.Input_APY.checked) {
        // Configuration pour le mode APR
        Object.assign(elements.Input_CapitalizationFrequency.style, { display: "none" });
        Object.assign(elements.stakingapymode.style, { display: "none" });
        Object.assign(elements.Phrase_APY.style, { display: "none" });
        Object.assign(elements.Phrase_APR.style, { display: "block" });

    } else {
        console.error("Erreur dans la fonction 'StakingVisibilité' lors de l'appel");
    }
}