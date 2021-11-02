import { ModelDoor } from '../model/Door'

export const createDoors = (qtd: number, selected: number): Array<ModelDoor> => {
	return Array.from({ length: qtd }, (_, i) => {
		const number = i + 1
		const thereGift = number === selected

		return new ModelDoor(number, thereGift)
	})
}

export const refreshDoors = (doors: ModelDoor[], modifiedDoor: ModelDoor): Array<ModelDoor> => {
	return doors.map((currentDoor) => {
		const equalModifiedDoor = currentDoor.number === modifiedDoor.number

		if (equalModifiedDoor) {
			return modifiedDoor
		} else {
			return modifiedDoor.isOpen ? currentDoor : currentDoor.unselect()
		}
	})
}
