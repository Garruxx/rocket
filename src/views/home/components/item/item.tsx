import { PageData } from "../../types/data.type"
import styles from "./styles.module.sass"

export const Item = ({
	img,
	title,
	link,
	providerImg,
	provider,
	price,
	prevPrice,
}: PageData) => {
	return (
		<a href={link}>
			<div className={styles.item}>
				<div
					className={styles.img}
					style={{
						backgroundImage: `url(${img})`,
					}}
				>
					<div>
						<img src={img} alt={title} />
					</div>
				</div>
				<div className={styles.details}>
					<div className={styles.title} title={title}>
						<h2>{title}</h2>
						<img src={providerImg} alt={provider} />
					</div>
					<div className={styles.price}>
						<span>${price}.00 MXN</span>
						{prevPrice > 0 && (
							<span className={styles.prevPrice}>
								${prevPrice}.00 MXN
							</span>
						)}
					</div>
				</div>
			</div>
		</a>
	)
}
