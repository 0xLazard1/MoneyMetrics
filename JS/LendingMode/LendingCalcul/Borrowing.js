/**
 * BorrowingCalcul():
 * 
 * Cette fonction gère le calcul des intérêts pour l'emprunt de tokens.
 * Elle effectue des calculs basés sur les entrées de l'utilisateur concernant 
 * le montant emprunté, le taux d'intérêt annuel, la durée en mois, la fréquence de capitalisation, 
 * la recomposition des intérêts et les frais de plateforme.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Elle définit d'abord une fonction auxiliaire `displayResults` pour afficher les résultats.
 * - Elle récupère et convertit en nombres les valeurs des éléments de l'interface utilisateur.
 * - Si une valeur essentielle est manquante, elle efface les résultats précédents et quitte la fonction.
 * - Si l'option "Borrowing" est sélectionnée :
 *   - Elle calcule les intérêts selon la fréquence de capitalisation.
 *   - Elle détermine les frais basés sur le pourcentage donné.
 *   - Elle calcule le montant final à rembourser.
 *   - Elle utilise la fonction auxiliaire pour afficher les résultats.
 */

import { elements } from "../../DOM.js";

export const Borrowing = () => {

    const displayResults = (element, value, color, suffix = '') => {
        element.innerHTML = `${value} : <span style="color: ${color}">${suffix}</span>`;
    };

    const [montant, tauxInteret, duree, fraisPlateforme] =
        [elements.Input_Montant, elements.Input_TauxInteret, elements.Input_Duree, elements.Input_FraisPlateforme]
            .map(el => Number(el.value));

    if (!montant || !tauxInteret || !duree) {
        [elements.ResultatEmprunt, elements.InteretsEmprunt, elements.FraisTotal].forEach(el => el.innerHTML = "");
        return;
    }

    if (elements.Input_Emprunt.checked) {
        let montantTotal = montant;
        let interetsTotal = 0;
        const frais = montant * fraisPlateforme / 100;

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

        for (let i = 0; i < duree; i++) {
            const interetsPourLeMois = (montantTotal * tauxInteret / 12) / capitalisationPerAnnee; // assuming yearly rate
            interetsTotal += interetsPourLeMois;
            if (elements.Input_Recomposition.checked) {
                montantTotal += interetsPourLeMois;
            }
        }

        montantTotal += frais;

        displayResults(elements.ResultatEmprunt, 'Montant total à rembourser après emprunt', 'red', `${montantTotal.toFixed(2)} tokens`);
        displayResults(elements.InteretsEmprunt, 'Intérêts accumulés', 'red', `${interetsTotal.toFixed(2)} tokens`);
        displayResults(elements.FraisTotal, 'Frais de plateforme', 'red', `${frais.toFixed(2)} tokens`);
    }
}
