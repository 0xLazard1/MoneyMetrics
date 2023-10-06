/**
 * ResetStaking():
 * 
 * Cette fonction permet de réinitialiser les valeurs des champs associés au staking. Elle est conçue 
 * pour effacer les valeurs des champs d'entrée et des champs de résultats lorsque certaines conditions 
 * sont remplies.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Elle récupère et convertit en nombres flottants les valeurs des champs associés au staking 
 *   (quantité de tokens, pourcentage APR, commission).
 * - Si l'une de ces valeurs est supérieure à zéro :
 *   - Elle réinitialise à "0" les champs d'entrée (quantité de tokens, pourcentage APR, commission).
 *   - Elle efface le contenu textuel des champs de résultats associés au staking.
 */

import { elements } from "../../DOM.js";


export const ResetStaking = () => {

    const valueQuantitéToken = parseFloat(elements.Input_QuantiteStaking.value);
    const valuePourcentageAPR = parseFloat(elements.Input_PourcentageAPR.value);
    const valueComission = parseFloat(elements.Input_CommisionStaking.value);

    if (valueQuantitéToken > 0 || valuePourcentageAPR > 0 || valueComission > 0) {
        [elements.Input_QuantiteStaking, elements.Input_PourcentageAPR, elements.Input_CommisionStaking].forEach(input => input.value = "");
        [elements.ResultatCalculStaking, elements.WalletBeneficeStaking, elements.CommissionStaking, elements.TokensParJourDisplay, elements.TokensParSemaineDisplay,
        elements.TokensParMoisDisplay, elements.TempsPourDoublerDisplay].forEach(element => element.textContent = "");
    }
}