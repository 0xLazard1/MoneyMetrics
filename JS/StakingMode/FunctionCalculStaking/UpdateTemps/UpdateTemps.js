/**
 * UpdateTemps():
 * 
 * Cette fonction met à jour les informations affichées concernant la durée de la position en jours.
 * Elle ajuste les affichages en fonction des choix de l'utilisateur et de la valeur de la durée sélectionnée.
 * 
 * Voici ce que fait cette fonction :
 * 
 *     - Elle met à jour l'affichage pour montrer la valeur actuelle du temps en jours.
 * 
 */

import { elements } from "../../../DOM.js";


document.querySelectorAll('.Composent_TradingButton_Selection_Staking').forEach(button => {
     button.addEventListener('click', function () {
          const jours = this.getAttribute('data-days');
          elements.Input_RangeTemps.value = jours;
          elements.Temps_Value.textContent = jours + ' days';
     });
});

// Mettre à jour le texte quand le slider change
export const UpdateTemps = () => {
     elements.Temps_Value.textContent = elements.Input_RangeTemps.value + ' days';
}