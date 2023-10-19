/**
 * ChoixMode:
 * 
 * Cette fonction gère la visibilité des différents éléments du DOM basée sur le choix de l'utilisateur.
 * 
 * Un mappage est défini pour associer chaque option d'entrée (comme 'Trading' ou 'Staking') à un élément DOM particulier.
 * En fonction de l'option choisie par l'utilisateur, l'élément DOM correspondant est rendu visible, tandis que tous les autres sont masqués.
 * 
 * L'utilisation d'une structure de mappage permet d'ajouter ou de retirer facilement des paires d'options sans avoir à refaire toute la logique de la fonction.
 * 
 */


import { elements } from "./DOM.js";
import { ResetLendingBorrowing } from "./LendingMode/LendingReset/LendingReset.js";
import { ResetNFT } from "./NftMode/FunctionResetNFT/ResetNFT.js";
import { ResetStaking } from "./StakingMode/FunctionReset/ResetStaking.js";
import { Reset } from "./TradingMode/FunctionReset/Reset.js";

export const ChoixMode = () => {
    const mappings = {
        Input_Trading: elements.PartieTrading,
        Input_Staking: elements.PartieStaking,
        Input_NFT: elements.PartieNFT,
        Input_Lending: elements.PartieLending
    };

    // Cache tous les éléments
    for (const el of Object.values(mappings)) {
        el.style.display = "none";
    }

    // Affiche l'élément correspondant à l'input sélectionné
    for (const [inputId, el] of Object.entries(mappings)) {
        if (elements[inputId].checked) {
            el.style.display = "block";
            break;
        }
    }

    ResetNFT();
    ResetLendingBorrowing();
    ResetStaking();
    Reset();
}
