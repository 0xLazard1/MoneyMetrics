import { ChoixMode } from "./ChoixMode.js"
import { TradingVisibilité } from "./TradingMode/FunctionVisibilitéTrading/TradingVisibilté.js";
import { StakingVisibilité } from "./StakingMode/FunctionVisibilité/VisibilitéStaking.js";
import { LendingBorrowingVisibilité } from "./LendingMode/LendingVisibilté/LendingVisibilté.js";
import { StopLoss } from "./TradingMode/FunctionStopLoss/StopLoss.js";
import { HiddenResult2 } from "./HiddenResult.js";

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
    "WalletBeneficeStaking", "ErrorContainerStaking",
    "CommissionStaking", "Button_ResetStaking",
    "Input_PrixdentreeNFT", "Input_PrixdeReventeNFT",
    "Input_FraisCreateurNFT", "Input_FraisMarketNFT",
    "Button_CalculerLesResultatsNFT", "Button_ResetNFT",
    "ResultatCalculNFT", "WalletBeneficeNFT",
    "CommissionNFTPourcentage", "ErrorContainerNFT",
    "CommissionNFTenDollard", "PourcentageNFT",
    "Input_CapitalizationFrequency", "stakingapymode",
    "Phrase_APR", "Phrase_APY", "RisqueReward",
    "Input_Pret", "Input_Emprunt", "Wrapper_FrequenceCapitalisation",
    "Wrapper_Recomposition", "ResultatPret",
    "ResultatEmprunt", "InteretsPret", "InteretsEmprunt", "FraisTotal",
    "ErrorContainerPretEmprunt", "Button_CalculerPretEmprunt", "Button_ResetPretEmprunt",
    "Input_FraisPlateforme", "Input_Recomposition",
    "Input_FrequenceCapitalisationLendingBorrwing",
    , "Input_TauxInteret", "Input_Montant", "Input_RangeTemps", "Temps_Value",
    "TokensParSemaineDisplay", "TokensParMoisDisplay", "TempsPourDoublerDisplay",
    "TokensParJourDisplay",
    "levierbuttonsfast", "WalletPerte", "Input_FrequenceCapitalisationLendingBorrwing",
    "Input_RangeTemps_Lending", "Temps_Value_Lending", "AffichageDroiteID",
    "AffichageDroiteIDStaking", "AffichageDroiteIDLending", "AffichageDroiteIDNFT"];


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
    const stopLoss = elements.Toggle_StopLoss;
    const inputlending = elements.Input_Pret;
    if (radioButtons.length > 0 && inputSpot && inputLong && inputapy && inputlending && stopLoss) {
        radioButtons.forEach(button => button.checked = false);
        inputSpot.checked = true;
        inputLong.checked = true;
        inputapy.checked = true;
        inputlending.checked = true;
        stopLoss.checked = true;
        ChoixMode();
        TradingVisibilité();
        StakingVisibilité();
        LendingBorrowingVisibilité();
        StopLoss();
        HiddenResult2();
    } else {
        console.error("Ne trouve pas les radios dans modes");
    }
})

document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".Menu_Responsive_Button");
    var modeSelection = document.querySelector(".Mode_Normal_Choix");
    var modeRadios = document.querySelectorAll(".Mode_Normal_Radio");

    function isMobile() {
        return window.innerWidth <= 768;
    }

    menuButton.addEventListener("click", function () {
        if (isMobile()) {
            modeSelection.style.display = (modeSelection.style.display === "none" || modeSelection.style.display === "") ? "flex" : "none";
        }
    });

    modeRadios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            if (isMobile()) {
                modeSelection.style.display = "none";
            }
        });
    });



});


