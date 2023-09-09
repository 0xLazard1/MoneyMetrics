/**
 * APR():
 * 
 * Cette fonction gère le calcul de l'APR (Annual Percentage Rate) pour le staking de tokens.
 * Elle effectue des calculs basés sur les entrées de l'utilisateur concernant la quantité stakée,
 * le pourcentage d'APR, et la commission.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Elle définit d'abord une fonction auxiliaire `displayResults` pour afficher les résultats.
 * - Elle récupère et convertit en nombres les valeurs des éléments de l'interface utilisateur.
 * - Si une valeur essentielle est manquante, elle efface les résultats précédents et quitte la fonction.
 * - Si l'option de staking est sélectionnée :
 *   - Elle calcule le total brut des tokens gagnés.
 *   - Elle détermine la commission basée sur le pourcentage donné.
 *   - Elle calcule les tokens nets gagnés après soustraction de la commission.
 *   - Elle détermine le bénéfice total en tokens après ajout du bénéfice net.
 *   - Elle utilise la fonction auxiliaire pour afficher les résultats : 
 *     - Nombre total de tokens,
 *     - Nombre de tokens gagnés,
 *     - Tokens perdus en commission.
 */


import { elements } from "../../../DOM.js";


export const APR = () => {


    const displayResults = (element, value, color, suffix = '') => {
        element.innerHTML = `${value} : <span style="color: ${color}">${suffix}</span>`;
    };

    const [quantitestaking, pourcentageapr, commission] =
        [elements.Input_QuantiteStaking, elements.Input_PourcentageAPR, elements.Input_CommisionStaking
        ]
            .map(el => Number(el.value));

    if (!quantitestaking || !pourcentageapr || !commission) {
        [elements.ResultatCalculStaking, elements.WalletBeneficeStaking, elements.CommissionStaking].forEach(el => el.innerHTML = "");
        return;
    }

    if (elements.Input_Staking, elements.Input_Staking?.checked) {

        const BrutTokenGagné = quantitestaking * pourcentageapr / 100;  // Total des tokens gagnés
        const Commission = BrutTokenGagné * commission / 100;           // Commission basée sur le pourcentage
        const NetTokenGagné = BrutTokenGagné - Commission;              // Tokens après soustraction de la commission
        const TokenBenefice = NetTokenGagné + quantitestaking;          // Total des tokens après ajout du bénéfice net

        displayResults(ResultatCalculStaking, 'Nombre de Token Farmer', 'green', `${NetTokenGagné.toFixed(2)}`)
        displayResults(WalletBeneficeStaking, 'Nombre de Token Total', 'green', `${TokenBenefice.toFixed(2)}`)
        displayResults(CommissionStaking, 'Nombre de Token Perdu en Commission', 'red', `${Commission.toFixed(2)}`)
    }
}


