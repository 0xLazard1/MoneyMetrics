import { ChoixMode } from "./JS/ChoixMode.js";
import { TradingVisibilité } from "./JS/TradingMode/FunctionVisibilitéTrading/TradingVisibilté.js";
import { StopLoss } from "./JS/TradingMode/FunctionStopLoss/StopLoss.js";
import { Spot } from "./JS/TradingMode/FunctionCalcul/SpotCalcul/Spot.js";
import { Levier } from "./JS/TradingMode/FunctionCalcul/LevierCalcul/Levier.js";
import { UpdateLevier } from "./JS/TradingMode/FunctionCalcul/LevierCalcul/UpdateLevier.js";
import { Reset } from "./JS/TradingMode/FunctionReset/Reset.js";
import { APR } from "./JS/StakingMode/FunctionCalculStaking/APR/APR.js";
import { ResetStaking } from "./JS/StakingMode/FunctionReset/ResetStaking.js";
import { NFTCalcul } from "./JS/NftMode/FunctionCalculNFT/CalculNFT.js";
import { ResetNFT } from "./JS/NftMode/FunctionResetNFT/ResetNFT.js";
import { StakingVisibilité } from "./JS/StakingMode/FunctionVisibilité/VisibilitéStaking.js";
import { APY } from "./JS/StakingMode/FunctionCalculStaking/APY/APY.js";
import { LendingBorrowingVisibilité } from "./JS/LendingMode/LendingVisibilté/LendingVisibilté.js";
import { LendingCalcul } from "./JS/LendingMode/LendingCalcul/Lending.js";
import { Borrowing } from "./JS/LendingMode/LendingCalcul/Borrowing.js";
import { ResetLendingBorrowing } from "./JS/LendingMode/LendingReset/LendingReset.js";
import { UpdateTemps } from "./JS/StakingMode/FunctionCalculStaking/UpdateTemps/UpdateTemps.js";
import { UpdateTemps_lending } from "./JS/LendingMode/LendingCalcul/UpdateTemps/UpdateTemps.js";
import { HiddenResult } from "./JS/HiddenResult.js";



// Utilisation pour le fichier ChoixMode.js
Input_Trading.addEventListener("change", ChoixMode);
Input_Staking.addEventListener("change", ChoixMode);
Input_NFT.addEventListener("change", ChoixMode);
Input_Lending.addEventListener("change", ChoixMode);



//Utilisation pour le fichier TradingVisibilité.js
Input_Spot.addEventListener("change", TradingVisibilité);
Input_Levier.addEventListener("change", TradingVisibilité);



//Utilisation pour le fichier StopLoss.js
Toggle_StopLoss.addEventListener("change", StopLoss);





//Utilisation pour le fichier CalculSpot.js
Button_CalculerLesResultats.addEventListener("click", Spot);



//Utilisation pour le fichier CalculLevier.js
Button_CalculerLesResultats.addEventListener("click", Levier);


//Utilisation pour le fichier UpdateLevier.js
Input_RangeLevier.addEventListener("input", UpdateLevier);


//Utilisation pour le fichier Reset.js
ResetAll.addEventListener("click", Reset);


//Utilisation pour le fichier APR.js
Button_CalculerLesResultatsStaking.addEventListener("click", APR);


//Utilisation pour le fichier APY.js
Button_CalculerLesResultatsStaking.addEventListener("click", APY);


//Utilisation pour le fichier StakingReset.js
Button_ResetStaking.addEventListener("click", ResetStaking);


//Utilisation pour le fichier StakingVisibilité.js
Input_APY.addEventListener("change", StakingVisibilité);
Input_APR.addEventListener("change", StakingVisibilité);


//Utilisation pour le fichier CalculNFT.js
Button_CalculerLesResultatsNFT.addEventListener("click", NFTCalcul);


//Utilisation pour le ficher ResetNFT.js
Button_ResetNFT.addEventListener("click", ResetNFT);


//Utilisation pour le fichier LendingBorrwingVisibilité.js
Input_Pret.addEventListener("change", LendingBorrowingVisibilité);
Input_Emprunt.addEventListener("change", LendingBorrowingVisibilité);

//Utilisation pour le fichier Lending.js
Button_CalculerPretEmprunt.addEventListener("click", LendingCalcul);

//Utilisation pour le fichier Borrowing.js
Button_CalculerPretEmprunt.addEventListener("click", Borrowing);

//Utilisation pour le fichier ResetLendingBorrowing.js
Button_ResetPretEmprunt.addEventListener("click", ResetLendingBorrowing);

//Utilisation pour le fichier UpdateTemps.js
Input_RangeTemps.addEventListener("input", UpdateTemps);

Input_RangeTemps_Lending.addEventListener("input", UpdateTemps_lending);


Button_CalculerLesResultats.addEventListener("click", HiddenResult);
Button_CalculerLesResultatsStaking.addEventListener("click", HiddenResult);
Button_CalculerLesResultatsNFT.addEventListener("click", HiddenResult);
Button_CalculerPretEmprunt.addEventListener("click", HiddenResult);