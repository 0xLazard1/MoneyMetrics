/**
 * NFTCalcul():
 * 
 * Cette fonction est conçue pour calculer et afficher les résultats liés à une transaction NFT 
 * en se basant sur les entrées de l'utilisateur.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Elle définit une fonction auxiliaire `displayResults` pour formater et afficher les résultats 
 *   avec une certaine couleur et un suffixe optionnel.
 * 
 * - Elle récupère et convertit en nombres les valeurs des éléments de l'interface utilisateur liés à :
 *   - L'achat du NFT (`Input_PrixdentreeNFT`),
 *   - La revente du NFT (`Input_PrixdeReventeNFT`),
 *   - La commission du créateur (`Input_FraisCreateurNFT`),
 *   - La commission du MarketPlace (`Input_FraisMarketNFT`).
 * 
 * - Si l'une des valeurs essentielles est manquante, elle efface les résultats précédents et quitte la fonction.
 * 
 * - Si l'option NFT est sélectionnée :
 *   - Elle calcule le gain brut de la revente, les commissions du créateur et du marketplace, 
 *     le total des commissions et le bénéfice net après commissions.
 *   - Elle calcule également le portefeuille total après la revente et le pourcentage de changement.
 *   - Elle affiche les résultats en utilisant la fonction auxiliaire `displayResults`. 
 *     Les couleurs varient en fonction des profits ou des pertes.
 * 
 * Importation : 
 * Pour utiliser cette fonction, elle doit être importée depuis son module source.
 * 
 * Utilisation :
 * La fonction doit être appelée après que l'utilisateur a rempli les champs nécessaires 
 * et souhaite obtenir les résultats des calculs.
 */

import { elements } from "../../DOM.js";

export const NFTCalcul = () => {
    const displayResults = (element, value, color, suffix = '') => {
        element.innerHTML = `${value} : <span style="color: ${color}">${suffix}</span>`;
    };

    const [achatNFT, reventeNFT, commissionCreator, commissionMarketPlace] =
        [elements.Input_PrixdentreeNFT, elements.Input_PrixdeReventeNFT, elements.Input_FraisCreateurNFT, elements.Input_FraisMarketNFT]
            .map(el => Number(el.value));

    if (!achatNFT || !reventeNFT || !commissionCreator || !commissionMarketPlace) {
        [elements.ResultatCalculNFT, elements.WalletBeneficeNFT, elements.CommissionNFTPourcentage, elements.CommissionNFTenDollard, elements.PourcentageNFT].forEach(el => el.innerHTML = "");
        return;
    }

    if (elements.Input_NFT?.checked) {

        const GainBrut = reventeNFT - achatNFT;
        const CommissionCreateur = (reventeNFT * commissionCreator) / 100;
        const CommissionMarket = (reventeNFT * commissionMarketPlace) / 100;
        const CommissionTotale = CommissionCreateur + CommissionMarket;
        const NetTokenGagné = GainBrut - CommissionTotale;
        const TokenTotal = achatNFT + NetTokenGagné;
        const pourcentageChangement = (NetTokenGagné / achatNFT) * 100;

        const isProfit = NetTokenGagné >= 0;

        if (isProfit) {
            displayResults(ResultatCalculNFT, 'Bénéfice net de la revente', 'green', `${NetTokenGagné.toFixed(2)}$`);
            displayResults(WalletBeneficeNFT, 'Wallet total après revente', 'green', `${TokenTotal.toFixed(2)}$`);
            displayResults(PourcentageNFT, 'Pourcentage de gain', 'green', `${pourcentageChangement.toFixed(2)}%`);
        } else {
            displayResults(ResultatCalculNFT, 'Perte net après revente', 'red', `${Math.abs(NetTokenGagné).toFixed(2)}$`); // Utilise Math.abs pour montrer le montant de la perte en valeur positive
            displayResults(WalletBeneficeNFT, 'Wallet total après revente en perte', 'red', `${TokenTotal.toFixed(2)}$`);
            displayResults(PourcentageNFT, 'Pourcentage de perte', 'red', `${Math.abs(pourcentageChangement).toFixed(2)}%`);
        }

        displayResults(elements.CommissionNFTPourcentage, 'Taux total de commission', 'red', `${(commissionCreator + commissionMarketPlace).toFixed(2)}%`);
        displayResults(elements.CommissionNFTenDollard, 'Commissions déduites', 'red', `${CommissionTotale.toFixed(2)}$`);
    }

}
