/**
 * ResetNFT():
 * 
 * Cette fonction a pour objectif de réinitialiser les valeurs et les résultats affichés relatifs aux NFTs 
 * dans l'interface utilisateur.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Elle récupère et convertit en nombres flottants les valeurs actuelles des éléments liés à :
 *   - L'achat du NFT (`Input_PrixdentreeNFT`),
 *   - La revente du NFT (`Input_PrixdeReventeNFT`),
 *   - La commission du créateur (`Input_FraisCreateurNFT`), 
 *   - La commission du MarketPlace (`Input_FraisMarketNFT`).
 * 
 * - Si l'une des valeurs extraites est supérieure à zéro :
 *   - Elle réinitialise les valeurs des champs d'entrée à "0".
 *   - Elle efface le contenu des éléments d'affichage des résultats.
 * 
 * Importation : 
 * Pour utiliser cette fonction, elle doit être importée depuis son module source.
 * 
 * Utilisation :
 * La fonction doit être appelée chaque fois que l'utilisateur souhaite remettre à zéro les champs 
 * d'entrée et les résultats pour les NFTs.
 */




import { elements } from "../../DOM.js";


export const ResetNFT = () => {

    const valueAchatNFT = parseFloat(elements.Input_PrixdentreeNFT.value);
    const valueReventeNFT = parseFloat(elements.Input_PrixdeReventeNFT.value);
    const valueCommissionCreator = parseFloat(elements.Input_FraisCreateurNFT.value);
    const valueCommissionMarketPlace = parseFloat(elements.Input_FraisMarketNFT.value);

    if (valueAchatNFT > 0 || valueReventeNFT > 0 || valueCommissionCreator > 0 || valueCommissionMarketPlace > 0) {
        [elements.Input_PrixdentreeNFT, elements.Input_PrixdeReventeNFT, elements.Input_FraisCreateurNFT, elements.Input_FraisMarketNFT].forEach(input => input.value = "0");
        [elements.ResultatCalculNFT, elements.WalletBeneficeNFT, elements.CommissionNFTPourcentage, elements.CommissionNFTenDollard, elements.PourcentageNFT].forEach(element => element.innerHTML = "");
    }
}
