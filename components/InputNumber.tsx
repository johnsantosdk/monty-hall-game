import styles from '../styles/InputNumber.module.css'

type PropsInputNumber = {
	text: string
	value: number
	onChange: (newValue: number) => void
}

export const InputNumber = ({ text, value, onChange }: PropsInputNumber): JSX.Element => {
	const dec = () => onChange(value - 1)
	const inc = () => onChange(value + 1)

	return (
		<div className={styles.inputNumber}>
			<span className={styles.text}>{text}</span>
			<span className={styles.number}>{value}</span>
			<div className={styles.buttons}>
				<button className={styles.btn} onClick={dec}>
					-
				</button>
				<button className={styles.btn} onClick={inc}>
					+
				</button>
			</div>
		</div>
	)
}
