import { elements } from "../../../DOM.js";




export const APY = () => {

    const displayResults = (element, value, color, suffix = '') => {
        element.innerHTML = `${value} : <span style="color: ${color}">${suffix}</span>`;
    };

    const [quantitestaking, pourcentageapy, commission, frequency, temps] =
        [elements.Input_QuantiteStaking, elements.Input_PourcentageAPR, elements.Input_CommisionStaking, elements.Input_CapitalizationFrequency, elements.Input_RangeTemps]
            .map(el => el.value);

    const numeriqueQuantitestaking = Number(quantitestaking);
    const numeriqueCommission = Number(commission) / 100;
    const numeriquePourcentageapy = Number(pourcentageapy) / 100;
    const numeriqueTemps = Number(temps) / 365  // Conversion en années

    if (!numeriqueQuantitestaking || !numeriquePourcentageapy || !numeriqueCommission || !frequency) {
        [elements.ResultatCalculStaking, elements.WalletBeneficeStaking, elements.CommissionStaking].forEach(el => el.innerHTML = "");
        return;
    }

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

    if (elements.Input_APY.checked) {
        // Calcul de l'APY avec capitalisation
        const APYValue = Math.pow((1 + (numeriquePourcentageapy / n)), (n * numeriqueTemps)) - 1;
        const BrutTokenGagné = numeriqueQuantitestaking * APYValue;
        const commissionCalculee = BrutTokenGagné * numeriqueCommission;
        const NetTokenGagné = BrutTokenGagné - commissionCalculee;
        const TokenBenefice = NetTokenGagné + numeriqueQuantitestaking;

        displayResults(elements.ResultatCalculStaking, 'Tokens obtenus avec capitalisation', 'green', `${NetTokenGagné.toFixed(2)}`)
        displayResults(elements.WalletBeneficeStaking, 'Total de tokens après staking avec capitalisation', 'green', `${TokenBenefice.toFixed(2)}`)
        displayResults(elements.CommissionStaking, 'Tokens déduits en commission avec capitalisation', 'red', `${commissionCalculee.toFixed(2)}`)
    }

}


