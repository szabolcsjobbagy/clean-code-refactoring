class ShoppingCartOriginal {
	private items: CartItemOriginal[] = []

	constructor() {}

	addItem(product: string, price: number): void {
		const newItem = new CartItemOriginal(product, price)
		this.items.push(newItem)
	}

	calculateTotal(): number {
		let total = 0
		for (const item of this.items) {
			total += item.price
		}
		return total
	}
}

class CartItemOriginal {
	public product: string
	public price: number

	constructor(product: string, price: number) {
		this.product = product
		this.price = price
	}
}
