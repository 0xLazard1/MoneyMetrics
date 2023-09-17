/**
 * APR():
 * 
 * Cette fonction gère le calcul de l'APR (Annual Percentage Rate) pour le staking de tokens.
 * Elle effectue des calculs basés sur les entrées de l'utilisateur concernant la quantité stakée,
 * le pourcentage d'APR, et la commission.
 * 
 * Voici ce que fait cette fonction :
 * 
 * - Elle définit d'abord une fonction auxiliaire `displayResults` pour afficher les résultats.
 * - Elle récupère et convertit en nombres les valeurs des éléments de l'interface utilisateur.
 * - Si une valeur essentielle est manquante, elle efface les résultats précédents et quitte la fonction.
 * - Si l'option de staking est sélectionnée :
 *   - Elle calcule le total brut des tokens gagnés.
 *   - Elle détermine la commission basée sur le pourcentage donné.
 *   - Elle calcule les tokens nets gagnés après soustraction de la commission.
 *   - Elle détermine le bénéfice total en tokens après ajout du bénéfice net.
 *   - Elle utilise la fonction auxiliaire pour afficher les résultats : 
 *     - Nombre total de tokens,
 *     - Nombre de tokens gagnés,
 *     - Tokens perdus en commission.
 */


import { elements } from "../../../DOM.js";


export const APR = () => {


    const displayResults = (element, value, color, suffix = '') => {
        element.innerHTML = `${value} : <span style="color: ${color}">${suffix}</span>`;
    };

    const [quantitestaking, pourcentageapr, commission, temps] =
        [elements.Input_QuantiteStaking, elements.Input_PourcentageAPR, elements.Input_CommisionStaking, elements.Input_RangeTemps
        ]
            .map(el => Number(el.value));

    if (!quantitestaking || !pourcentageapr || !commission) {
        [elements.ResultatCalculStaking, elements.WalletBeneficeStaking, elements.CommissionStaking].forEach(el => el.innerHTML = "");
        return;
    }

    if (elements.Input_Staking, elements.Input_APR.checked) {
        const TauxAnnuelEnDecimal = pourcentageapr / 100;
        const TauxJournalier = TauxAnnuelEnDecimal / 365;
        const TotalTokensAvecInteret = quantitestaking * Math.pow((1 + TauxJournalier), temps);
        const TokensGagnes = TotalTokensAvecInteret - quantitestaking;
        const TauxCommission = commission / 100;
        const TokensApresCommission = TokensGagnes * (1 - TauxCommission);
        const TotalTokensFinal = quantitestaking + TokensApresCommission;
        const TempsPourDoublerArrondi = Math.round(Math.log(2) / Math.log(1 + TauxJournalier));
        const dureePourDoubler = convertirJoursEnDuree(TempsPourDoublerArrondi);
        const TokensParJour = TokensApresCommission / temps;
        const TokensParSemaine = (TokensApresCommission / temps) * 7;
        const TokensParMois = (TokensApresCommission / temps) * 30;

        // Affichage des résultats
        displayResults(ResultatCalculStaking, 'Gains nets en tokens (après commission)', 'green', `${TokensApresCommission.toFixed(2)}`);
        displayResults(WalletBeneficeStaking, 'Total de tokens en portefeuille après staking', 'green', `${TotalTokensFinal.toFixed(2)}`);
        displayResults(CommissionStaking, 'Perte en tokens due à la commission', 'red', `${(TokensGagnes - TokensApresCommission).toFixed(2)}`);
        if (temps >= 30) {
            displayResults(TokensParMoisDisplay, 'Tokens par mois après commission', 'green', `${TokensParMois.toFixed(2)}`);
        }

        if (temps >= 7) {
            displayResults(TokensParSemaineDisplay, 'Tokens par semaine après commission', 'green', `${TokensParSemaine.toFixed(2)}`);
        }

        if (temps >= 1) {
            displayResults(TokensParJourDisplay, 'Tokens par jour après commission', 'green', `${TokensParJour.toFixed(2)}`);
        }
        displayResults(TempsPourDoublerDisplay, 'Temps nécessaire pour doubler les tokens', 'blue', dureePourDoubler);
    }


    function convertirJoursEnDuree(jours) {
        const annees = Math.floor(jours / 365);
        jours %= 365;

        const mois = Math.floor(jours / 30);
        jours %= 30;

        let duree = "";

        if (annees > 0) {
            duree += `${annees} an${annees > 1 ? 's' : ''} `;
        }

        if (mois > 0) {
            duree += `${mois} mois `;
        }

        if (jours > 0) {
            duree += `${jours} jour${jours > 1 ? 's' : ''}`;
        }

        return duree;
    }

}


