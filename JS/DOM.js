import { ChoixMode } from "./ChoixMode.js"
import { TradingVisibilité } from "./TradingMode/FunctionVisibilitéTrading/TradingVisibilté.js";
import { StakingVisibilité } from "./StakingMode/FunctionVisibilité/VisibilitéStaking.js";

const Tableau_Id = [
    "Input_Trading", "Input_Staking",
    "Input_NFT", "Input_Lending",
    "PartieTrading", "PartieStaking",
    "PartieNFT", "PartieLending",
    "Input_Spot", "Input_Levier",
    "Block_Levier", "PhraseSelection_Levier",
    "Input_RangeLevier", "Levier_Value",
    "Toggle_StopLoss", "PartieStopLoss",
    "WalletSl", "LabelTextStopLoss",
    "Button_CalculerLesResultats", "Input_Prixdentree",
    "Input_CapitalInvesi", "Input_NiveauDeSortie",
    "ResultatCalcul", "Pourcentage",
    "PerteStopLoss", "Input_StopLoss",
    "WalletBenefice", "ErrorContainer",
    "Input_Long", "Input_Short",
    "multiplicator", "ResetAll",
    "Liquidation", "Input_APR",
    "Input_APY", "Input_QuantiteStaking",
    "Button_CalculerLesResultats", "Input_PourcentageAPR",
    "Input_CommisionStaking", "ResultatCalculStaking",
    "WalletBeneficeStaking", "PourcentageStaking",
    "RisqueRewardStaking", "ErrorContainerStaking",
    "CommissionStaking", "Button_ResetStaking",
    "Input_PrixdentreeNFT", "Input_PrixdeReventeNFT",
    "Input_FraisCreateurNFT", "Input_FraisMarketNFT",
    "Button_CalculerLesResultatsNFT", "Button_ResetNFT",
    "ResultatCalculNFT", "WalletBeneficeNFT",
    "CommissionNFTPourcentage", "ErrorContainerNFT",
    "CommissionNFTenDollard", "PourcentageNFT",
    "Input_CapitalizationFrequency", "stakingapymode",
    "Phrase_APR", "Phrase_APY"];


const getDomElements = ids => ids.reduce((obj, id) => {
    const element = document.getElementById(id);
    if (element) {
        obj[id] = element;
    } else {
        console.error(`L'élément avec l'ID ${id} n'a pas été trouvé.`);
    }
    return obj;
}, {});

// Permet de récupérer les IDs, et de les utiliser
export const elements = getDomElements(Tableau_Id);



window.addEventListener("DOMContentLoaded", () => {
    const radioButtons = document.getElementsByName("Choice");
    const inputSpot = elements.Input_Spot;
    const inputLong = elements.Input_Long;
    const inputapy = elements.Input_APY;
    if (radioButtons.length > 0 && inputSpot && inputLong && inputapy) {
        radioButtons.forEach(button => button.checked = false);
        inputSpot.checked = true;
        inputLong.checked = true;
        inputapy.checked = true;
        ChoixMode();
        TradingVisibilité();
        StakingVisibilité();
    } else {
        console.error("Ne trouve pas les radios dans modes");
    }
})