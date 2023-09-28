import { elements } from "../../../DOM.js";

document.querySelectorAll('.temps-button-lending').forEach(button => {
    button.addEventListener('click', function () {
        const jours = this.getAttribute('data-days');
        elements.Input_RangeTemps_Lending.value = jours;
        elements.Temps_Value_Lending.textContent = jours + ' jours';
    });
});

// Mettre à jour le texte quand le slider change
export const UpdateTemps_lending = () => {
    elements.Temps_Value_Lending.textContent = elements.Input_RangeTemps_Lending.value + ' jours';
}