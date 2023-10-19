/**
 * ErreursLong():
 * 
 * Cette fonction est appelée lorsqu'une erreur survient en mode "long".
 * Elle réinitialise tous les éléments avec la fonction 'Reset()' et affiche ensuite un message d'erreur
 * approprié dans 'ErrorContainer'.
 * 
 */
/**
 * ErreursShort():
 * 
 * Cette fonction est appelée lorsqu'une erreur survient en mode "short".
 * Elle réinitialise tous les éléments avec la fonction 'Reset()' et affiche ensuite un message d'erreur
 * approprié dans 'ErrorContainer'.
 * 
 */
/**
 * ErreursLiquidation():
 * 
 * Cette fonction est réservée pour gérer les erreurs spécifiques lors de situations de liquidation.
 * (Note: La fonction est actuellement vide et doit être complétée.)
 * 
 */
/**
 * ErreurStopLoss():
 * 
 * Cette fonction est appelée lorsqu'une erreur survient avec la fonctionnalité 'StopLoss'.
 * Elle réinitialise tous les éléments avec la fonction 'Reset()' et affiche ensuite un message d'erreur
 * approprié dans 'ErrorContainer'.
 * 
 */


import { elements } from "../../DOM.js";
import { Reset } from "../FunctionReset/Reset.js";

const displayResults = (element, value, color) => {
    element.innerHTML = `<span style="color: ${color};">${value}</span>`;
};



export const ErreursLong = () => {
    Reset();
    displayResults(elements.ErrorContainer, 'An issue in long mode', 'red');
}

export const ErreursShort = () => {
    Reset();
    displayResults(elements.ErrorContainer, 'An issue in short mode', 'red');
}



export const ErreurStopLoss = () => {
    Reset();
    displayResults(elements.ErrorContainer, 'An issue in StopLoss', 'red');
}
