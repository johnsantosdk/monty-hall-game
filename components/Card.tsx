import styles from '../styles/Card.module.css'

type CardProps = {
	bgcolor?: string
	children?: JSX.Element
}

const Card = ({ bgcolor, children }: CardProps): JSX.Element => {
	return (
		<div className={styles.card} style={{ backgroundColor: bgcolor ?? '#fff' }}>
			{children}
		</div>
	)
}

export default Card
