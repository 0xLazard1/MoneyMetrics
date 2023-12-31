/**
 * Levier():
 * 
 * Cette fonction gère le trading avec effet de levier. Elle effectue des calculs en fonction 
 * des inputs de l'utilisateur concernant le capital investi, le niveau de sortie, le prix d'entrée, 
 * le levier utilisé, et le choix entre le mode 'Long' et 'Short'.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Elle récupère d'abord et convertit en nombres les valeurs des inputs.
 * - Si une valeur essentielle est manquante, elle efface les résultats précédents.
 * - Elle définit une fonction auxiliaire pour afficher les résultats.
 * - Si le mode est 'Avec Levier' et pas 'Spot' :
 *   - Elle calcule des formules communes utilisées pour les deux modes 'Long' et 'Short'.
 *   - Si le mode est 'Long':
 *     - Elle calcule les gains possibles, les pertes possibles et la valeur de liquidation.
 *     - Elle affiche ces résultats ou des erreurs appropriées.
 *   - Si le mode est 'Short':
 *     - Elle calcule de la même manière que pour le mode 'Long', mais prend en compte la nature 
 *       de la vente à découvert.
 *     - Elle affiche les résultats ou des erreurs appropriées.
 *     - Cache le message d'erreur après une première erreur, quand toute les conditions sont bonnes.
 */


import { elements } from "../../../DOM.js";
import { ErreursLong, ErreurStopLoss, ErreursShort } from "../../FunctionErreur/Erreur.js";


export const Levier = () => {
    const [capitalInvesti, niveauSortie, prixEntree, stopLoss, leviervalue, rangelevier, erreur] =
        [elements.Input_CapitalInvesi, elements.Input_NiveauDeSortie, elements.Input_Prixdentree, elements.Input_StopLoss, elements.Levier_Value, elements.Input_RangeLevier, elements.ErrorContainer
        ]
            .map(el => Number(el.value));

    if (!capitalInvesti || !niveauSortie || !prixEntree || (!elements.Input_Long.checked && !elements.Input_Short.checked)) {
        [elements.ResultatCalcul, elements.Pourcentage, elements.PerteStopLoss, elements.WalletBenefice, elements.RisqueReward].forEach(el => el.innerHTML = "");
        return;
    }

    const displayResults = (element, value, color, suffix = '') => {
        element.innerHTML = `${value} : <span style="color: ${color}">${suffix}</span>`;
    };

    if (elements.Input_Levier && elements.Input_Levier.checked && !elements.Input_Spot.checked) {
        // Formules communes
        const nombreAction = (capitalInvesti * rangelevier) / prixEntree;


        if (elements.Input_Long.checked && !elements.Input_Short.checked) {
            // Formules pour le mode Long
            const gainParAction = niveauSortie - prixEntree;
            const gainBrutLevier = gainParAction * nombreAction;
            const gainNetLevier = gainBrutLevier;
            const walletApresBeneficeLevier = capitalInvesti + gainNetLevier;
            const perteNetSansLevier = ((stopLoss - prixEntree) / prixEntree) * capitalInvesti * rangelevier;
            const walletApresSlSansLevier = capitalInvesti + perteNetSansLevier;
            const LiquidationLevierLong = (prixEntree * (1 - 1 / rangelevier));
            const riskRewardRatioLong = gainNetLevier / perteNetSansLevier;

            // Affichage pour le mode Long
            if (prixEntree < niveauSortie && capitalInvesti != 0) {
                displayResults(ResultatCalcul, 'Profit', 'green', `${gainNetLevier.toFixed(2)}$`);
                displayResults(WalletBenefice, 'Wallet After Profitable Sale', 'green', `${walletApresBeneficeLevier.toFixed(2)} $`);
                displayResults(Liquidation, 'Liquidation', 'blue', `${LiquidationLevierLong.toFixed(2)} $`);
                displayResults(RisqueReward, 'R/R', 'blue', `${Math.abs(riskRewardRatioLong).toFixed(2)}`);
                if (stopLoss < prixEntree) { // Display Error
                    displayResults(PerteStopLoss, 'Loss in Case of StopLoss', 'red', `${Math.abs(perteNetSansLevier).toFixed(2)} $`);
                    displayResults(WalletSl, 'Wallet After sl', 'red', `${walletApresSlSansLevier.toFixed(2)} $`);
                    elements.ErrorContainer.textContent = "";
                } else {
                    ErreurStopLoss();
                }
            } else {
                ErreursLong();

            }
        } else if (elements.Input_Short.checked && !elements.Input_Long.checked) {
            // Formules pour le mode Short
            const gainParAction = prixEntree - niveauSortie;
            const gainBrutLevier = gainParAction * nombreAction;
            const gainNetLevierShort = gainBrutLevier;
            const walletApresBeneficeLevierShort = capitalInvesti + gainNetLevierShort;
            const perteNetSansLevier = ((stopLoss - prixEntree) / prixEntree) * capitalInvesti * rangelevier;
            const walletApresSlSansLevierEnSL = capitalInvesti - perteNetSansLevier;
            const LiquidationLevierShort = (prixEntree * (1 + 1 / rangelevier));
            const riskRewardRatioShort = gainNetLevierShort / perteNetSansLevier;


            // Affichage pour le mode Short
            displayResults(ResultatCalcul, 'Profit', 'green', `${gainNetLevierShort.toFixed(2)}$`);
            displayResults(WalletBenefice, 'Wallet After Profitable Sale', 'green', `${walletApresBeneficeLevierShort.toFixed(2)} $`);
            displayResults(Liquidation, 'Liquidation', 'blue', `${LiquidationLevierShort.toFixed(2)} $`);
            displayResults(RisqueReward, 'R/R', 'blue', `${riskRewardRatioShort.toFixed(2)}`);
            elements.ErrorContainer.textContent = "";
            if (stopLoss > prixEntree) {
                displayResults(PerteStopLoss, 'Loss in Case of StopLoss', 'red', `${perteNetSansLevier.toFixed(2)} $`);
                displayResults(WalletSl, 'Wallet After sl', 'red', `${walletApresSlSansLevierEnSL.toFixed(2)} $`);
                elements.ErrorContainer.textContent = "";

            } else {
                ErreurStopLoss();
            }

        } else {
            ErreursShort();
        }
    }
}
