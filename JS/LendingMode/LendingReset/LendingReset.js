/**
 * ResetLendingBorrowing():
 * 
 * Cette fonction a pour objectif de réinitialiser les valeurs et les résultats affichés relatifs au Lending/Borrowing 
 * dans l'interface utilisateur.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Elle récupère et convertit en nombres flottants les valeurs actuelles des éléments liés à :
 *   - Le montant (`Input_Montant`),
 *   - Le taux d'intérêt (`Input_TauxInteret`),
 *   - Les frais de la plateforme (`Input_FraisPlateforme`), 
 *   - La durée (`Input_Duree`).
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
 * d'entrée et les résultats pour le Lending/Borrowing.
 */

import { elements } from "../../DOM.js";

export const ResetLendingBorrowing = () => {

    const valueMontant = parseFloat(elements.Input_Montant.value);
    const valueTauxInteret = parseFloat(elements.Input_TauxInteret.value);
    const valueFraisPlateforme = parseFloat(elements.Input_FraisPlateforme.value);

    if (valueMontant > 0 || valueTauxInteret > 0 || valueFraisPlateforme > 0) {
        [elements.Input_Montant, elements.Input_TauxInteret, elements.Input_FraisPlateforme].forEach(input => input.value = "0");
        [elements.ResultatPret, elements.InteretsPret, elements.FraisTotal, elements.ResultatEmprunt, elements.InteretsEmprunt].forEach(element => element.innerHTML = "");
    }
}
