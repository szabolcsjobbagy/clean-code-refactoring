import { calculateDiscountPercentage } from "../src/calculateDiscountPercentageRefactored"

describe("calculateDiscountPercentage", () => {
	it.each`
		level         | expectedOutput
		${"gold"}     | ${20}
		${"silver"}   | ${10}
		${"standard"} | ${5}
		${"unknown"}  | ${0}
		${100}        | ${0}
		${new Date()} | ${0}
	`("should return $expectedOutput for $level", (testCases) => {
		// Arrange
		const { level, expectedOutput } = testCases

		// Act
		const result = calculateDiscountPercentage(level)
		// Assert
		expect(result).toBe(expectedOutput)
	})
})
