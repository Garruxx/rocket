import styles from "./styles.module.sass"
import estelarIconShirt from "../../../assets/estelar shirt.svg"
import wefereIconShirt from "../../../assets/wefere shirt.svg"
import creatorsIcon from "../../../assets/group.svg"
import carIcon from "../../../assets/car shopping.svg"
import { CarIcon } from "./icons/car.icon"
import { SearchIcon } from "./icons/search.icon"
import { MenuIcon } from "./icons/menu.icon"

export const Menu = () => {
	const handleChange = (isChecked: boolean) => {
		document.querySelectorAll("label[for='menu']").forEach((el) => {
			el.setAttribute("active", isChecked ? "true" : "")
		})
	}
	return (
		<>
			<label>
				<input
					type="checkbox"
					className={styles.check}
					onChange={(e) => {
						handleChange(e.target.checked)
					}}
					id="menu"
					hidden
				/>
				<div className={styles.menu}>
					<h2>Menú</h2>
					<div className={styles.top}>
						<div className={styles.item}>
							<img src={estelarIconShirt} alt="estelar shirt" />
							<span>Estelar</span>
						</div>
						<div className={styles.item}>
							<img src={wefereIconShirt} alt="wefere shirt" />
							<span>Wefere</span>
						</div>
						<div className={styles.item}>
							<img src={carIcon} alt="car icon" />
							<span>Carrito</span>
						</div>
					</div>
					<div className={styles.bottom}>
						<div className={styles.item}>
							<img src={creatorsIcon} alt="creators" />
							<span>Creators</span>
						</div>
					</div>
				</div>
			</label>
		</>
	)
}

export const MobileMenu = () => {
	return (
		<div className={styles.mobile_menu}>
			<label htmlFor="menu">
				<div className={styles.mb_item}>
					<MenuIcon />
					<span>Menú</span>
				</div>
			</label>
			<label htmlFor="search">
				<div className={styles.mb_item}>
					<SearchIcon />
					<span>Buscar</span>
				</div>
			</label>
			<div className={`${styles.mb_item} ${styles.home}`}>
				<CarIcon />
				<span>Home</span>
			</div>
		</div>
	)
}
