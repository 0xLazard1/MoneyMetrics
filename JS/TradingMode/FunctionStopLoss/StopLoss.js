/**
 * StopLoss():
 * 
 * Fonction qui gère la visibilité et le texte des éléments du DOM en fonction de l'état du bouton 'Stop Loss'.
 * Elle vérifie d'abord si le mode de trading est 'Spot' en utilisant 'Input_Spot'. Si c'est le cas :
 * - Si le 'Toggle_StopLoss' est activé, elle masque les éléments 'PartieStopLoss' et 'WalletSl'.
 * - Si le 'Toggle_StopLoss' n'est pas activé, elle affiche les éléments 'PartieStopLoss' et 'WalletSl'.
 * 
 */

import { elements } from "../../DOM.js";

export const StopLoss = () => {
    if (elements.Input_Spot.checked) {
        if (elements.Toggle_StopLoss.checked) {
            Object.assign(elements.PartieStopLoss.style, { display: "none" });
            Object.assign(elements.WalletSl.style, { display: "none" });
        } else {
            Object.assign(elements.PartieStopLoss.style, { display: "block" });
            Object.assign(elements.WalletSl.style, { display: "block" });
        }
    }

    elements.LabelTextStopLoss.style.color = elements.Toggle_StopLoss.checked ? "green" : "red";
    elements.LabelTextStopLoss.textContent = elements.Toggle_StopLoss.checked ? "Activer le Stop Loss" : "Désactiver le Stop Loss";
}