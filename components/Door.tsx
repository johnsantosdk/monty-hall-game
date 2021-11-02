import { SyntheticEvent } from 'react'
import styles from '../styles/Door.module.css'
// import PropTypes, { InferProps } from 'prop-types'
import { ModelDoor } from '../model/Door'
import { Gift } from './Gift'

type DoorProps = {
	value: ModelDoor
	onChange: (newDoor: ModelDoor) => void
}

const Door = (props: DoorProps): JSX.Element => {
	const door = props.value
	const select = door.selected && !door.isOpen ? styles.selected : false

	const toggleSelection = (e: SyntheticEvent): void => {
		e.preventDefault()
		props.onChange(door.toggleSelection())
	}
	const open = (e: SyntheticEvent): void => {
		e.preventDefault()
		e.stopPropagation()
		props.onChange(door.toggleIsOpen())
	}

	const renderDoor = () => (
		<div className={styles.door}>
			<div className={styles.number}>{door.number}</div>
			<div className={styles.doorHandle} onClick={open}></div>
		</div>
	)

	return (
		<div className={styles.area} onClick={toggleSelection}>
			<div className={`${styles.frame} ${select}`}>
				{door.isClose ? renderDoor() : door.thereGift ? <Gift /> : false}
			</div>
			<div className={styles.floor}></div>
		</div>
	)
}

// Door.propTypes = {
// 	selected: PropTypes.bool,
// }

export default Door
