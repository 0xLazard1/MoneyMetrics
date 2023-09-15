/**
 * Reset():
 * 
 * Cette fonction sert à réinitialiser les valeurs des différents éléments d'interface liés au trading.
 * Elle effectue les étapes suivantes :
 * 
 * - Récupère et convertit en nombre flottant les valeurs des inputs pour le prix d'entrée, 
 *   le capital investi, le niveau de sortie, et le stop loss.
 * 
 * - Si l'une de ces valeurs est supérieure à zéro :
 *   - Réinitialise les valeurs des inputs pour le prix d'entrée, le capital investi, 
 *     et le niveau de sortie à "0".
 *   - Réinitialise le contenu textuel des éléments affichant le résultat du calcul, 
 *     le pourcentage, le bénéfice du portefeuille, le portefeuille après un stop loss, 
 *     le multiplicateur et la liquidation.
 * 
 * - Si le mode est 'Spot' sans 'StopLoss' activé et que le stop loss est supérieur à zéro, 
 *   ou si le mode est 'Avec Levier' et que le stop loss est supérieur à zéro :
 *   - Réinitialise la valeur du stop loss à "0" et efface le contenu textuel de l'élément 
 *     affichant la perte du stop loss.
 * 
 * - Si toutes les valeurs sont à zéro, affiche une erreur dans la console indiquant que 
 *   toutes les valeurs sont déjà à zéro.
 */

import { elements } from "../../DOM.js";

export const Reset = () => {


    const valuePrixdentree = parseFloat(elements.Input_Prixdentree.value);
    const valueCapitalInvesi = parseFloat(elements.Input_CapitalInvesi.value);
    const valueNiveauDeSortie = parseFloat(elements.Input_NiveauDeSortie.value);
    const valueStopLoss = parseFloat(elements.Input_StopLoss.value);

    if (valuePrixdentree > 0 || valueCapitalInvesi > 0 || valueNiveauDeSortie > 0 || valueStopLoss > 0) {
        [elements.Input_Prixdentree, elements.Input_CapitalInvesi, elements.Input_NiveauDeSortie].forEach(input => input.value = "0");
        [elements.ResultatCalcul, elements.Pourcentage, elements.WalletBenefice, elements.WalletSl, elements.multiplicator, elements.Liquidation, elements.RisqueReward].forEach(element => element.textContent = "");


        if ((elements.Input_Spot.checked && !elements.Toggle_StopLoss.checked && valueStopLoss > 0) || (elements.Input_Levier.checked && valueStopLoss > 0)) {
            elements.Input_StopLoss.value = "0";
            elements.PerteStopLoss.textContent = "";
        }

        
    } else {
        console.error("Toute les valeurs sont à 0");
    }
}