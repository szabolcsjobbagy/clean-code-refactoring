export class ShoppingCart {
	private items: CartItem[] = []

	constructor() {}

	addItem(newItem: CartItem): void {
		this.items.push(newItem)
	}

	getItems(): CartItem[] {
		return this.items
	}

	calculateTotal(): number {
		return this.items.reduce((total, item) => {
			return total + item.getPrice()
		}, 0)
	}
}

export class CartItem {
	private product: string
	private price: number

	constructor(product: string, price: number) {
		this.product = product
		this.price = price
	}

	getProduct(): string {
		return this.product
	}

	getPrice(): number {
		return this.price
	}
}
