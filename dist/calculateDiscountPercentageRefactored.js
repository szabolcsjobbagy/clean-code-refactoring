import { DISCOUNT_PERCENTAGES_BASE, DISCOUNT_PERCENTAGES_ADDITIONAL, } from "./constants";
export function calculateDiscountPercentage(membershipLevel) {
    let discountPercentage = getDiscount(membershipLevel, DISCOUNT_PERCENTAGES_BASE);
    discountPercentage += getDiscount(membershipLevel, DISCOUNT_PERCENTAGES_ADDITIONAL);
    return discountPercentage;
}
function getDiscount(membershipLevel, discountPercentagesObject) {
    const isMembershipLevelValid = String(membershipLevel).toUpperCase() in discountPercentagesObject;
    if (!isMembershipLevelValid)
        return discountPercentagesObject["DEFAULT"];
    return discountPercentagesObject[membershipLevel.toUpperCase()];
}
