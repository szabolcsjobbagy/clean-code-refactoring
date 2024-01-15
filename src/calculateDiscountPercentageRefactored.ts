import {
	DISCOUNT_PERCENTAGES_BASE,
	DISCOUNT_PERCENTAGES_ADDITIONAL,
	DiscountPercentages,
} from "./constants"

export function calculateDiscountPercentage(membershipLevel: string): number {
	let discountPercentage: number = getDiscount(membershipLevel, DISCOUNT_PERCENTAGES_BASE)
	discountPercentage += getDiscount(membershipLevel, DISCOUNT_PERCENTAGES_ADDITIONAL)
	return discountPercentage
}

function getDiscount(
	membershipLevel: string,
	discountPercentagesObject: DiscountPercentages
): number {
	const isMembershipLevelValid =
		String(membershipLevel).toUpperCase() in discountPercentagesObject
	if (!isMembershipLevelValid) return discountPercentagesObject["DEFAULT"]
	return discountPercentagesObject[membershipLevel.toUpperCase()]
}
