import { DISCOUNT_PERCENTAGES_BASE, DISCOUNT_PERCENTAGES_ADDITIONAL, } from "./constants";
export function calculateDiscountPercentage(membershipLevel) {
    let discountPercentage = getDiscount(membershipLevel, DISCOUNT_PERCENTAGES_BASE);
    discountPercentage += getDiscount(membershipLevel, DISCOUNT_PERCENTAGES_ADDITIONAL);
    return discountPercentage;
}
function getDiscount(membershipLevel, discountPercentagesObject) {
    if (!(String(membershipLevel).toUpperCase() in discountPercentagesObject))
        return discountPercentagesObject["DEFAULT"];
    return discountPercentagesObject[membershipLevel.toUpperCase()];
}
