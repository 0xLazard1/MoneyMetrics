import { ChoixMode } from "./JS/ChoixMode.js";
import { TradingVisibilité } from "./JS/TradingMode/FunctionVisibilitéTrading/TradingVisibilté.js";
import { StopLoss } from "./JS/TradingMode/FunctionStopLoss/StopLoss.js";
import { Spot } from "./JS/TradingMode/FunctionCalcul/SpotCalcul/Spot.js";
import { Levier } from "./JS/TradingMode/FunctionCalcul/LevierCalcul/Levier.js";
import { UpdateLevier } from "./JS/TradingMode/FunctionCalcul/LevierCalcul/UpdateLevier.js";
import { Reset } from "./JS/TradingMode/FunctionReset/Reset.js";



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

