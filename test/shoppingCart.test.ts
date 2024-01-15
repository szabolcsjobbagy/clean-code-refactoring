import { ShoppingCart, CartItem } from "../src/shoppingCartRefactored"

let shoppingCart: ShoppingCart

beforeEach(() => {
	shoppingCart = new ShoppingCart()
})

describe("ShoppingCart", () => {
	describe("addItem", () => {
		let cartItem: CartItem

		it.each`
			product      | price | expectedOutput
			${"shampoo"} | ${10} | ${[new CartItem("shampoo", 10)]}
		`(
			"should add cart item (product, price): $product, $price to the shopping cart",
			(testCases) => {
				// Arrange
				const { product, price, expectedOutput } = testCases
				cartItem = new CartItem(product, price)

				// Act
				shoppingCart.addItem(cartItem)

				// Assert
				expect(shoppingCart.getItems()).toStrictEqual(expectedOutput)
			}
		)
	})

	describe("calculateTotal", () => {
		it.each`
			item1                          | item2                            | expectedOutput
			${new CartItem("shampoo", 10)} | ${new CartItem("detergent", 20)} | ${30}
		`("should calculate the total of cart item prices in the shopping cart", (testCases) => {
			// Arrange
			const { item1, item2, expectedOutput } = testCases

			// Act
			shoppingCart.addItem(item1)
			shoppingCart.addItem(item2)

			// Assert
			expect(shoppingCart.calculateTotal()).toBe(expectedOutput)
		})
	})
})
