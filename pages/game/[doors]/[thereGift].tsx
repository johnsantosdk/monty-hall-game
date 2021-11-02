import { useEffect, useState } from 'react'
import Door from '../../../components/Door'
import { createDoors, refreshDoors } from '../../../functions/doors'
import { ModelDoor } from '../../../model/Door'
import Link from 'next/link'
import { useRouter } from 'next/router'

import style from '../../../styles/Game.module.css'
// import styleDoor from '../../styles/Door.module.css'

const game = (): JSX.Element => {
	const router = useRouter()

	const [validate, setValidate] = useState<boolean>(false)
	const [doors, setDoors] = useState<Array<ModelDoor>>([])

	useEffect(() => {
		const doors = Number(router.query.doors)
		const thereGift = Number(router.query.thereGift)

		const qtdDoorsValidate = doors >= 3 && doors <= 100
		const thereGiftValidadte = thereGift >= 1 && thereGift <= doors

		setValidate(qtdDoorsValidate && thereGiftValidadte)
		setDoors(createDoors(doors, thereGift))
	}, [router?.query])

	useEffect(() => {
		const doors = Number(router.query.doors)
		const thereGift = Number(router.query.thereGift)
		setDoors(createDoors(doors, thereGift))
	}, [router?.query])

	const renderDoors = (): JSX.Element[] => {
		return doors.map((door) => {
			return (
				<Door
					key={door.number}
					value={door}
					onChange={(newDoor) => setDoors(refreshDoors(doors, newDoor))}
				/>
			)
		})
	}

	return (
		<div className={style.game}>
			<div className={style.doors}>{validate ? renderDoors() : <h2>Invalid Values!!</h2>}</div>
			<div className={style.buttons}>
				<Link href="/" passHref>
					<button>Home</button>
				</Link>
			</div>
		</div>
	)
}

export default game
