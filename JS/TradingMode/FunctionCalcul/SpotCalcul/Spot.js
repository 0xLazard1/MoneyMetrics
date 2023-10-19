/**
 * Spot():
 * 
 * Cette fonction est dédiée à la gestion du mode 'Spot' pour le trading. Elle calcule et affiche les résultats 
 * pertinents en fonction des inputs de l'utilisateur concernant le capital investi, le niveau de sortie, 
 * le prix d'entrée et le stop loss.
 * 
 * - Elle commence par récupérer les valeurs des inputs et les convertit en nombres.
 * - Si une des valeurs requises est manquante, elle efface les résultats précédents.
 * - Si le mode de trading est 'Spot' et sans effet de levier, elle calcule :
 *   * Le gain brut et net
 *   * Les pourcentages de gain brut et net
 *   * Les pertes potentielles avec et sans le stop loss
 * - Ensuite, elle met à jour les éléments du DOM avec ces résultats.
 * - Enfin, elle gère l'affichage des résultats pertinents selon que le 'Toggle_StopLoss' soit activé ou non.
 */

import { elements } from "../../../DOM.js";

export const Spot = () => {


    // Récupération et conversion des valeurs des inputs
    const [capitalInvesti, niveauSortie, prixEntree, stopLoss] =
        [elements.Input_CapitalInvesi, elements.Input_NiveauDeSortie, elements.Input_Prixdentree, elements.Input_StopLoss]
            .map(el => Number(el.value));


    // Vérification des valeurs requises
    if (!capitalInvesti || !niveauSortie || !prixEntree || (!elements.Toggle_StopLoss.checked && !stopLoss)) {
        [elements.ResultatCalcul, elements.Pourcentage, elements.PerteStopLoss, elements.WalletBenefice].forEach(el => el.innerHTML = "");
        return;
    }

    if (elements.Input_Spot && elements.Input_Spot.checked && !elements.Input_Levier.checked) {
        // Calcul des différents paramètres
        const gainBrute = capitalInvesti / prixEntree * niveauSortie;
        const gainNet = gainBrute - capitalInvesti;
        const PourcentageBrut = (niveauSortie - prixEntree) / prixEntree;
        const PourcentageNet = PourcentageBrut * 100;
        const perteNet = capitalInvesti * (prixEntree - stopLoss) / prixEntree;
        const WalletAvecBenefice = gainNet + capitalInvesti;
        const WalletAfterSl = capitalInvesti - perteNet;

        const displayResults = (element, value, color, suffix = '') => {
            element.innerHTML = `${value} : <span style="color: ${color}">${suffix}</span>`;
        };

        if (gainBrute > capitalInvesti) {
            displayResults(elements.ResultatCalcul, 'Profit', 'green', `${gainNet.toFixed(2)}$`);
            displayResults(elements.Pourcentage, 'Percentage', 'green', `${PourcentageNet.toFixed(2)}%`);
            displayResults(elements.WalletBenefice, 'Wallet After Profitable Sale', 'green', `${WalletAvecBenefice.toFixed(2)}$`);
        } else {
            displayResults(elements.ResultatCalcul, 'Loss', 'red', `${gainNet.toFixed(2)}$`);
            displayResults(elements.Pourcentage, 'Percentage', 'red', `${PourcentageNet.toFixed(2)}%`);
            displayResults(elements.WalletBenefice, 'Wallet After Loss Sale', 'red', `${WalletAvecBenefice.toFixed(2)}$`);
        }

        if (!elements.Toggle_StopLoss.checked) {
            displayResults(elements.PerteStopLoss, 'Loss in Case of StopLoss', 'red', `${perteNet.toFixed(2)}$`);
            displayResults(elements.WalletSl, 'Wallet After sl', 'red', `${WalletAfterSl.toFixed(2)}$`);

        } else {
            elements.PerteStopLoss.innerHTML = "";
            displayResults(elements.PartieStopLoss.style, "none");
        }
    }
}