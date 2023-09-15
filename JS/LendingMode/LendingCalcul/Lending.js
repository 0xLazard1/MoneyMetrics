/**
 * LendingCalcul():
 * 
 * Cette fonction gère le calcul des intérêts pour le prêt de tokens.
 * Elle effectue des calculs basés sur les entrées de l'utilisateur concernant 
 * le montant prêté, le taux d'intérêt annuel, la durée en mois, la fréquence de capitalisation, 
 * la recomposition des intérêts et les frais de plateforme.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Elle définit d'abord une fonction auxiliaire `displayResults` pour afficher les résultats.
 * - Elle récupère et convertit en nombres les valeurs des éléments de l'interface utilisateur.
 * - Si une valeur essentielle est manquante, elle efface les résultats précédents et quitte la fonction.
 * - Si l'option "Lending" est sélectionnée :
 *   - Elle calcule les intérêts selon la fréquence de capitalisation.
 *   - Elle détermine les frais basés sur le pourcentage donné.
 *   - Elle calcule le montant final après addition des intérêts et soustraction des frais.
 *   - Elle utilise la fonction auxiliaire pour afficher les résultats.
 */

import { elements } from "../../DOM.js";

export const LendingCalcul = () => {
    const displayResults = (element, value, color, prefix = '', suffix = '') => {
        element.innerHTML = `${prefix} <span style="color: ${color}">${value}</span> ${suffix}`;
    };

    const montant = Number(elements.Input_Montant.value);
    const tauxInteret = Number(elements.Input_TauxInteret.value) / 100;
    const duree = Number(elements.Input_Duree.value);
    const fraisPlateforme = Number(elements.Input_FraisPlateforme.value) / 100;
    const recomposition = elements.Input_Recomposition.checked;

    if (!montant || !tauxInteret || !duree) {
        elements.ResultatPret.innerHTML = "";
        elements.InteretsPret.innerHTML = "";
        elements.FraisTotal.innerHTML = "";
        elements.ErrorContainerPretEmprunt.innerHTML = "Veuillez renseigner tous les champs nécessaires.";
        return;
    }

    let capitalisationPerAnnee;
    switch (elements.Input_FrequenceCapitalisationLendingBorrwing.value) {
        case 'daily':
            capitalisationPerAnnee = 365;
            break;
        case 'monthly':
            capitalisationPerAnnee = 12;
            break;
        case 'quarterly':
            capitalisationPerAnnee = 4;
            break;
        case 'annually':
        default:
            capitalisationPerAnnee = 1;
            break;
    }

    const temps = duree / 12;  // Convertir la durée en années
    const interets = montant * Math.pow(1 + (tauxInteret / capitalisationPerAnnee), capitalisationPerAnnee * temps) - montant;
    const frais = interets * fraisPlateforme;

    const montantFinal = montant + interets - (recomposition ? 0 : frais);

    displayResults(elements.ResultatPret, montantFinal.toFixed(2), 'green', 'Montant final après prêt : ', 'tokens');
    displayResults(elements.InteretsPret, interets.toFixed(2), 'green', 'Intérêts totaux gagnés : ', 'tokens');
    displayResults(elements.FraisTotal, frais.toFixed(2), 'red', 'Frais déduits : ', 'tokens');
}