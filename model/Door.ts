export class ModelDoor {
	private _number: number
	private _thereGift: boolean
	private _selected: boolean
	private _isOpen: boolean

	constructor(number: number, thereGift = false, selected = false, isOpen = false) {
		this._number = number
		this._thereGift = thereGift
		this._selected = selected
		this._isOpen = isOpen
	}

	get number(): number {
		return this._number
	}

	get thereGift(): boolean {
		return this._thereGift
	}

	get selected(): boolean {
		return this._selected
	}

	get isOpen(): boolean {
		return this._isOpen
	}

	get isClose(): boolean {
		return !this._isOpen
	}

	unselect(): ModelDoor {
		const unselect = false
		return new ModelDoor(this.number, this.thereGift, unselect, this.isOpen)
	}

	toggleSelection(): ModelDoor {
		const selected = !this.selected
		return new ModelDoor(this.number, this.thereGift, selected, this.isOpen)
	}

	toggleIsOpen(): ModelDoor {
		const opened = true
		return new ModelDoor(this.number, this.thereGift, this.selected, opened)
	}
}
