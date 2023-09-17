/**
 * UpdateTemps():
 * 
 * Elle ajuste les affichages en fonction des choix de l'utilisateur et de la valeur du levier sélectionné.
 * 
 * Voici ce que fait cette fonction :
 *
 *     - Elle met à jour l'affichage pour montrer la valeur actuelle du temps en jours.
 * 
 * 
 */





import { elements } from "../../../DOM.js";


export const UpdateTemps = () => {

   
     elements.Temps_Value.textContent = elements.Input_RangeTemps.value + 'jours';
    
 
}