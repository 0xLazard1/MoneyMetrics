
/**
 * UpdateLevier():
 * 
 * Cette fonction met à jour les informations affichées concernant l'effet de levier sur le capital investi.
 * Elle ajuste les affichages en fonction des choix de l'utilisateur et de la valeur du levier sélectionné.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Vérifie si l'utilisateur a sélectionné le mode 'Levier' et n'a pas sélectionné le mode 'Spot'.
 *   Si c'est le cas :
 *     - Elle met à jour l'affichage pour montrer la valeur actuelle du levier.
 *     - Initialise la variable 'inial' avec la valeur 'null'.
 *     - Si 'inial' est 'null' (ce qui est toujours le cas ici) :
 *       - Elle met à jour 'inial' avec le capital investi de l'utilisateur.
 *       - Calcule le montant total investi (capital investi multiplié par la valeur du levier).
 *       - Affiche ce montant à côté du champ de saisie du capital investi, sauf si ce montant est zéro.
 * 
 */


import { elements } from "../../../DOM.js";


document.querySelectorAll('.lever-button').forEach(button => {
    button.addEventListener('click', function () {
        const lever = this.getAttribute('data-lever');
        elements.Input_RangeLevier.value = lever;
        elements.Levier_Value.textContent = lever;

        // Mettez à jour le multiplicateur ici si nécessaire
        let inial = elements.Input_CapitalInvesi.value;
        let multiplicator1 = inial * parseFloat(lever);
        if (multiplicator1 != 0) {
            elements.multiplicator.innerHTML = `(<span>${multiplicator1}$</span>)`;
        } else {
            elements.multiplicator.innerHTML = "";
        }
    });
});

export const UpdateLevier = () => {
    if (elements.Input_Levier.checked && !elements.Input_Spot.checked) {
        elements.Levier_Value.textContent = elements.Input_RangeLevier.value;

        let inial = null;

        if (inial == null) {
            inial = elements.Input_CapitalInvesi.value;


            let multiplicator1 = inial * parseFloat(Input_RangeLevier.value);
            if (multiplicator1 != 0) {
                elements.multiplicator.innerHTML = `(<span>${multiplicator1}$</span>)`;
            } else {
                elements.multiplicator.innerHTML = "";
            }

        }
    }
}