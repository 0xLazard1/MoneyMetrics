import { elements } from "../../../DOM.js";

export const APY = () => {

    const displayResults = (element, value, color, suffix = '') => {
        element.innerHTML = `${value} : <span style="color: ${color}">${suffix}</span>`;
    };

    const [quantitestaking, pourcentageapy, commission, frequency, temps] =
        [elements.Input_QuantiteStaking, elements.Input_PourcentageAPR, elements.Input_CommisionStaking, elements.Input_CapitalizationFrequency, elements.Input_RangeTemps
        ]
            .map(el => el.value);

    const numeriquePourcentageapy = Number(pourcentageapy);
    const numeriqueQuantitestaking = Number(quantitestaking);
    const numeriqueCommission = Number(commission);

    if (!numeriqueQuantitestaking || !numeriquePourcentageapy || !numeriqueCommission || !frequency) {
        [elements.ResultatCalculStaking, elements.WalletBeneficeStaking, elements.CommissionStaking].forEach(el => el.innerHTML = "");
        return;
    }

    if (elements.Input_APY.checked) {

        let n; // Nombre de périodes de capitalisation par an
        switch (frequency) {
            case 'daily':
                n = 365;
                break;
            case 'monthly':
                n = 12;
                break;
            case 'quarterly':
                n = 4;
                break;
            case 'annually':
                n = 1;
                break;
            default:
                n = 1;
        }

        //add the variable to calculate automatically nettokengagné with autocompound
        const APYValue = (1 + (numeriquePourcentageapy / n)) ** (n * temps) - 1; // Formule pour l'APY
        const BrutTokenGagné = numeriqueQuantitestaking * APYValue;   // Total des tokens gagnés
        const commission = BrutTokenGagné * numeriqueCommission / 100;       // Commission basée sur le pourcentage
        const NetTokenGagné = BrutTokenGagné - commission;              // Tokens après soustraction de la commission
        const TokenBenefice = NetTokenGagné + numeriqueQuantitestaking;       // Total des tokens après ajout du bénéfice net

        //change the display because very high number
        displayResults(elements.ResultatCalculStaking, 'Tokens obtenus avec capitalisation', 'green', `${NetTokenGagné.toFixed(1)}`)

        displayResults(elements.WalletBeneficeStaking, 'Total de tokens après staking avec capitalisation', 'green', `${TokenBenefice.toFixed(2)}`)
        displayResults(elements.CommissionStaking, 'Tokens déduits en commission avec capitalisation', 'red', `${commission.toFixed(2)}`)
    }
}
