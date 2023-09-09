
import { elements } from "../../DOM.js";
import { Reset } from "../FunctionReset/Reset.js";

const displayResults = (element, value, color) => {
    element.innerHTML = `<span style="color: ${color};">${value}</span>`;
};



export const ErreursLong = () => {
    Reset();
    displayResults(elements.ErrorContainer, 'Un problème dans le mode long', 'red');
}

export const ErreursShort = () => {
    Reset();
    displayResults(elements.ErrorContainer, 'Un problème dans le mode short', 'red');
}


export const ErreursLiquidation = () => { }

export const ErreurStopLoss = () => {
    Reset();
    displayResults(elements.ErrorContainer, 'Un problème dans le StopLoss', 'red');
}