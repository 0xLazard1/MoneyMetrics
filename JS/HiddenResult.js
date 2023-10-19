
import { elements } from "./DOM.js"
export const HiddenResult = () => {

    Object.assign(elements.AffichageDroiteID.style, { display: "block" })
    Object.assign(elements.AffichageDroiteIDStaking.style, { display: "block" })
    Object.assign(elements.AffichageDroiteIDNFT.style, { display: "block" })
    Object.assign(elements.AffichageDroiteIDLending.style, { display: "block" })
    console.log("test")

}

export const HiddenResult2 = () => {
    Object.assign(elements.AffichageDroiteID.style, { display: "none" })
    Object.assign(elements.AffichageDroiteIDStaking.style, { display: "none" })
    Object.assign(elements.AffichageDroiteIDLending.style, { display: "none" })
    Object.assign(elements.AffichageDroiteIDNFT.style, { display: "none" })
    console.log("test2")
}

