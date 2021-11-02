import type { NextPage } from 'next'
import Card from '../components/Card'
import styles from '../styles/Form.module.css'
import Link from 'next/link'
import { InputNumber } from '../components/InputNumber'
import { useState } from 'react'

const Form: NextPage = () => {
	const [qtdDoors, setQtdDoors] = useState<number>(3)
	const [withGift, setWithgift] = useState<number>(2)

	return (
		<div className={styles.form}>
			<div>
				<Card bgcolor="#42f3a7">
					<h1>Monty Hall</h1>
				</Card>
				<Card>
					<InputNumber
						text="Qtd: "
						value={qtdDoors}
						onChange={(newQtdDoors) => setQtdDoors(newQtdDoors)}
					/>
				</Card>
			</div>
			<div>
				<Card>
					<InputNumber
						text="Door With Gift: "
						value={withGift}
						onChange={(newWithGift) => setWithgift(newWithGift)}
					/>
				</Card>
				<Card bgcolor="#ff94b9">
					<Link href={`/game/${qtdDoors}/${withGift}`} passHref>
						<h2 className={styles.link}>Start</h2>
					</Link>
				</Card>
			</div>
		</div>
	)
}

export default Form
