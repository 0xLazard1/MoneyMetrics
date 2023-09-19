import { elements } from "../../../DOM.js";



const autoCompound = (principal, rate, periods, time, commission) => {
    let total = principal;
    const ratePerPeriod = rate / periods;
    const totalPeriods = periods * time;

    for (let i = 1; i <= totalPeriods; i++) {
        const interest = total * ratePerPeriod;
        const commissionDeducted = interest * commission;
        const netInterest = interest - commissionDeducted;
        total += netInterest;
    }

    return total;
}

export const APY = () => {

    const displayResults = (element, value, color, suffix = '') => {
        element.innerHTML = `${value} : <span style="color: ${color}">${suffix}</span>`;
    };

    const [quantitestaking, pourcentageapy, commission, frequency, temps] =
        [elements.Input_QuantiteStaking, elements.Input_PourcentageAPR, elements.Input_CommisionStaking, elements.Input_CapitalizationFrequency, elements.Input_RangeTemps
        ]
            .map(el => el.value);

    const numeriqueQuantitestaking = Number(quantitestaking);
    const numeriqueCommission = Number(commission) / 100;
    const numeriquePourcentageapy = Number(pourcentageapy) / 100;
    const numeriqueTemps = Number(temps) / 365;  // Conversion en années

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

        if (elements.Toggle_AutoCompound.checked) {
            // Votre logique de capitalisation automatique (autoCompound) ici.
            const TokenBenefice = autoCompound(
                numeriqueQuantitestaking,
                numeriquePourcentageapy,
                n,
                numeriqueTemps,
                numeriqueCommission / 100
            );

            const NetTokenGagné = TokenBenefice - numeriqueQuantitestaking;

            displayResults(elements.ResultatCalculStaking, 'Tokens obtenus avec capitalisation automatique', 'green', `${NetTokenGagné.toFixed(2)}`);
            displayResults(elements.WalletBeneficeStaking, 'Total de tokens après staking avec capitalisation automatique', 'green', `${TokenBenefice.toFixed(2)}`);
        } else {
            // Votre logique existante pour le calcul APY sans capitalisation automatique
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



}