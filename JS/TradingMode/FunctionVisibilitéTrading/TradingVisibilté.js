/**
 * TradingVisibilité():
 * 
 * Cette fonction gère la visibilité des différents éléments du DOM en fonction des modes de trading choisis : 'Spot' ou 'Levier'.
 * 
 * Si le mode de trading est 'Spot':
 * - Les éléments associés au mode 'Levier' sont masqués (Block_Levier, PhraseSelection_Levier, Input_RangeLevier, Levier_Value).
 * - Les éléments associés à 'StopLoss' sont affichés (Toggle_StopLoss, LabelTextStopLoss).
 * 
 * Si le mode de trading est 'Levier':
 * - Les éléments associés au mode 'Levier' sont affichés.
 * - Les éléments associés à 'StopLoss' sont masqués.
 * 
 * Si aucun mode n'est sélectionné, une erreur est consignée dans la console.
 * 
 */

import { elements } from "../../DOM.js";

export const TradingVisibilité = () => {
    if (elements.Input_Spot?.checked && !elements.Input_Levier.checked) {
        // Configuration pour le mode Spot
        Object.assign(elements.Block_Levier.style, { display: "none" });
        Object.assign(elements.PhraseSelection_Levier.style, { display: "none" });
        Object.assign(elements.Input_RangeLevier.style, { display: "none" });
        Object.assign(elements.Levier_Value.style, { display: "none" });
        Object.assign(elements.levierbuttonsfast.style, { display: "none" });
        Object.assign(elements.Toggle_StopLoss.style, { display: "block" });
        Object.assign(elements.LabelTextStopLoss.style, { display: "block" });
    } else if (elements.Input_Levier?.checked && !elements.Input_Spot.checked) {
        // Configuration pour le mode Levier
        Object.assign(elements.Block_Levier.style, { display: "block" });
        Object.assign(elements.PhraseSelection_Levier.style, { display: "block" });
        Object.assign(elements.Input_RangeLevier.style, { display: "block" });
        Object.assign(elements.levierbuttonsfast.style, { display: "block" });
        Object.assign(elements.Levier_Value.style, { display: "block" });
        Object.assign(elements.PartieStopLoss.style, { display: "block" });
        Object.assign(elements.Toggle_StopLoss.style, { display: "none" });
        Object.assign(elements.LabelTextStopLoss.style, { display: "none" });
    } else {
        console.error("Erreur dans la fonction 'TradingVisibilité' lors de l'appel");
    }
}
