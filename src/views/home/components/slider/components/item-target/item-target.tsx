import { PageData } from "../../../../types/data.type"
import styles from "./styles.module.sass"
export const ItemTarget = ({
	img,
	title,
	description,
	prevPrice,
	price,
}: PageData) => {
	return (
		<div
			className={styles.item_bg}
			style={{ backgroundImage: `url(${img})` }}
		>
			<div className={styles.item}>
				<img src={img} alt={title} />
				<div className={styles.details}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.description}>{description}</p>
					<p className={styles.price}>
						<span>${price} MXN</span>
						{prevPrice > 0 && (
							<span className={styles.prevPrice}>
								${prevPrice} MXN
							</span>
						)}
					</p>
					<div className={styles.inputs}>
						<label>
							<span>Talla</span>
							<input type="text" />
						</label>
						<label>
							<span>Cantidad</span>
							<input type="number" />
						</label>
					</div>

					<div className={styles.buttons}>
						<div className={styles.addCar}>Agregar al carrito</div>
						<div className={styles.paypal}>
							Comprar con <span className={styles.pay}>Pay</span>
							<span className={styles.pal}>Pal</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
